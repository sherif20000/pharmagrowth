import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left: Copy */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent-500/10 text-accent-400 text-xs font-semibold rounded-full tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
                  Available Now
                </span>
                <span className="text-navy-500 text-xs">Digital Download · Instant Access</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
                Claude AI Skills Pack{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                  Pharma Marketers Edition
                </span>
              </h1>

              <p className="text-lg text-navy-300 leading-relaxed mb-4">
                11 ready-to-install Claude AI skills built for pharmaceutical and consumer healthcare marketers. Campaign planning, brand launch, trade marketing, KOL engagement, regulatory review — all in one pack.
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

            {/* Right: Product image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
                <Image
                  src="/images/claude-skills-pack-cover.png"
                  alt="Claude AI Skills Pack: Pharma Marketers Edition"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-navy-900 border border-white/10 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-white text-sm font-bold">11 skills included</p>
                <p className="text-navy-500 text-xs">Install once. Use forever.</p>
              </div>
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

      {/* Terminal preview */}
      <section className="py-16 bg-navy-950/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-navy-500 text-xs uppercase tracking-widest font-semibold mb-8">See it in action</p>
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-navy-800 border-b border-white/5">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-4 text-navy-500 text-xs font-mono">Claude Code — pharma-brand</span>
            </div>
            {/* Terminal body */}
            <div className="bg-navy-950 p-6 font-mono text-sm space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-accent-500 shrink-0">$</span>
                <span className="text-white">/campaign-planner</span>
              </div>
              <div className="text-navy-400 text-xs leading-relaxed border-l-2 border-accent-500/30 pl-4">
                <p className="text-navy-300 font-semibold mb-2">Campaign Planner — PharmaGrowth</p>
                <p className="mb-1">Tell me about your campaign:</p>
                <p className="mb-1 text-navy-500">· Product name and category</p>
                <p className="mb-1 text-navy-500">· Objective (awareness / trial / rx lift)</p>
                <p className="mb-1 text-navy-500">· Target audience (HCP / consumer / both)</p>
                <p className="text-navy-500">· Budget range and timeline</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-green-400 shrink-0">→</span>
                <span className="text-navy-300 text-xs">Vitamin D supplement, awareness + trial, consumer focus, Q3 launch, SAR 150K budget</span>
              </div>
              <div className="text-navy-400 text-xs leading-relaxed border-l-2 border-green-500/30 pl-4 space-y-1">
                <p className="text-white font-semibold">Campaign Architecture: VitaD Pro — Q3 Consumer Awareness</p>
                <p className="text-navy-400">Phase 1 (Weeks 1–3): Digital awareness via Instagram + Snapchat. Focus on deficiency education content. KPIs: reach 500K, CPM &lt; SAR 8.</p>
                <p className="text-navy-400">Phase 2 (Weeks 4–8): Pharmacy activation at Nahdi + Al-Dawaa. Gondola end + pharmacist recommendation program. Target 15% lift in sell-out.</p>
                <p className="text-navy-400">Phase 3 (Weeks 9–12): Retargeting + loyalty promo via chain apps...</p>
                <p className="text-accent-500 animate-pulse">▋</p>
              </div>
            </div>
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
                icon: (
                  <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                ),
                step: "01",
                title: "Buy and download",
                body: "Purchase once on Gumroad. Instant access to a ZIP with all 11 SKILL.md files and a PDF installation guide.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                  </svg>
                ),
                step: "02",
                title: "Install Claude Code",
                body: "The guide walks you through installing Anthropic's free CLI in ~5 minutes. Works on Mac, Windows, and Linux.",
              },
              {
                icon: (
                  <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
                step: "03",
                title: "Type a command and go",
                body: "Drop the skills into your Claude directory. Type /campaign-planner — or any of the 11 skills — and you're working.",
              },
            ].map((step, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-2xl p-6 relative">
                <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center mb-5">
                  {step.icon}
                </div>
                <span className="absolute top-5 right-5 text-3xl font-bold text-white/5">{step.step}</span>
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
