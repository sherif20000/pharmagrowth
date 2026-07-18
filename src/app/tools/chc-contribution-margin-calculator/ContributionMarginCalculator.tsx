"use client";

import { useState } from "react";

// CHC brand contribution P&L, the way a brand manager actually models it:
//   Net Sales  -  COGS  =  Gross Profit
//   Gross Profit  -  Trade spend  -  A&P  =  Contribution Margin
// Trade and A&P are entered as % of net sales (the CHC benchmarking convention).

function money(n: number, dp = 0): string {
  if (!isFinite(n)) return "—";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: dp,
    maximumFractionDigits: dp,
  }).format(n);
}

function pct(n: number): string {
  if (!isFinite(n)) return "—";
  return `${(n * 100).toFixed(1)}%`;
}

function units(n: number): string {
  if (!isFinite(n) || n < 0) return "—";
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
}

type PnLRow = {
  label: string;
  perUnit: number;
  annual: number;
  pctNet: number;
  emphasis?: "gross" | "contribution" | "cost";
};

export default function ContributionMarginCalculator() {
  const [price, setPrice] = useState(20); // net price per unit (SAR, ex-factory / net revenue)
  const [cogs, setCogs] = useState(7); // COGS per unit
  const [volume, setVolume] = useState(500000); // annual units
  const [tradePct, setTradePct] = useState(18); // % of net sales
  const [apPct, setApPct] = useState(15); // % of net sales
  const [fixedCosts, setFixedCosts] = useState(0); // SAR / year (optional)

  const t = tradePct / 100;
  const ap = apPct / 100;

  const netSales = price * volume;
  const grossProfitPerUnit = price - cogs;
  const grossProfit = grossProfitPerUnit * volume;
  const gmPct = netSales > 0 ? grossProfit / netSales : NaN;

  const tradeSar = netSales * t;
  const apSar = netSales * ap;
  const tradePerUnit = price * t;
  const apPerUnit = price * ap;

  const contribution = grossProfit - tradeSar - apSar;
  const contribPerUnit = grossProfitPerUnit - tradePerUnit - apPerUnit;
  const cmPct = netSales > 0 ? contribution / netSales : NaN;

  const breakEvenUnits =
    fixedCosts > 0 && contribPerUnit > 0 ? fixedCosts / contribPerUnit : NaN;
  const profitAfterFixed = contribution - fixedCosts;

  const rows: PnLRow[] = [
    { label: "Net sales", perUnit: price, annual: netSales, pctNet: 1 },
    { label: "COGS", perUnit: -cogs, annual: -cogs * volume, pctNet: netSales > 0 ? -(cogs * volume) / netSales : NaN, emphasis: "cost" },
    { label: "Gross profit", perUnit: grossProfitPerUnit, annual: grossProfit, pctNet: gmPct, emphasis: "gross" },
    { label: "Trade spend", perUnit: -tradePerUnit, annual: -tradeSar, pctNet: -t, emphasis: "cost" },
    { label: "A&P spend", perUnit: -apPerUnit, annual: -apSar, pctNet: -ap, emphasis: "cost" },
    { label: "Contribution margin", perUnit: contribPerUnit, annual: contribution, pctNet: cmPct, emphasis: "contribution" },
  ];

  const cmNegative = contribution < 0;

  const inputCls =
    "w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-transparent";
  const labelCls = "block text-sm text-navy-300 mb-2 font-medium";

  return (
    <div className="grid lg:grid-cols-5 gap-8 items-start">
      {/* Inputs */}
      <div className="lg:col-span-2 bg-navy-900 border border-white/10 rounded-2xl p-6 lg:p-8">
        <h2 className="text-lg font-bold text-white mb-6">Your brand inputs</h2>
        <div className="space-y-5">
          <div>
            <label className={labelCls} htmlFor="price">Net price per unit (SAR)</label>
            <input id="price" type="number" min={0} step={0.5} value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value) || 0)} className={inputCls} />
            <p className="text-navy-600 text-xs mt-1.5">Your ex-factory / net revenue per unit.</p>
          </div>
          <div>
            <label className={labelCls} htmlFor="cogs">COGS per unit (SAR)</label>
            <input id="cogs" type="number" min={0} step={0.5} value={cogs}
              onChange={(e) => setCogs(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="vol">Annual volume (units)</label>
            <input id="vol" type="number" min={0} step={1000} value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="trade">Trade spend (% of net sales)</label>
            <input id="trade" type="number" min={0} max={100} step={1} value={tradePct}
              onChange={(e) => setTradePct(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="ap">A&amp;P spend (% of net sales)</label>
            <input id="ap" type="number" min={0} max={100} step={1} value={apPct}
              onChange={(e) => setApPct(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="fixed">Fixed costs (SAR / year, optional)</label>
            <input id="fixed" type="number" min={0} step={1000} value={fixedCosts}
              onChange={(e) => setFixedCosts(parseFloat(e.target.value) || 0)} className={inputCls} />
            <p className="text-navy-600 text-xs mt-1.5">Overheads dedicated to the brand — enables break-even.</p>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-3 space-y-6">
        {/* Key numbers */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-5">
            <p className="text-navy-500 text-xs uppercase tracking-wide mb-1">Contribution margin</p>
            <p className={`text-2xl font-bold ${cmNegative ? "text-red-400" : "text-accent-400"}`}>{pct(cmPct)}</p>
            <p className="text-navy-600 text-xs mt-1">of net sales</p>
          </div>
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-5">
            <p className="text-navy-500 text-xs uppercase tracking-wide mb-1">Annual contribution</p>
            <p className={`text-2xl font-bold ${cmNegative ? "text-red-400" : "text-white"}`}>{money(contribution)}</p>
            <p className="text-navy-600 text-xs mt-1">SAR / year</p>
          </div>
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-5">
            <p className="text-navy-500 text-xs uppercase tracking-wide mb-1">Break-even volume</p>
            <p className="text-white text-2xl font-bold">{units(breakEvenUnits)}</p>
            <p className="text-navy-600 text-xs mt-1">{fixedCosts > 0 ? "units / year" : "add fixed costs"}</p>
          </div>
        </div>

        {cmNegative && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <p className="text-red-300 text-sm">
              Contribution margin is negative — trade and A&amp;P are eating more than your gross
              profit. Every unit sold loses money before you even cover overheads. Cut spend, raise
              price, or improve COGS.
            </p>
          </div>
        )}
        {!cmNegative && fixedCosts > 0 && (
          <div className={`rounded-xl p-4 border ${profitAfterFixed >= 0 ? "bg-navy-900 border-white/10" : "bg-amber-500/10 border-amber-500/30"}`}>
            <p className={`text-sm ${profitAfterFixed >= 0 ? "text-navy-300" : "text-amber-300"}`}>
              {profitAfterFixed >= 0
                ? `After fixed costs, the brand delivers ${money(profitAfterFixed)} SAR of profit. You clear break-even at ${units(breakEvenUnits)} units.`
                : `You are below break-even by ${money(-profitAfterFixed)} SAR. You need ${units(breakEvenUnits)} units to cover fixed costs — you planned ${units(volume)}.`}
            </p>
          </div>
        )}

        {/* P&L table */}
        <div className="bg-navy-900 border border-white/10 rounded-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/5">
            <h3 className="text-white font-semibold">Brand contribution P&amp;L</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-navy-500 text-xs uppercase tracking-wide">
                  <th className="text-left font-semibold px-6 py-3">Line</th>
                  <th className="text-right font-semibold px-4 py-3">Per unit</th>
                  <th className="text-right font-semibold px-4 py-3">Annual</th>
                  <th className="text-right font-semibold px-6 py-3">% net</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => {
                  const isTotal = r.emphasis === "gross" || r.emphasis === "contribution";
                  const valColor =
                    r.emphasis === "contribution"
                      ? cmNegative ? "text-red-400" : "text-accent-400"
                      : r.emphasis === "cost"
                      ? "text-navy-400"
                      : "text-white";
                  return (
                    <tr key={i} className={`border-t border-white/5 ${isTotal ? "bg-white/[0.02]" : ""}`}>
                      <td className={`px-6 py-3 ${isTotal ? "text-white font-semibold" : "text-navy-300"}`}>{r.label}</td>
                      <td className={`px-4 py-3 text-right font-medium ${valColor}`}>{money(r.perUnit, 2)}</td>
                      <td className={`px-4 py-3 text-right font-medium ${valColor}`}>{money(r.annual)}</td>
                      <td className="px-6 py-3 text-right text-navy-500">{pct(Math.abs(r.pctNet))}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-navy-600 text-xs leading-relaxed">
          Trade and A&amp;P are modeled as a percentage of net sales — the standard CHC benchmarking
          convention. Contribution margin is what remains to cover fixed overheads and deliver brand
          profit.
        </p>
      </div>
    </div>
  );
}
