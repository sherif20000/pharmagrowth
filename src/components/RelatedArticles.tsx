import Link from "next/link";
import Image from "next/image";

/**
 * Central article registry + related-articles map.
 * Drives the "Keep Reading" grid on every article via ArticleLayout,
 * guaranteeing each article has contextual internal links (SEO cluster).
 */

interface ArticleMeta {
  title: string;
  category: string;
  image: string;
}

const ARTICLES: Record<string, ArticleMeta> = {
  "digital-marketing-pharmaceutical-companies": {
    title: "The Complete Guide to Digital Marketing for Pharmaceutical Companies (2026)",
    category: "Digital Marketing",
    image: "/images/blog-hero-digital-marketing-pharma.jpg",
  },
  "ai-tools-pharma-marketing": {
    title: "10 AI Tools Every Pharma Marketer Should Use in 2026",
    category: "AI & Technology",
    image: "/images/blog-hero-ai-tools-pharma.jpg",
  },
  "pharma-brand-social-media-saudi-arabia": {
    title: "How to Build a Pharmaceutical Brand on Social Media in Saudi Arabia",
    category: "Strategy",
    image: "/images/blog-hero-social-media-pharma.jpg",
  },
  "trade-marketing-pharmaceutical-industry": {
    title: "Trade Marketing in the Pharmaceutical Industry: A Complete Guide",
    category: "Trade Marketing",
    image: "/images/blog-hero-trade-marketing.jpg",
  },
  "merchandising-consumer-healthcare": {
    title: "Merchandising for Consumer Healthcare: How to Win at the Pharmacy Shelf",
    category: "Merchandising",
    image: "/images/blog-hero-merchandising-chc.jpg",
  },
  "private-label-healthcare-marketing": {
    title: "Healthcare Private Label Marketing: How Pharmacy Chains Are Disrupting Branded Products",
    category: "Strategy",
    image: "/images/blog-hero-private-label.jpg",
  },
  "ecommerce-consumer-healthcare-products": {
    title: "E-Commerce for Consumer Healthcare Products: The Complete KSA Playbook",
    category: "E-Commerce",
    image: "/images/blog-hero-ecommerce-chc.jpg",
  },
  "pharmacy-merchandising-strategies": {
    title: "Pharmacy Merchandising Strategies That Drive Sell-Out: A Field Guide",
    category: "Merchandising",
    image: "/images/blog-hero-pharmacy-merchandising.jpg",
  },
  "healthcare-private-label-marketing": {
    title: "Healthcare Private Label: How Pharmacy Chains Are Reshaping the OTC Landscape",
    category: "Strategy",
    image: "/images/blog-hero-healthcare-private-label.jpg",
  },
  "ecommerce-consumer-healthcare-gcc": {
    title: "E-Commerce for Consumer Healthcare: How to Win Online in the GCC Market (2026)",
    category: "E-Commerce",
    image: "/images/blog-hero-ecommerce-gcc.jpg",
  },
  "sfda-marketing-compliance": {
    title: "SFDA Marketing Compliance: What Every Pharma Brand Manager Must Know (2026)",
    category: "Regulatory & Compliance",
    image: "/images/blog-hero-sfda-compliance.jpg",
  },
  "hcp-digital-engagement": {
    title: "HCP Digital Engagement: How to Reach Doctors Online Without Breaking Compliance (2026)",
    category: "Digital Marketing",
    image: "/images/blog-hero-hcp-digital.jpg",
  },
  "pharmacy-channel-management-ksa": {
    title: "Pharmacy Channel Management in Saudi Arabia: A Complete Guide for Pharma Brand Teams (2026)",
    category: "Trade Marketing",
    image: "/images/blog-hero-pharmacy-channel.jpg",
  },
  "pharma-brand-positioning": {
    title: "Pharma Brand Positioning: How to Build a Brand That Doctors and Patients Actually Trust (2026)",
    category: "Digital Marketing",
    image: "/images/blog-hero-brand-positioning.jpg",
  },
};

/** 3 contextually-related articles per slug. Every article receives inbound links. */
const RELATED: Record<string, string[]> = {
  "ai-tools-pharma-marketing": [
    "digital-marketing-pharmaceutical-companies",
    "sfda-marketing-compliance",
    "pharma-brand-social-media-saudi-arabia",
  ],
  "digital-marketing-pharmaceutical-companies": [
    "ai-tools-pharma-marketing",
    "pharma-brand-social-media-saudi-arabia",
    "hcp-digital-engagement",
  ],
  "ecommerce-consumer-healthcare-gcc": [
    "ecommerce-consumer-healthcare-products",
    "merchandising-consumer-healthcare",
    "private-label-healthcare-marketing",
  ],
  "ecommerce-consumer-healthcare-products": [
    "ecommerce-consumer-healthcare-gcc",
    "pharmacy-merchandising-strategies",
    "digital-marketing-pharmaceutical-companies",
  ],
  "hcp-digital-engagement": [
    "sfda-marketing-compliance",
    "pharma-brand-positioning",
    "digital-marketing-pharmaceutical-companies",
  ],
  "healthcare-private-label-marketing": [
    "private-label-healthcare-marketing",
    "merchandising-consumer-healthcare",
    "pharmacy-channel-management-ksa",
  ],
  "merchandising-consumer-healthcare": [
    "pharmacy-merchandising-strategies",
    "trade-marketing-pharmaceutical-industry",
    "pharmacy-channel-management-ksa",
  ],
  "pharma-brand-positioning": [
    "pharma-brand-social-media-saudi-arabia",
    "digital-marketing-pharmaceutical-companies",
    "hcp-digital-engagement",
  ],
  "pharma-brand-social-media-saudi-arabia": [
    "sfda-marketing-compliance",
    "digital-marketing-pharmaceutical-companies",
    "pharma-brand-positioning",
  ],
  "pharmacy-channel-management-ksa": [
    "trade-marketing-pharmaceutical-industry",
    "merchandising-consumer-healthcare",
    "ecommerce-consumer-healthcare-products",
  ],
  "pharmacy-merchandising-strategies": [
    "merchandising-consumer-healthcare",
    "pharmacy-channel-management-ksa",
    "trade-marketing-pharmaceutical-industry",
  ],
  "private-label-healthcare-marketing": [
    "healthcare-private-label-marketing",
    "merchandising-consumer-healthcare",
    "pharmacy-channel-management-ksa",
  ],
  "sfda-marketing-compliance": [
    "hcp-digital-engagement",
    "pharma-brand-social-media-saudi-arabia",
    "ai-tools-pharma-marketing",
  ],
  "trade-marketing-pharmaceutical-industry": [
    "pharmacy-channel-management-ksa",
    "pharmacy-merchandising-strategies",
    "merchandising-consumer-healthcare",
  ],
};

export default function RelatedArticles({ slug }: { slug?: string }) {
  if (!slug) return null;
  const related = RELATED[slug];
  if (!related?.length) return null;

  return (
    <section className="border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-xl font-bold text-white mb-6">Keep Reading</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {related.map((relSlug) => {
            const meta = ARTICLES[relSlug];
            if (!meta) return null;
            return (
              <Link
                key={relSlug}
                href={`/blog/${relSlug}`}
                className="group bg-navy-900 border border-white/5 hover:border-accent-500/30 rounded-2xl overflow-hidden transition-colors"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={meta.image}
                    alt={meta.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-accent-500 text-xs font-semibold uppercase tracking-wide mb-1.5">
                    {meta.category}
                  </p>
                  <p className="text-white text-sm font-semibold leading-snug group-hover:text-accent-400 transition-colors line-clamp-3">
                    {meta.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
