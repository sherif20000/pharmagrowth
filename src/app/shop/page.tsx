import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Digital products for pharma marketers — AI skills packs, prompt packs, and toolkits built specifically for pharma marketing professionals.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop | PharmaGrowth",
    description: "Digital products for pharma marketers — starting with the Claude AI Skills Pack at $49.",
    images: [{ url: "/images/claude-skills-pack-cover.jpg", width: 800, height: 600 }],
  },
};

const productTeasers = [
  {
    title: "ChatGPT Mega Prompt Pack: Pharma Edition",
    description: "100+ AI prompts for campaign planning, content creation, competitor analysis, brand strategy, and social media.",
    price: "$19 - $47",
    badge: "Coming Soon",
    gradient: "from-navy-800 via-accent-600/20 to-navy-900",
    href: null,
    image: "/images/chatgpt-prompt-pack-cover.jpg",
  },
  {
    title: "Claude AI Skills Pack: Pharma Marketers Edition",
    description: "11 ready-to-install Claude skills for pharma marketing — campaign planning, brand launch, trade marketing, KOL engagement, regulatory copy review, marketing plan, and more. Built for Claude Code.",
    price: "$49",
    badge: "Available Now",
    gradient: "from-navy-800 via-white/5 to-navy-900",
    href: "https://sherifelkady.gumroad.com/l/pharmagrowth",
    image: "/images/claude-skills-pack-cover.jpg",
  },
  {
    title: "Complete Pharma Marketing Toolkit",
    description: "Strategy templates, campaign planners, SOPs, KPI trackers, and reporting dashboards. Everything you need in one package.",
    price: "$249",
    badge: "Coming Soon",
    gradient: "from-navy-900 via-accent-600/10 to-navy-800",
    href: null,
    image: "/images/pharma-toolkit-cover.jpg",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Shop
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Digital Products for Pharma Marketers
            </h1>
            <p className="text-lg text-navy-400 leading-relaxed max-w-2xl mx-auto">
              Professionally crafted templates, prompt packs, and toolkits built specifically for pharmaceutical and healthcare marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product — Claude AI Skills Pack */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero Product Card */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 mb-20">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative grid lg:grid-cols-2 gap-0">
              {/* Left: Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-accent-500 text-navy-950 text-xs font-bold rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-navy-950/60 inline-block" />
                    Available Now
                  </span>
                  <span className="text-navy-500 text-xs">Digital Download</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  Claude AI Skills Pack<br />
                  <span className="text-navy-400 font-normal text-xl sm:text-2xl lg:text-3xl">Pharma Marketers Edition</span>
                </h2>
                <p className="text-navy-400 text-base leading-relaxed mb-6 max-w-md">
                  11 ready-to-install Claude skills for pharma marketing — campaign planning, brand launch, trade marketing, KOL engagement, regulatory copy review, and more. Built for Claude Code.
                </p>
                <ul className="space-y-2 mb-8">
                  {[
                    "11 specialist skills, install in minutes",
                    "Campaign Planner, Brand Launch, Trade Marketing",
                    "Regulatory Copy Checker + P&L Analysis",
                    "Built for KSA and GCC pharma markets",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-navy-300">
                      <svg className="w-4 h-4 text-accent-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-4xl font-bold text-white">$49</span>
                  <Link
                    href="/shop/claude-skills-pack"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy-950 text-sm font-bold rounded-xl hover:bg-navy-100 transition-colors"
                  >
                    See Full Details
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                  <a
                    href="https://sherifelkady.gumroad.com/l/pharmagrowth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-xl transition-colors border border-white/10"
                  >
                    Buy Now
                  </a>
                </div>
              </div>

              {/* Right: Product Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800/50 via-white/5 to-navy-900/50" />
                <Image
                  src="/images/claude-skills-pack-cover.jpg"
                  alt="Claude AI Skills Pack: Pharma Marketers Edition"
                  fill
                  className="object-cover opacity-80 mix-blend-luminosity"
                />
              </div>
            </div>
          </div>

          {/* More Products Coming */}
          <SectionHeading
            badge="Coming Soon"
            title="More Products in the Pipeline"
            subtitle="Premium digital products designed specifically for pharma marketing professionals."
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {productTeasers.filter(p => !p.href).map((product, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-2xl overflow-hidden flex flex-col">
                <div className={`aspect-video bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover opacity-40"
                    />
                  ) : null}
                  <span className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-navy-950/70 border border-white/20 text-navy-300 text-xs font-semibold rounded-full z-10">
                    {product.badge}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-semibold text-sm mb-2 leading-tight">{product.title}</h3>
                  <p className="text-navy-500 text-xs leading-relaxed flex-1 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-navy-400">{product.price}</span>
                    <span className="text-xs text-navy-600 border border-white/5 rounded-lg px-3 py-1.5">Notify me when live</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
