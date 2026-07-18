import type { Metadata } from "next";
import Link from "next/link";
import LaunchBudgetEstimator from "./LaunchBudgetEstimator";

export const metadata: Metadata = {
  title: "OTC Launch Budget Estimator (KSA)",
  description:
    "Free OTC product launch budget calculator for KSA. Estimate registration, listing, media, sampling, and merchandising costs — and check your investment against your Year-1 sales target.",
  alternates: { canonical: "/tools/otc-launch-budget-estimator" },
  openGraph: {
    title: "OTC Launch Budget Estimator (KSA) | PharmaGrowth",
    description:
      "Build a bottom-up OTC launch budget for Saudi Arabia and see it as a share of your Year-1 sales target — the sanity check every launch needs.",
    type: "website",
    url: "https://pharmagrowth.co/tools/otc-launch-budget-estimator",
    images: [{ url: "/images/sherif-speaking.png", width: 800, height: 600 }],
  },
  keywords: [
    "OTC launch budget calculator",
    "product launch budget pharma KSA",
    "SFDA registration cost",
    "pharma launch investment Saudi Arabia",
    "consumer healthcare launch budget",
  ],
};

const faqs = [
  {
    q: "What does it cost to launch an OTC product in Saudi Arabia?",
    a: "There is no single number — it depends on how many pharmacies you list in, how heavily you advertise, and how much sampling and merchandising the category needs. The major buckets are SFDA registration and regulatory, listing fees (which scale with pharmacy count), launch media, sampling and POSM, field merchandising, and creative and agency costs, plus a contingency. This estimator sums them bottom-up so you see the total before you commit.",
  },
  {
    q: "What is the investment-to-sales ratio and why does it matter?",
    a: "It is your total launch budget divided by your Year-1 net sales target. It is the fastest sanity check on a launch plan: it tells you, in one number, how heavily you are investing relative to what you expect to sell. A launch that costs a large share of Year-1 sales is not automatically wrong — but it forces you to justify the spend on a multi-year payback, because Year-1 contribution will not cover it.",
  },
  {
    q: "Should listing fees scale with the number of pharmacies?",
    a: "Yes. Listing and slotting costs are largely per-outlet, so the more pharmacies you target, the more you pay to get on shelf. That is why this tool multiplies your per-pharmacy listing fee by your target pharmacy count — expanding distribution is rarely free, and the cost-per-pharmacy metric helps you decide how wide to go at launch.",
  },
  {
    q: "Why include a contingency line?",
    a: "Because launches overrun. Regulatory timelines slip, a chain demands an extra activation, print runs get reordered. A contingency of around 10% of the subtotal absorbs the surprises that would otherwise blow the budget. If you have never launched in the market before, lean higher rather than lower.",
  },
  {
    q: "Does a launch make a profit in Year 1?",
    a: "Rarely. Launch investment is front-loaded while sales build gradually, so most OTC launches run at a loss or break even at best in Year 1 — the return comes in Years 2 and 3 as the brand establishes. That is exactly why the investment-to-sales ratio matters: it frames the launch as a multi-year bet, not a single-year P&L.",
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
  name: "OTC Launch Budget Estimator",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  description:
    "Free calculator that builds a bottom-up OTC product launch budget for KSA and checks it against a Year-1 sales target.",
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
            <span className="text-navy-400">OTC Launch Budget Estimator</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            OTC Launch Budget Estimator
          </h1>
          <p className="text-lg text-navy-400 leading-relaxed max-w-2xl">
            Build a bottom-up budget for a new OTC launch in KSA — registration, listing, media,
            sampling, and merchandising — and see it against your Year-1 sales target. Free, no
            sign-up.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-10 lg:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <LaunchBudgetEstimator />
        </div>
      </section>

      {/* Explainer content (SEO body) */}
      <section className="py-12 lg:py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 article-content">
          <h2>How to budget an OTC launch in Saudi Arabia</h2>
          <p>
            A launch budget is not one number — it is a stack of decisions. How many pharmacies will
            you list in? How loud will the launch campaign be? Does the category demand heavy
            sampling, or will the product sell on shelf presence? Each answer moves a bucket, and the
            buckets add up fast. Building the budget bottom-up — registration, listing, media,
            sampling, merchandising, creative, and a contingency — forces those decisions into the
            open before you commit money to them.
          </p>
          <p>
            The single most useful output is not the total; it is the total <em>relative to your
            Year-1 sales target</em>. A budget of two million riyals means nothing on its own. As a
            share of a five-million-riyal sales goal, it is a defensible launch investment. As a
            share of a one-million-riyal goal, it is a red flag that needs a multi-year business
            case. That ratio is the conversation to have with finance before, not after, you spend.
          </p>

          <h2>Why launches lose money in Year 1 — and that can be fine</h2>
          <p>
            Launch investment is front-loaded: you pay to register, list, and advertise before the
            brand has built any real sell-out. Sales ramp gradually; costs land up front. So most OTC
            launches break even at best in Year 1, with the return arriving in Years 2 and 3. The
            mistake is not spending — it is spending without framing the launch as a multi-year bet
            and without a plan to protect the brand once competitors respond. For the full picture,
            work through the{" "}
            <Link href="/blog/otc-product-launch-saudi-arabia">OTC product launch playbook</Link>,
            and pressure-test the ongoing economics with the{" "}
            <Link href="/tools/chc-contribution-margin-calculator">CHC contribution margin calculator</Link>.
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
            <strong>Planning a real launch?</strong> The{" "}
            <Link href="/shop/claude-skills-pack">Claude AI Skills Pack</Link> includes a Brand Launch
            Playbook skill that builds the full pre-launch, launch, and post-launch plan around this
            budget — or{" "}
            <Link href="/community">join the community</Link> to compare launch budgets with other CHC
            marketers.
          </p>
        </div>
      </section>
    </>
  );
}
