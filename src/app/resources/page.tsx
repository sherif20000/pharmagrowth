import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Free Resources for CHC & Pharma Marketers",
  description:
    "Free downloads for consumer healthcare & pharma marketers in KSA and the GCC — the Digital Marketing Playbook, marketing plan and campaign brief templates, plus free calculators and guides.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Free Resources for CHC & Pharma Marketers | PharmaGrowth",
    description:
      "Free playbooks, templates, calculators, and guides for consumer healthcare and pharma marketers in KSA & the GCC.",
    type: "website",
    url: "https://pharmagrowth.co/resources",
    images: [{ url: "/images/sherif-speaking.png", width: 800, height: 600 }],
  },
  keywords: [
    "free pharma marketing templates",
    "pharma marketing plan template",
    "consumer healthcare marketing resources",
    "GCC pharma digital marketing playbook",
    "free CHC marketing tools",
  ],
};

const downloads = [
  {
    title: "The GCC Pharma Digital Marketing Playbook",
    description:
      "5 channels that actually work in KSA, SFDA compliance rules, a LinkedIn content system, and a complete 90-day action plan. Built from 20 years in GCC pharma.",
    format: "PDF · 30 pages",
    href: "https://sherifelkady.gumroad.com/l/DigitalMarketingPlaybook",
  },
  {
    title: "Pharma Marketing Plan Template",
    description:
      "A complete, structured template for building a brand marketing plan for KSA and the GCC. Covers brand snapshot, SWOT, channel plan, budget, activity calendar, and KPIs.",
    format: "PDF · Fillable template",
    href: "https://sherifelkady.gumroad.com/l/PharmaMarketingPlanTemplate",
  },
  {
    title: "Pharma Campaign Brief Template",
    description:
      "Brief any campaign cleanly — from objective to launch. Includes channel plan, key message framework, approval sign-off, and a launch checklist built for pharma.",
    format: "PDF · Fillable template",
    href: "https://sherifelkady.gumroad.com/l/CampaignBriefTemplate",
  },
];

const tools = [
  {
    title: "Pharmacy Trade Margin Calculator",
    description: "See how a consumer price splits into pharmacy margin, distributor margin, and your ex-factory price across the KSA chain.",
    href: "/tools/pharmacy-trade-margin-calculator",
  },
  {
    title: "CHC Contribution Margin Calculator",
    description: "Build a consumer healthcare brand contribution P&L — gross margin, trade, A&P, and break-even — in seconds.",
    href: "/tools/chc-contribution-margin-calculator",
  },
];

const guides = [
  { title: "OTC Product Launch Playbook (Saudi Arabia)", href: "/blog/otc-product-launch-saudi-arabia" },
  { title: "Consumer Insights for Consumer Healthcare", href: "/blog/consumer-insights-consumer-healthcare" },
  { title: "Retail Media for Consumer Healthcare (KSA)", href: "/blog/retail-media-consumer-healthcare-ksa" },
  { title: "SFDA Marketing Compliance (2026)", href: "/blog/sfda-marketing-compliance" },
  { title: "Pharmacy Channel Management in KSA", href: "/blog/pharmacy-channel-management-ksa" },
  { title: "Vitamins & Supplements Marketing (GCC)", href: "/blog/vitamins-supplements-marketing-gcc" },
];

const downloadIcon = (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
);

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Free Resources
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Everything you need, free
            </h1>
            <p className="text-lg lg:text-xl text-navy-400 leading-relaxed">
              Playbooks, templates, calculators, and guides for consumer healthcare and pharma
              marketers in KSA and the GCC. Built from 20+ years in the market — download and use
              today.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Downloads"
            title="Playbooks & Templates"
            subtitle="Ready-to-use PDFs and fillable templates. Delivered instantly through Gumroad — free."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {downloads.map((r, i) => (
              <a
                key={i}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-navy-900 border border-white/5 hover:border-accent-500/30 rounded-2xl p-6 flex flex-col transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-500 mb-4">
                  {downloadIcon}
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-accent-400 transition-colors">
                  {r.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed flex-1 mb-4">{r.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-navy-400 text-xs">{r.format}</span>
                  <span className="text-accent-500 text-sm font-semibold">Download Free →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Free tools */}
      <section className="py-16 lg:py-24 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Calculators"
            title="Free Interactive Tools"
            subtitle="Encoded with GCC market reality. No sign-up to use."
          />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tools.map((t, i) => (
              <Link
                key={i}
                href={t.href}
                className="group bg-navy-900 border border-white/5 hover:border-white/20 rounded-2xl p-6 transition-all"
              >
                <h3 className="text-white font-semibold mb-2 group-hover:text-accent-400 transition-colors">
                  {t.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed mb-4">{t.description}</p>
                <span className="text-accent-500 text-sm font-medium">Open calculator →</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <CTAButton href="/tools" variant="secondary" size="md">
              See all tools
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Guides"
            title="In-Depth Playbooks"
            subtitle="Long-form guides on the topics that decide whether a CHC brand wins."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {guides.map((g, i) => (
              <Link
                key={i}
                href={g.href}
                className="flex items-center gap-3 bg-navy-900 border border-white/5 hover:border-white/20 rounded-xl px-5 py-4 transition-all group"
              >
                <svg className="w-5 h-5 text-accent-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
                <span className="text-navy-300 text-sm font-medium group-hover:text-white transition-colors">{g.title}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <CTAButton href="/blog" variant="secondary" size="md">
              Read all guides
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
