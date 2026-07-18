import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Free Tools & Calculators for CHC Marketers",
  description:
    "Free calculators and tools for consumer healthcare and pharma marketers in KSA and the GCC — trade margin, P&L, launch budget, and more. Built by Sherif Al-Kady.",
  alternates: { canonical: "/tools" },
  openGraph: {
    title: "Free Tools & Calculators for CHC Marketers | PharmaGrowth",
    description:
      "Free calculators for consumer healthcare marketers in KSA & the GCC — trade margin, P&L, launch budget, retail media ROAS, and market intelligence.",
    type: "website",
    url: "https://pharmagrowth.co/tools",
    images: [{ url: "/images/sherif-speaking.png", width: 800, height: 600 }],
  },
  keywords: [
    "pharma marketing calculator",
    "consumer healthcare tools",
    "pharmacy trade margin calculator",
    "CHC marketing tools KSA",
    "pharma P&L calculator",
  ],
};

type Tool = {
  title: string;
  description: string;
  href?: string;
  external?: boolean;
  status: "live" | "soon";
  badge?: string;
};

const calculators: Tool[] = [
  {
    title: "Pharmacy Trade Margin Calculator",
    description:
      "See how a consumer riyal splits across the KSA chain — pharmacy margin, distributor margin, your ex-factory price, and VAT — from any retail price.",
    href: "/tools/pharmacy-trade-margin-calculator",
    status: "live",
  },
  {
    title: "CHC Contribution Margin Calculator",
    description:
      "Model a brand's contribution margin and break-even from price, COGS, and A&P spend. Built for consumer healthcare P&Ls.",
    href: "/tools/chc-contribution-margin-calculator",
    status: "live",
  },
  {
    title: "OTC Launch Budget Estimator",
    description:
      "Size the investment behind a new OTC launch in KSA — registration, trade, media, and sampling — before you commit.",
    status: "soon",
  },
  {
    title: "Retail Media ROAS Calculator",
    description:
      "Estimate return on Amazon.sa and Noon ad spend, and find the ACOS your margin can actually afford.",
    status: "soon",
  },
  {
    title: "Marketing Budget Allocator",
    description:
      "Split a brand budget across channels with CHC-benchmarked ranges, and pressure-test your mix.",
    status: "soon",
  },
  {
    title: "Price Corridor Calculator",
    description:
      "Find the pricing band a new entrant can live in — between the cheapest credible competitor and the premium ceiling.",
    status: "soon",
  },
];

const products: Tool[] = [
  {
    title: "RaqibHealth",
    description:
      "SFDA-sourced market intelligence — track competitor launches, recalls, pricing, and registrations across KSA and the GCC.",
    href: "/tools/raqibhealth",
    status: "live",
    badge: "Platform",
  },
  {
    title: "Claude AI Skills Pack",
    description:
      "11 ready-to-install Claude AI skills for pharma & CHC marketers — campaign planning, brand launch, trade marketing, and more.",
    href: "/shop/claude-skills-pack",
    status: "live",
    badge: "Product",
  },
  {
    title: "Free Templates",
    description:
      "Marketing plan, campaign brief, and the GCC pharma digital marketing playbook — free, downloadable, ready to use.",
    href: "/resources",
    status: "live",
    badge: "Free",
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  const inner = (
    <div
      className={`h-full bg-navy-900 border rounded-2xl p-6 transition-all duration-300 ${
        tool.status === "live"
          ? "border-white/5 hover:border-white/20 group"
          : "border-white/5 opacity-60"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold text-lg group-hover:text-accent-400 transition-colors">
          {tool.title}
        </h3>
        {tool.status === "soon" ? (
          <span className="shrink-0 px-2.5 py-1 bg-white/5 text-navy-500 text-[10px] font-semibold rounded-full uppercase tracking-wide">
            Coming Soon
          </span>
        ) : tool.badge ? (
          <span className="shrink-0 px-2.5 py-1 bg-accent-500/10 text-accent-400 text-[10px] font-semibold rounded-full uppercase tracking-wide">
            {tool.badge}
          </span>
        ) : null}
      </div>
      <p className="text-navy-500 text-sm leading-relaxed">{tool.description}</p>
      {tool.status === "live" && (
        <p className="mt-4 text-accent-500 text-sm font-medium">Open →</p>
      )}
    </div>
  );

  if (tool.status !== "live" || !tool.href) return inner;
  return tool.external ? (
    <a href={tool.href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={tool.href}>{inner}</Link>
  );
}

export default function ToolsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Free Tools
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Tools for Consumer Healthcare Marketers
            </h1>
            <p className="text-lg lg:text-xl text-navy-400 leading-relaxed">
              Free calculators and platforms built for the way CHC and pharma marketing actually
              works in KSA and the GCC — trade margins, P&amp;L, launches, and market intelligence.
              No sign-up to use the calculators.
            </p>
          </div>
        </div>
      </section>

      {/* Calculators */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Calculators"
            title="Free Interactive Calculators"
            subtitle="Encoded with GCC market reality — not generic marketing math. New tools shipping regularly."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calculators.map((tool, i) => (
              <ToolCard key={i} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Platforms & Products"
            title="Go Deeper"
            subtitle="When a calculator isn't enough — the platforms and products that do the full job."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((tool, i) => (
              <ToolCard key={i} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 p-8 lg:p-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Want a tool that doesn&apos;t exist yet?
            </h2>
            <p className="text-navy-400 text-lg mb-8 max-w-2xl mx-auto">
              Tell the community what you&apos;d find useful — the most-requested calculators get
              built first.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton href="/community" size="lg">
                Join the Community
              </CTAButton>
              <CTAButton href="/contact" variant="outline" size="lg">
                Suggest a Tool
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
