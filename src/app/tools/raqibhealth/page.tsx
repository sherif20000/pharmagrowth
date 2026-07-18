import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";

const RAQIB_URL = "https://raqibhealth.com";

export const metadata: Metadata = {
  title: "RaqibHealth — SFDA Market Intelligence for Pharma Teams",
  description:
    "RaqibHealth is the KSA & GCC pharma market-intelligence platform built by Sherif Al-Kady. Track competitor launches, recalls, pricing, and registrations from official SFDA sources.",
  alternates: { canonical: "/tools/raqibhealth" },
  openGraph: {
    title: "RaqibHealth — SFDA Market Intelligence for Pharma Teams",
    description:
      "Track competitor launches, recalls, pricing, and product registrations across KSA and the GCC — sourced from official SFDA data. Built by a 20-year pharma marketer.",
    type: "website",
    url: "https://pharmagrowth.co/tools/raqibhealth",
    images: [{ url: "/images/sherif-speaking.png", width: 800, height: 600 }],
  },
  keywords: [
    "SFDA market intelligence",
    "pharma competitor tracking KSA",
    "Saudi drug registration data",
    "pharma recall alerts GCC",
    "pharmaceutical pricing intelligence Saudi Arabia",
    "RaqibHealth",
  ],
};

const useCases = [
  {
    title: "Track competitor launches",
    description:
      "Know the moment a competitor registers a new product with the SFDA — before it hits the shelf. Turn regulatory approvals into an early-warning system for your category.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.58m5.96 11.79a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "Monitor recalls in real time",
    description:
      "Get alerted to SFDA recalls and safety actions across the market. Protect your brand, brief your team, and spot category risk before it becomes a crisis.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Understand pricing & registrations",
    description:
      "Look up official product registrations and pricing across KSA. Build competitive pricing context, validate your P&L assumptions, and back your strategy with real market data.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    title: "Read consumer-health market signals",
    description:
      "Stay ahead of what's moving in OTC, VMS, and consumer healthcare across the GCC — the shifts that shape your brand plan, your claims, and your channel strategy.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const coverage = [
  "Drug & product registrations",
  "New SFDA approvals",
  "Recall & safety alerts",
  "Pricing intelligence",
  "Medical devices",
  "Consumer health & OTC",
];

export default function RaqibHealthPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Market Intelligence · Built by Sherif
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              The market intelligence behind the strategies I teach
            </h1>
            <p className="text-lg lg:text-xl text-navy-400 mb-8 leading-relaxed">
              <span className="text-white font-semibold">RaqibHealth</span> tracks competitor
              launches, recalls, pricing, and product registrations across KSA and the GCC —
              sourced from official SFDA data. The intelligence layer every pharma and consumer-health
              marketing team should be reading.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <CTAButton href={RAQIB_URL} size="lg" external>
                Explore RaqibHealth
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </CTAButton>
              <CTAButton href="/community" variant="secondary" size="lg">
                Join the Community
              </CTAButton>
            </div>
            <p className="mt-6 text-navy-600 text-sm">
              Sourced from official SFDA data · KSA &amp; GCC coverage
            </p>
          </div>
        </div>
      </section>

      {/* Why I built it */}
      <section className="py-16 lg:py-24 bg-navy-900/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why I Built It"
            title="Good strategy needs good intelligence"
            centered={false}
          />
          <div className="space-y-5 text-navy-300 text-lg leading-relaxed">
            <p>
              In 20+ years across pharma and consumer healthcare in the GCC, the same problem kept
              showing up: teams were making brand, pricing, and launch decisions without a clear,
              current view of the market. Competitor moves were noticed too late. Recalls were
              missed. Pricing was guesswork.
            </p>
            <p>
              The data existed — it was public, in official SFDA records — but nobody had turned it
              into something a marketer could actually use. So I built{" "}
              <span className="text-white font-semibold">RaqibHealth</span>: a platform that watches
              the market for you and turns raw regulatory data into decisions you can act on.
            </p>
            <p className="text-navy-400">
              PharmaGrowth teaches you the strategy. RaqibHealth gives you the intelligence to run it.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="For Marketers"
            title="What it does for your brand plan"
            subtitle="RaqibHealth turns official market data into the four things every brand team needs to see."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="bg-navy-900 border border-white/5 rounded-2xl p-6 lg:p-8 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-500 mb-4">
                  {uc.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{uc.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Coverage"
            title="What RaqibHealth watches"
            subtitle="One platform, sourced from official records, across the categories that matter to you."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {coverage.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-navy-900 border border-white/5 rounded-xl px-5 py-4"
              >
                <svg className="w-5 h-5 text-accent-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-navy-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 p-8 lg:p-16 text-center">
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                See the market before your competitors do
              </h2>
              <p className="text-navy-400 text-lg mb-8 max-w-2xl mx-auto">
                Explore RaqibHealth and put official SFDA-sourced intelligence behind every brand
                decision you make.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href={RAQIB_URL} size="lg" external>
                  Explore RaqibHealth
                </CTAButton>
                <CTAButton href="/blog" variant="outline" size="lg">
                  Read the Playbooks
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
