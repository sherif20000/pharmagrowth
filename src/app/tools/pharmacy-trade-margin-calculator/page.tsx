import type { Metadata } from "next";
import Link from "next/link";
import TradeMarginCalculator from "./TradeMarginCalculator";

export const metadata: Metadata = {
  title: "Pharmacy Trade Margin Calculator (KSA)",
  description:
    "Free trade margin calculator for KSA pharmacy & consumer healthcare. See how a consumer price splits into pharmacy margin, distributor margin, ex-factory price, and VAT.",
  alternates: { canonical: "/tools/pharmacy-trade-margin-calculator" },
  openGraph: {
    title: "Pharmacy Trade Margin Calculator (KSA) | PharmaGrowth",
    description:
      "Work out ex-factory price and your margin from any consumer price — modeling pharmacy margin, distributor margin, and VAT across the Saudi trade chain.",
    type: "website",
    url: "https://pharmagrowth.co/tools/pharmacy-trade-margin-calculator",
    images: [{ url: "/images/sherif-speaking.png", width: 800, height: 600 }],
  },
  keywords: [
    "pharmacy trade margin calculator",
    "pharma margin calculator KSA",
    "ex-factory price calculator",
    "distributor margin pharmacy Saudi Arabia",
    "consumer healthcare pricing calculator",
    "trade margin Nahdi Al-Dawaa",
  ],
};

const faqs = [
  {
    q: "How is a pharmacy trade margin calculated?",
    a: "Trade margins are usually expressed on each tier's selling price, not as a markup on cost. If the pharmacy sells at 100 ex-VAT with a 25% margin, it bought at 75. The distributor then takes its margin on the 75 it sells to the pharmacy, and so on back to your ex-factory price. This calculator works backward from the consumer price to show every tier's cut.",
  },
  {
    q: "What is the ex-factory price?",
    a: "The ex-factory price (EFP) is what the distributor pays you, the manufacturer or marketing company — the price 'leaving the factory,' before the distributor and pharmacy add their margins. It is the number that, minus your COGS, becomes your gross profit. It is the single most important figure in any trade pricing conversation.",
  },
  {
    q: "What are typical pharmacy and distributor margins in KSA?",
    a: "They vary by category, chain, and negotiation, so treat any single number with caution. Pharmacy retail margins on consumer healthcare commonly sit in a wide band, and distributor margins are typically lower. The point of this tool is not to assume a 'correct' margin — it is to let you plug in your actual deal terms and see what they do to your ex-factory price and profit.",
  },
  {
    q: "Does the calculator include VAT?",
    a: "Yes. KSA VAT (15% by default, editable) is stripped from the consumer price first, because trade margins are calculated on the ex-VAT retail price. VAT is shown as its own slice so you can see how much of the shelf price is tax rather than trade.",
  },
  {
    q: "Why does my margin go negative?",
    a: "If the consumer price is too low, or the pharmacy and distributor margins are too high, the ex-factory price can fall below your COGS — meaning you lose money on every unit sold. That is exactly the scenario this tool is built to expose before you commit to a price and a listing.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pharmacy Trade Margin Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free calculator that breaks a consumer price into pharmacy margin, distributor margin, ex-factory price, and VAT for the KSA trade chain.",
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <nav className="text-sm text-navy-500 mb-6">
            <Link href="/tools" className="hover:text-accent-400 transition-colors">Tools</Link>
            <span className="mx-2">/</span>
            <span className="text-navy-400">Pharmacy Trade Margin Calculator</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Pharmacy Trade Margin Calculator
          </h1>
          <p className="text-lg text-navy-400 leading-relaxed max-w-2xl">
            Plug in a consumer price and see exactly how it splits across the KSA trade chain —
            pharmacy margin, distributor margin, VAT, and the ex-factory price that lands in your
            P&amp;L. Free, no sign-up.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <TradeMarginCalculator />
        </div>
      </section>

      {/* Explainer content (SEO body) */}
      <section className="py-12 lg:py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 article-content">
          <h2>How trade margins work in the KSA pharmacy chain</h2>
          <p>
            Every consumer healthcare product travels the same path to the shelf: from the
            manufacturer or marketing company, to a distributor, to the pharmacy, to the shopper.
            Each tier takes a margin, and each margin is calculated on that tier&rsquo;s selling
            price — not as a markup on what it paid. This is the single most common source of pricing
            mistakes: confusing a 25% margin with a 25% markup gives you a different ex-factory price
            and a different profit.
          </p>
          <p>
            The only number the shopper sees is the consumer price. Everything else is worked
            backward from it. Strip VAT first (trade margins are always calculated on the ex-VAT
            price), then remove the pharmacy&rsquo;s margin to get the pharmacy purchase price, then
            the distributor&rsquo;s margin to get your ex-factory price. Subtract your COGS, and
            what&rsquo;s left is the gross profit you actually run your brand on.
          </p>

          <h2>Why the ex-factory price is the number that matters</h2>
          <p>
            Marketers often anchor on the consumer price because it&rsquo;s visible and emotional.
            But your business runs on the ex-factory price. A proud shelf price means nothing if the
            trade margins hollow it out before it reaches you. This is why pricing and trade terms
            have to be modeled together — a listing that demands a higher pharmacy margin can quietly
            turn a healthy price into an unprofitable one. For the wider picture, see our{" "}
            <Link href="/blog/pharmacy-channel-management-ksa">guide to pharmacy channel management in KSA</Link>{" "}
            and the{" "}
            <Link href="/blog/otc-product-launch-saudi-arabia">OTC launch playbook</Link>, which walks
            through the price corridor in detail.
          </p>

          <h2>Frequently asked questions</h2>
          {faqs.map((f, i) => (
            <div key={i}>
              <p className="faq-question">{f.q}</p>
              <p>{f.a}</p>
            </div>
          ))}

          <hr />
          <p>
            <strong>Want this level of rigor across your whole P&amp;L?</strong> The{" "}
            <Link href="/shop/claude-skills-pack">Claude AI Skills Pack</Link> includes a P&amp;L
            Analyzer and a Trade Marketing Planner that take this far beyond a single-unit
            calculation — or{" "}
            <Link href="/community">join the community</Link> and tell us which calculator to build next.
          </p>
        </div>
      </section>
    </>
  );
}
