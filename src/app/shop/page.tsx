import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Digital marketing products for pharma professionals. ChatGPT prompt packs, Canva templates, marketing toolkits, and more.",
  openGraph: {
    title: "Shop | PharmaGrowth",
    description: "Premium digital marketing templates and tools for pharma professionals. $19 - $47.",
  },
};

const productTeasers = [
  {
    title: "ChatGPT Mega Prompt Pack: Pharma Edition",
    description: "100+ AI prompts for campaign planning, content creation, competitor analysis, brand strategy, and social media.",
    price: "$19 - $47",
    badge: "Coming Soon",
    gradient: "from-navy-800 via-accent-600/20 to-navy-900",
  },
  {
    title: "Canva Social Media Template Bundle",
    description: "50+ professionally designed social media templates for healthcare and pharma brands. Instagram, LinkedIn, Facebook ready.",
    price: "$19 - $47",
    badge: "Coming Soon",
    gradient: "from-navy-800 via-white/5 to-navy-900",
  },
  {
    title: "Complete Pharma Marketing Toolkit",
    description: "Strategy templates, campaign planners, SOPs, KPI trackers, and reporting dashboards. Everything you need in one package.",
    price: "$19 - $47",
    badge: "Coming Soon",
    gradient: "from-navy-900 via-accent-600/10 to-navy-800",
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

      {/* Coming Soon Notice */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Coming Soon Banner */}
          <div className="bg-navy-900 border border-white/10 rounded-2xl p-8 lg:p-12 text-center mb-16">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Shop Coming Soon</h2>
            <p className="text-navy-400 text-sm leading-relaxed max-w-lg mx-auto mb-8">
              We are putting the finishing touches on our digital products. Subscribe to get notified when the shop opens, including early bird pricing.
            </p>

            {/* Newsletter Signup */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder:text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white hover:bg-navy-200 text-navy-950 text-sm font-semibold rounded-lg transition-colors shrink-0"
              >
                Notify Me
              </button>
            </form>
            <p className="text-navy-600 text-xs mt-3">No spam. Just a heads-up when products launch.</p>
          </div>

          {/* Product Teasers */}
          <SectionHeading
            badge="Preview"
            title="What We Are Building"
            subtitle="Premium digital products designed specifically for pharma marketing professionals. Priced from $19 to $47."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productTeasers.map((product, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-2xl overflow-hidden flex flex-col">
                {/* Abstract gradient card instead of empty placeholder */}
                <div className={`aspect-video bg-gradient-to-br ${product.gradient} flex items-center justify-center relative`}>
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 bg-white/10 text-white text-xs font-semibold rounded-full">
                    {product.badge}
                  </span>
                  <svg className="w-12 h-12 text-white/10" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-semibold text-sm mb-2 leading-tight">{product.title}</h3>
                  <p className="text-navy-500 text-xs leading-relaxed flex-1 mb-4">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Community CTA */}
          <div className="text-center mt-16">
            <p className="text-navy-400 text-sm mb-4">
              While you wait, join the community for templates, frameworks, and live sessions.
            </p>
            <CTAButton href="/community">
              Join the Community
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
