import type { Metadata } from "next";
import Link from "next/link";
import ContributionMarginCalculator from "./ContributionMarginCalculator";

export const metadata: Metadata = {
  title: "CHC Contribution Margin & P&L Calculator",
  description:
    "Free contribution margin calculator for consumer healthcare brands. Model net sales, COGS, trade spend, and A&P into a full brand P&L with break-even — the way CHC marketers actually work.",
  alternates: { canonical: "/tools/chc-contribution-margin-calculator" },
  openGraph: {
    title: "CHC Contribution Margin & P&L Calculator | PharmaGrowth",
    description:
      "Build a consumer healthcare brand contribution P&L in seconds — gross margin, trade, A&P, contribution margin, and break-even volume.",
    type: "website",
    url: "https://pharmagrowth.co/tools/chc-contribution-margin-calculator",
    images: [{ url: "/images/sherif-speaking.png", width: 800, height: 600 }],
  },
  keywords: [
    "contribution margin calculator",
    "CHC P&L calculator",
    "consumer healthcare brand P&L",
    "trade spend A&P calculator",
    "brand break-even calculator",
    "pharma marketing P&L",
  ],
};

const faqs = [
  {
    q: "What is contribution margin in a consumer healthcare P&L?",
    a: "Contribution margin is what remains from net sales after you subtract COGS, trade spend, and A&P (advertising and promotion). It is the money a brand contributes toward covering fixed overheads and delivering profit. Unlike gross margin, it accounts for the two biggest discretionary costs a brand manager controls — trade investment and marketing — which is why it is the number CHC teams steer by.",
  },
  {
    q: "How do you calculate contribution margin?",
    a: "Start with net sales (net price per unit times volume). Subtract COGS to get gross profit. Then subtract trade spend and A&P — usually expressed as a percentage of net sales. What is left is the contribution margin, in both SAR and as a percentage of net sales. Divide by volume for contribution per unit.",
  },
  {
    q: "Why are trade and A&P entered as a percentage of net sales?",
    a: "Because that is how consumer healthcare teams benchmark and negotiate them. 'Trade at 18% of net sales' or 'A&P at 15%' is the shared language across brand, finance, and commercial. Modeling them as ratios lets you compare brands of different sizes and instantly see when a spend level is out of line for the margin the brand can support.",
  },
  {
    q: "How is break-even volume calculated?",
    a: "Break-even volume is your annual fixed costs divided by the contribution per unit. It tells you how many units the brand must sell just to cover its dedicated overheads before earning a single riyal of profit. If you enter fixed costs, the calculator returns break-even volume and flags whether your planned volume clears it.",
  },
  {
    q: "What is a healthy contribution margin for a CHC brand?",
    a: "It varies widely by category, price tier, and channel, so treat any benchmark with caution. Premium dermo-cosmetics can carry very different economics from commodity OTC. The value of this tool is not to declare a 'right' number but to let you see, with your real inputs, whether your price, COGS, trade, and A&P plan actually leaves enough contribution to fund the brand and turn a profit.",
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
  name: "CHC Contribution Margin & P&L Calculator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free calculator that builds a consumer healthcare brand contribution P&L from price, COGS, volume, trade spend, and A&P, including break-even volume.",
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
            <span className="text-navy-400">CHC Contribution Margin Calculator</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            CHC Contribution Margin &amp; P&amp;L Calculator
          </h1>
          <p className="text-lg text-navy-400 leading-relaxed max-w-2xl">
            Turn price, COGS, volume, trade, and A&amp;P into a full consumer healthcare brand
            contribution P&amp;L — with per-unit economics and break-even — in seconds. Free, no
            sign-up.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContributionMarginCalculator />
        </div>
      </section>

      {/* Explainer content (SEO body) */}
      <section className="py-12 lg:py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 article-content">
          <h2>The P&amp;L a CHC brand manager actually runs on</h2>
          <p>
            Every consumer healthcare brand lives or dies on its contribution margin. Gross margin
            tells you what the product earns before you go to market; contribution margin tells you
            what is left <em>after</em> the two costs a brand manager truly controls — trade
            investment and A&amp;P. That is the number finance holds you to, and the number that
            decides whether a promotion, a launch, or a media plan is affordable.
          </p>
          <p>
            The structure is always the same. Net sales, minus COGS, gives gross profit. Gross
            profit, minus trade spend and A&amp;P, gives contribution margin. Whatever is left after
            fixed overheads is brand profit. This calculator builds that waterfall live, in both
            per-unit and annual terms, and as a percentage of net sales — the three columns every
            real CHC P&amp;L is presented in.
          </p>

          <h2>Why trade and A&amp;P are the levers that matter</h2>
          <p>
            Marketers obsess over price and forget that a few points of trade spend or A&amp;P move
            contribution more than a price change ever will. A brand can carry a strong gross margin
            and still lose money if trade terms and marketing outrun what the margin can fund. Model
            them as a share of net sales, watch the contribution line, and you will catch an
            unaffordable plan before it reaches the market. To pressure-test the trade side upstream,
            pair this with the{" "}
            <Link href="/tools/pharmacy-trade-margin-calculator">Pharmacy Trade Margin Calculator</Link>,
            and see the{" "}
            <Link href="/blog/otc-product-launch-saudi-arabia">OTC launch playbook</Link> for how the
            full economics come together at launch.
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
            <strong>Need to model scenarios, not just one P&amp;L?</strong> The{" "}
            <Link href="/shop/claude-skills-pack">Claude AI Skills Pack</Link> includes a P&amp;L
            Analyzer that runs base, upside, and downside cases and writes the commentary — or{" "}
            <Link href="/community">join the community</Link> to see how other CHC marketers build
            their brand P&amp;Ls.
          </p>
        </div>
      </section>
    </>
  );
}
