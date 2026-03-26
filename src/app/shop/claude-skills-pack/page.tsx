import type { Metadata } from "next";
import Link from "next/link";
import CTAButton from "@/components/CTAButton";

const GUMROAD_URL = "https://sherifelkady.gumroad.com/l/pharmagrowth";

export const metadata: Metadata = {
  title: "Claude AI Skills Pack: Pharma Marketers Edition — 11 Ready-to-Install AI Skills",
  description:
    "11 ready-to-install Claude AI skills built for pharmaceutical and consumer healthcare marketers. Campaign planning, brand launch, trade marketing, KOL engagement, regulatory copy review, and more. Install in minutes. No coding required.",
  openGraph: {
    title: "Claude AI Skills Pack: Pharma Marketers Edition",
    description:
      "11 pharma-specific Claude AI skills: campaign planner, brand launch, trade marketing, KOL engagement, regulatory copy checker, and more. Built for pharma marketers. $49.",
    type: "website",
  },
  keywords: [
    "Claude AI skills pharma",
    "AI tools pharma marketing",
    "Claude Code pharma",
    "pharma marketing AI toolkit",
    "pharmaceutical AI skills pack",
    "Claude skills pack",
    "AI pharma marketing tools",
    "pharma brand manager AI tools",
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Claude AI Skills Pack: Pharma Marketers Edition",
  description:
    "11 ready-to-install Claude AI skills built for pharmaceutical and consumer healthcare marketers.",
  brand: { "@type": "Brand", name: "PharmaGrowth" },
  offers: {
    "@type": "Offer",
    price: "49",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: GUMROAD_URL,
  },
};

const skills = [
  {
    name: "Campaign Planner",
    command: "/campaign-planner",
    description:
      "Generates a complete, channel-by-channel marketing campaign plan from a brief. Input your product, objective, and budget — get a full campaign architecture with tactics, KPIs, and a phased timeline.",
  },
  {
    name: "Brand Launch Playbook",
    command: "/brand-launch-playbook",
    description:
      "End-to-end new product launch planning. Covers pre-launch, launch, and post-launch phases including channel sequencing, HCP targeting, trade activation, and DTC strategy.",
  },
  {
    name: "Trade Marketing Planner",
    command: "/trade-marketing-planner",
    description:
      "Builds trade marketing plans for pharmacy chains and wholesale channels. Covers listing strategy, activation programs, sell-out mechanics, and promotional calendar.",
  },
  {
    name: "KOL Engagement Planner",
    command: "/kol-engagement-planner",
    description:
      "Maps your KOL and HCP engagement strategy. Identifies engagement tiers, defines compliant program structures, and generates a 12-month engagement roadmap.",
  },
  {
    name: "Regulatory Copy Checker",
    command: "/regulatory-copy-checker",
    description:
      "Reviews marketing copy against SFDA and regulatory guidelines. Flags non-compliant claims, suggests compliant alternatives, and identifies missing fair balance requirements.",
  },
  {
    name: "Marketing Plan Builder",
    command: "/marketing-plan",
    description:
      "Generates a full annual marketing plan — situation analysis, objectives, strategy, channel mix, budget allocation, and KPI framework — based on your brand inputs.",
  },
  {
    name: "CHC Training Manual",
    command: "/chc-training-manual",
    description:
      "Builds internal training manuals for consumer healthcare and dermo-cosmetics brands. Covers product knowledge, category positioning, selling messages, and competitive context.",
  },
  {
    name: "P&L Analysis",
    command: "/pnl-analysis",
    description:
      "Reviews P&L structures, models contribution margin scenarios, and identifies profitability drivers and leaks across your brand portfolio.",
  },
  {
    name: "Pricing Strategist",
    command: "/pricing-strategist",
    description:
      "Supports pricing decisions for KSA pharmaceutical and consumer healthcare products. Covers launch pricing, price positioning relative to competitors, and tender/hospital pricing logic.",
  },
  {
    name: "Competitor Analyzer",
    command: "/competitor-analyzer",
    description:
      "Maps the competitive landscape for any KSA consumer healthcare or oral care category. Delivers brand positioning analysis, gap identification, and strategic response recommendations.",
  },
  {
    name: "Portfolio Analytics",
    command: "/portfolio-analytics",
    description:
      "Analyzes brand portfolio performance including sell-in vs. sell-out dynamics, SKU contribution analysis, and portfolio prioritization recommendations.",
  },
];

const faqs = [
  {
    question: "Do I need to know how to code to use these skills?",
    answer:
      "No. These are Claude AI skills — you install them once and then call them with a simple slash command like /campaign-planner. No programming knowledge required. If you can use Claude.ai, you can use these skills.",
  },
  {
    question: "What is Claude Code and do I need it?",
    answer:
      "Claude Code is Anthropic's official CLI that lets you run Claude AI from your terminal with custom skills installed. It's free to install. The skills in this pack work with Claude Code (CLI). A step-by-step installation guide is included with your purchase.",
  },
  {
    question: "What do I actually receive when I buy?",
    answer:
      "You receive a ZIP file containing 11 SKILL.md files (one per skill) and a PDF installation guide that walks you through setting up Claude Code and installing each skill. Most people are up and running in under 15 minutes.",
  },
  {
    question: "Are these skills specific to the Saudi Arabia / GCC market?",
    answer:
      "The skills are built around KSA and GCC pharma marketing realities — SFDA regulations, Nahdi/Al-Dawaa pharmacy chains, KSA brand manager workflows — but they work for pharma marketing contexts globally. The regulatory checker defaults to SFDA but can be directed to other regulatory frameworks.",
  },
  {
    question: "What if a skill doesn't do what I need?",
    answer:
      "Each skill's behavior can be adjusted through the prompts you give it. The installation guide includes examples for each skill. If you have a specific use case that isn't covered, reach out — future updates to the pack are included for free.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. If the skills don't work as described, contact us within 7 days for a full refund. Because this is a digital product, refunds are handled case-by-case through Gumroad.",
  },
];

export default function ClaudeSkillsPackPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-600/5 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-500/10 text-accent-400 text-xs font-semibold rounded-full tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                Available Now
              </span>
              <span className="text-navy-500 text-xs">Digital Download · Instant Access</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Claude AI Skills Pack{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                Pharma Marketers Edition
              </span>
            </h1>

            <p className="text-xl text-navy-300 leading-relaxed mb-4 max-w-2xl">
              11 ready-to-install Claude AI skills built for pharmaceutical and consumer healthcare marketers. Campaign planning, brand launch, trade marketing, KOL engagement, regulatory review, and more — all in one pack.
            </p>
            <p className="text-navy-500 text-sm mb-10">
              Built by a pharma marketer. Tested on real campaigns. No coding required.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-white">$49</span>
                  <span className="text-navy-500 text-sm">one-time · instant download</span>
                </div>
                <p className="text-navy-600 text-xs">11 skills · PDF guide included · Free updates</p>
              </div>
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-navy-950 text-base font-bold rounded-xl hover:bg-navy-100 transition-colors shadow-lg shadow-white/10"
              >
                Get the Pack
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility bar */}
      <section className="border-b border-white/5 bg-navy-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/images/sherif-headshot.png"
                alt="Sherif Al-Kady"
                className="w-9 h-9 rounded-full object-cover border border-white/10"
              />
              <div>
                <p className="text-white text-sm font-medium">Built by Sherif Al-Kady, MBA</p>
                <p className="text-navy-500 text-xs">20+ years in pharma marketing · KSA & GCC</p>
              </div>
            </div>
            <div className="w-px h-8 bg-white/5 hidden sm:block" />
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-navy-400">
              <span>11 pharma-specific skills</span>
              <span>SFDA-aware regulatory checker</span>
              <span>KSA & GCC market context</span>
              <span>15-minute install</span>
            </div>
          </div>
        </div>
      </section>

      {/* The problem */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              Generic AI tools weren&apos;t built for pharma marketing
            </h2>
            <p className="text-navy-400 leading-relaxed mb-4">
              ChatGPT and Claude work well for generic tasks. But when you ask them to build a pharma campaign plan, review copy for SFDA compliance, or structure a KOL engagement program — you spend more time correcting the output than you saved generating it.
            </p>
            <p className="text-navy-400 leading-relaxed mb-4">
              The problem isn&apos;t the AI. It&apos;s that you&apos;re using a general-purpose tool for a specialist job. A pharma brand manager&apos;s work has context that generic AI doesn&apos;t have: regulatory constraints, pharmacy channel dynamics, HCP engagement rules, KSA market specifics.
            </p>
            <p className="text-navy-300 leading-relaxed font-medium">
              These skills embed that context. You get outputs that are already calibrated to your regulatory environment, your channel structure, and your market.
            </p>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-20 lg:py-24 bg-navy-900/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
              What&apos;s Inside
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              11 skills. One command each.
            </h2>
            <p className="text-navy-400 max-w-xl">
              Every skill runs with a single slash command. No prompting, no setup for each use — just call the skill and describe what you need.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="bg-navy-900 border border-white/5 rounded-xl p-5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-white font-semibold text-sm">{skill.name}</h3>
                  <code className="shrink-0 text-accent-500 text-xs bg-accent-500/10 px-2 py-0.5 rounded font-mono">
                    {skill.command}
                  </code>
                </div>
                <p className="text-navy-500 text-xs leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Up and running in 15 minutes
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Buy and download",
                body: "Purchase once on Gumroad. You get instant access to a ZIP file with all 11 SKILL.md files and a PDF installation guide.",
              },
              {
                step: "02",
                title: "Install Claude Code",
                body: "The PDF guide walks you through installing Claude Code (Anthropic's free CLI) if you don't already have it. Takes about 5 minutes.",
              },
              {
                step: "03",
                title: "Drop the skills in and go",
                body: "Copy the SKILL.md files into your Claude skills directory. From that point, type /campaign-planner (or any skill) and Claude is ready.",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-white/5 mb-4 leading-none">{step.step}</div>
                <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 lg:py-24 bg-navy-900/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block px-3 py-1 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
              Who It&apos;s For
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              Built for working pharma marketers
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Brand Managers",
                body: "Campaign planning, annual marketing plans, and brand positioning work — done in a fraction of the time without losing strategic quality.",
              },
              {
                title: "Trade Marketing Managers",
                body: "Trade activation plans, pharmacy channel strategies, and sell-out programs with KSA pharmacy chain context built in.",
              },
              {
                title: "Marketing Directors",
                body: "Portfolio analysis, P&L modeling, and strategic briefs at speed. More time on decisions, less time on document assembly.",
              },
              {
                title: "Product Managers (CHC)",
                body: "Consumer healthcare launch planning, competitive analysis, and pricing strategy with GCC market context already embedded.",
              },
              {
                title: "Regulatory Affairs Teams",
                body: "First-pass SFDA compliance checks on marketing copy before it goes to formal MLR review. Catch issues early, save review cycles.",
              },
              {
                title: "Pharma Marketing Agencies",
                body: "Run specialist pharma deliverables for clients faster. Briefs, plans, and compliance checks without the pharma specialist overhead.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-accent-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                </div>
                <p className="text-navy-500 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA block */}
      <section className="py-20 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 p-8 lg:p-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Stop prompting from scratch. Start using skills.
            </h2>
            <p className="text-navy-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              11 pharma-specific Claude skills. $49 once. Instant download. Your next campaign plan might be 15 minutes away.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-white text-navy-950 text-base font-bold rounded-xl hover:bg-navy-100 transition-colors shadow-lg"
              >
                Get the Pack — $49
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <p className="text-navy-600 text-sm">One-time purchase · Instant download · 7-day refund policy</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">
            Common questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/5 pb-6">
                <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                <p className="text-navy-400 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 p-5 bg-navy-900 border border-white/5 rounded-xl">
            <p className="text-navy-400 text-sm">
              Still have questions?{" "}
              <Link href="/contact" className="text-white hover:text-accent-400 transition-colors underline underline-offset-2">
                Contact Sherif directly
              </Link>{" "}
              — usually responds within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Final sticky-style back to shop */}
      <section className="border-t border-white/5 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/shop" className="text-navy-500 text-sm hover:text-white transition-colors">
            ← Back to all products
          </Link>
          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-950 text-sm font-bold rounded-lg hover:bg-navy-100 transition-colors"
          >
            Get the Pack — $49
          </a>
        </div>
      </section>
    </>
  );
}
