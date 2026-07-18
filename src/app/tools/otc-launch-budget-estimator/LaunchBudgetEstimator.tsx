"use client";

import { useState } from "react";

// Bottom-up OTC launch budget, sanity-checked against the Year-1 sales target.
// Listing cost scales with pharmacy count; everything else is a direct SAR input.

function money(n: number): string {
  if (!isFinite(n)) return "—";
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n);
}

function pct(n: number): string {
  if (!isFinite(n)) return "—";
  return `${(n * 100).toFixed(1)}%`;
}

type Bucket = { label: string; amount: number; color: string };

export default function LaunchBudgetEstimator() {
  const [salesTarget, setSalesTarget] = useState(5000000); // Year-1 net sales target (SAR)
  const [pharmacies, setPharmacies] = useState(300); // target listing count
  const [listingFee, setListingFee] = useState(400); // SAR per pharmacy
  const [registration, setRegistration] = useState(80000); // SFDA + regulatory
  const [media, setMedia] = useState(800000); // launch media & advertising
  const [sampling, setSampling] = useState(300000); // sampling & POSM
  const [merchandising, setMerchandising] = useState(250000); // field & activation
  const [creative, setCreative] = useState(200000); // agency, creative, production
  const [contingencyPct, setContingencyPct] = useState(10); // % of subtotal

  const listingTotal = pharmacies * listingFee;
  const subtotal =
    registration + listingTotal + media + sampling + merchandising + creative;
  const contingency = subtotal * (contingencyPct / 100);
  const total = subtotal + contingency;

  const investmentRatio = salesTarget > 0 ? total / salesTarget : NaN;
  const costPerPharmacy = pharmacies > 0 ? total / pharmacies : NaN;

  const buckets: Bucket[] = [
    { label: "SFDA & regulatory", amount: registration, color: "#475569" },
    { label: "Listing fees", amount: listingTotal, color: "#5EAAA8" },
    { label: "Media & advertising", amount: media, color: "#D4A574" },
    { label: "Sampling & POSM", amount: sampling, color: "#8B9DC3" },
    { label: "Merchandising & field", amount: merchandising, color: "#B08968" },
    { label: "Creative & agency", amount: creative, color: "#64748B" },
    { label: `Contingency (${contingencyPct}%)`, amount: contingency, color: "#334155" },
  ];

  const heavy = investmentRatio > 1;

  const inputCls =
    "w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-transparent";
  const labelCls = "block text-sm text-navy-300 mb-2 font-medium";

  return (
    <div className="grid lg:grid-cols-5 gap-8 items-start">
      {/* Inputs */}
      <div className="lg:col-span-2 bg-navy-900 border border-white/10 rounded-2xl p-6 lg:p-8">
        <h2 className="text-lg font-bold text-white mb-6">Launch inputs</h2>
        <div className="space-y-5">
          <div>
            <label className={labelCls} htmlFor="target">Year-1 net sales target (SAR)</label>
            <input id="target" type="number" min={0} step={100000} value={salesTarget}
              onChange={(e) => setSalesTarget(parseFloat(e.target.value) || 0)} className={inputCls} />
            <p className="text-navy-600 text-xs mt-1.5">Used to sanity-check the investment ratio.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls} htmlFor="ph">Pharmacies</label>
              <input id="ph" type="number" min={0} step={10} value={pharmacies}
                onChange={(e) => setPharmacies(parseFloat(e.target.value) || 0)} className={inputCls} />
            </div>
            <div>
              <label className={labelCls} htmlFor="fee">Listing fee / pharmacy</label>
              <input id="fee" type="number" min={0} step={50} value={listingFee}
                onChange={(e) => setListingFee(parseFloat(e.target.value) || 0)} className={inputCls} />
            </div>
          </div>
          <div>
            <label className={labelCls} htmlFor="reg">SFDA &amp; regulatory (SAR)</label>
            <input id="reg" type="number" min={0} step={5000} value={registration}
              onChange={(e) => setRegistration(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="media">Media &amp; advertising (SAR)</label>
            <input id="media" type="number" min={0} step={10000} value={media}
              onChange={(e) => setMedia(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="sampling">Sampling &amp; POSM (SAR)</label>
            <input id="sampling" type="number" min={0} step={10000} value={sampling}
              onChange={(e) => setSampling(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="merch">Merchandising &amp; field (SAR)</label>
            <input id="merch" type="number" min={0} step={10000} value={merchandising}
              onChange={(e) => setMerchandising(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="creative">Creative &amp; agency (SAR)</label>
            <input id="creative" type="number" min={0} step={10000} value={creative}
              onChange={(e) => setCreative(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls} htmlFor="cont">Contingency (% of subtotal)</label>
            <input id="cont" type="number" min={0} max={100} step={1} value={contingencyPct}
              onChange={(e) => setContingencyPct(parseFloat(e.target.value) || 0)} className={inputCls} />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-3 space-y-6">
        {/* Key numbers */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-5">
            <p className="text-navy-500 text-xs uppercase tracking-wide mb-1">Total launch budget</p>
            <p className="text-white text-2xl font-bold">{money(total)}</p>
            <p className="text-navy-600 text-xs mt-1">SAR</p>
          </div>
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-5">
            <p className="text-navy-500 text-xs uppercase tracking-wide mb-1">Investment vs. sales</p>
            <p className={`text-2xl font-bold ${heavy ? "text-amber-400" : "text-accent-400"}`}>{pct(investmentRatio)}</p>
            <p className="text-navy-600 text-xs mt-1">of Year-1 target</p>
          </div>
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-5">
            <p className="text-navy-500 text-xs uppercase tracking-wide mb-1">Cost per pharmacy</p>
            <p className="text-white text-2xl font-bold">{money(costPerPharmacy)}</p>
            <p className="text-navy-600 text-xs mt-1">SAR / outlet</p>
          </div>
        </div>

        {heavy && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4">
            <p className="text-amber-300 text-sm">
              Your launch budget exceeds your entire Year-1 sales target. That can be right for a
              strategic, long-payback launch — but make sure the business case runs on a multi-year
              horizon, because Year-1 contribution will not come close to covering it.
            </p>
          </div>
        )}

        {/* Bucket bar */}
        <div className="bg-navy-900 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">Where the budget goes</h3>
          <div className="flex w-full h-8 rounded-lg overflow-hidden mb-4">
            {buckets.map((b, i) => {
              const w = total > 0 ? Math.max(0, (b.amount / total) * 100) : 0;
              return (
                <div key={i} style={{ width: `${w}%`, backgroundColor: b.color }}
                  title={`${b.label}: ${money(b.amount)} SAR`} />
              );
            })}
          </div>
          <div className="space-y-2">
            {buckets.map((b, i) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: b.color }} />
                  <span className="text-navy-300 truncate">{b.label}</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-white font-medium">{money(b.amount)}</span>
                  <span className="text-navy-500 text-xs w-12 text-right">
                    {total > 0 ? pct(b.amount / total) : "—"}
                  </span>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between text-sm border-t border-white/10 pt-2 mt-2">
              <span className="text-white font-semibold">Total launch budget</span>
              <span className="text-accent-400 font-bold">{money(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
