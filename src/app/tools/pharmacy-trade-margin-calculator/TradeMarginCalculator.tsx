"use client";

import { useState } from "react";

// All margins are expressed on the SELLING price of each tier (standard trade convention),
// not markup on cost. The chain modeled is:
//   Manufacturer/Marketer -> Distributor -> Pharmacy -> Consumer
// Prices flow backward from the consumer price the shopper pays.

function sar(n: number): string {
  if (!isFinite(n)) return "—";
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

function pct(n: number): string {
  if (!isFinite(n)) return "—";
  return `${(n * 100).toFixed(1)}%`;
}

type Row = { label: string; sublabel: string; amount: number; color: string };

export default function TradeMarginCalculator() {
  const [consumerPrice, setConsumerPrice] = useState(50); // SAR, incl. VAT
  const [vat, setVat] = useState(15); // %
  const [pharmacyMargin, setPharmacyMargin] = useState(25); // % on retail ex-VAT price
  const [distributorMargin, setDistributorMargin] = useState(10); // % on distributor selling price
  const [cogs, setCogs] = useState(8); // SAR

  const vatRate = vat / 100;
  const phMargin = pharmacyMargin / 100;
  const distMargin = distributorMargin / 100;

  // Work backward from the consumer price
  const consumerExVat = consumerPrice / (1 + vatRate);
  const vatAmount = consumerPrice - consumerExVat;

  // Pharmacy buys from distributor. Pharmacy margin is on the pharmacy's selling price (consumerExVat).
  const pharmacyPurchasePrice = consumerExVat * (1 - phMargin);
  const pharmacyProfit = consumerExVat - pharmacyPurchasePrice;

  // Distributor sells to pharmacy at pharmacyPurchasePrice. Distributor margin is on that selling price.
  const exFactoryPrice = pharmacyPurchasePrice * (1 - distMargin);
  const distributorProfit = pharmacyPurchasePrice - exFactoryPrice;

  // Manufacturer / marketer
  const manufacturerProfit = exFactoryPrice - cogs;
  const manufacturerMarginPct = exFactoryPrice > 0 ? manufacturerProfit / exFactoryPrice : NaN;

  // Split of the consumer riyal (based on the full consumer price incl. VAT)
  const rows: Row[] = [
    { label: "Your COGS", sublabel: "cost of goods", amount: cogs, color: "#64748B" },
    {
      label: "Your gross profit",
      sublabel: "manufacturer / marketer",
      amount: manufacturerProfit,
      color: "#D4A574",
    },
    {
      label: "Distributor margin",
      sublabel: `${distributorMargin}% of their sell price`,
      amount: distributorProfit,
      color: "#8B9DC3",
    },
    {
      label: "Pharmacy margin",
      sublabel: `${pharmacyMargin}% of retail ex-VAT`,
      amount: pharmacyProfit,
      color: "#5EAAA8",
    },
    { label: "VAT", sublabel: `${vat}%`, amount: vatAmount, color: "#475569" },
  ];

  const negative = manufacturerProfit < 0;

  const inputCls =
    "w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-transparent";
  const labelCls = "block text-sm text-navy-300 mb-2 font-medium";

  return (
    <div className="grid lg:grid-cols-5 gap-8 items-start">
      {/* Inputs */}
      <div className="lg:col-span-2 bg-navy-900 border border-white/10 rounded-2xl p-6 lg:p-8">
        <h2 className="text-lg font-bold text-white mb-6">Your inputs</h2>
        <div className="space-y-5">
          <div>
            <label className={labelCls} htmlFor="cp">Consumer price (SAR, incl. VAT)</label>
            <input id="cp" type="number" min={0} step={0.5} value={consumerPrice}
              onChange={(e) => setConsumerPrice(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="cogs">Your COGS (SAR per unit)</label>
            <input id="cogs" type="number" min={0} step={0.5} value={cogs}
              onChange={(e) => setCogs(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="ph">Pharmacy margin (%)</label>
            <input id="ph" type="number" min={0} max={90} step={1} value={pharmacyMargin}
              onChange={(e) => setPharmacyMargin(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="dist">Distributor margin (%)</label>
            <input id="dist" type="number" min={0} max={90} step={1} value={distributorMargin}
              onChange={(e) => setDistributorMargin(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="vat">VAT (%)</label>
            <input id="vat" type="number" min={0} max={100} step={1} value={vat}
              onChange={(e) => setVat(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
        </div>
        <p className="mt-6 text-navy-600 text-xs leading-relaxed">
          Margins are on each tier&apos;s selling price (trade convention), not markup on cost.
          Defaults are illustrative — set them to your own deal terms.
        </p>
      </div>

      {/* Results */}
      <div className="lg:col-span-3 space-y-6">
        {/* Key numbers */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-5">
            <p className="text-navy-500 text-xs uppercase tracking-wide mb-1">Ex-factory price</p>
            <p className="text-white text-2xl font-bold">{sar(exFactoryPrice)}</p>
            <p className="text-navy-600 text-xs mt-1">what distributor pays you</p>
          </div>
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-5">
            <p className="text-navy-500 text-xs uppercase tracking-wide mb-1">Your gross profit</p>
            <p className={`text-2xl font-bold ${negative ? "text-red-400" : "text-accent-400"}`}>{sar(manufacturerProfit)}</p>
            <p className="text-navy-600 text-xs mt-1">per unit, after COGS</p>
          </div>
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-5">
            <p className="text-navy-500 text-xs uppercase tracking-wide mb-1">Your margin</p>
            <p className={`text-2xl font-bold ${negative ? "text-red-400" : "text-accent-400"}`}>{pct(manufacturerMarginPct)}</p>
            <p className="text-navy-600 text-xs mt-1">on ex-factory price</p>
          </div>
        </div>

        {negative && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
            <p className="text-red-300 text-sm">
              At these terms your ex-factory price is below your COGS — you lose money on every unit.
              Raise the consumer price, cut COGS, or renegotiate the trade margins.
            </p>
          </div>
        )}

        {/* Waterfall bar */}
        <div className="bg-navy-900 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">Where the consumer&apos;s {sar(consumerPrice)} SAR goes</h3>
          <div className="flex w-full h-8 rounded-lg overflow-hidden mb-4">
            {rows.map((r, i) => {
              const w = consumerPrice > 0 ? Math.max(0, (r.amount / consumerPrice) * 100) : 0;
              return (
                <div key={i} style={{ width: `${w}%`, backgroundColor: r.color }}
                  title={`${r.label}: ${sar(r.amount)} SAR`} />
              );
            })}
          </div>
          <div className="space-y-2">
            {rows.map((r, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: r.color }} />
                  <span className="text-navy-300 truncate">{r.label}</span>
                  <span className="text-navy-600 text-xs hidden sm:inline">· {r.sublabel}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`font-medium ${r.amount < 0 ? "text-red-400" : "text-white"}`}>{sar(r.amount)}</span>
                  <span className="text-navy-500 text-xs w-12 text-right">
                    {consumerPrice > 0 ? pct(r.amount / consumerPrice) : "—"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price ladder */}
        <div className="bg-navy-900 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">The price ladder</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-navy-400">Consumer price (incl. VAT)</span><span className="text-white font-medium">{sar(consumerPrice)}</span></div>
            <div className="flex justify-between"><span className="text-navy-400">Consumer price (ex-VAT)</span><span className="text-white font-medium">{sar(consumerExVat)}</span></div>
            <div className="flex justify-between"><span className="text-navy-400">Pharmacy purchase price</span><span className="text-white font-medium">{sar(pharmacyPurchasePrice)}</span></div>
            <div className="flex justify-between"><span className="text-navy-400">Ex-factory price</span><span className="text-white font-medium">{sar(exFactoryPrice)}</span></div>
            <div className="flex justify-between"><span className="text-navy-400">Your COGS</span><span className="text-white font-medium">{sar(cogs)}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
