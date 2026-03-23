import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights on pharma digital marketing, AI marketing, brand building, and career growth. Actionable strategies for healthcare marketing professionals.",
  openGraph: {
    title: "Blog | PharmaGrowth",
    description: "Pharma marketing insights, strategies, and career advice.",
  },
};

const blogPosts = [
  {
    title: "The Complete Guide to Digital Marketing for Pharmaceutical Companies (2026)",
    excerpt:
      "A proven framework covering 7 core channels, SFDA/FDA compliance, GCC case studies, and actionable strategy from 20+ years in pharma.",
    category: "Digital Marketing",
    date: "March 23, 2026",
    readTime: "18 min read",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&fit=crop",
    href: "/blog/digital-marketing-pharmaceutical-companies",
  },
  {
    title: "10 AI Tools Every Pharma Marketer Should Use in 2026",
    excerpt:
      "Expert-tested picks for content creation, SEO, design, CRM, and compliance-safe marketing at scale. Includes pricing, pros/cons, and pharma-specific ratings.",
    category: "AI & Technology",
    date: "March 23, 2026",
    readTime: "15 min read",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    href: "/blog/ai-tools-pharma-marketing",
  },
  {
    title: "How to Build a Pharmaceutical Brand on Social Media in Saudi Arabia",
    excerpt:
      "SFDA-compliant strategies, platform breakdowns, content frameworks, and real-world examples from 10+ years building pharma brands in KSA.",
    category: "Strategy",
    date: "March 23, 2026",
    readTime: "14 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    href: "/blog/pharma-brand-social-media-saudi-arabia",
  },
  {
    title: "Trade Marketing in the Pharmaceutical Industry: A Complete Guide",
    excerpt:
      "Master the 5 pillars of pharma trade marketing. Channel strategy, in-store execution, and digital trade activation for KSA pharmacy chains.",
    category: "Trade Marketing",
    date: "March 23, 2026",
    readTime: "14 min read",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    href: "/blog/trade-marketing-pharmaceutical-industry",
  },
  {
    title: "Merchandising for Consumer Healthcare: How to Win at the Pharmacy Shelf",
    excerpt:
      "Shelf placement science, planogram strategy, POSM tools, and KSA pharmacy chain merchandising standards that drive sell-out.",
    category: "Merchandising",
    date: "March 23, 2026",
    readTime: "13 min read",
    image:
      "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=250&fit=crop",
    href: "/blog/merchandising-consumer-healthcare",
  },
  {
    title: "Healthcare Private Label Marketing: How Pharmacy Chains Are Disrupting Branded Products",
    excerpt:
      "The rise of private label in KSA pharmacies, which categories are most vulnerable, and how branded companies should respond.",
    category: "Strategy",
    date: "March 23, 2026",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=250&fit=crop",
    href: "/blog/private-label-healthcare-marketing",
  },
  {
    title: "E-Commerce for Consumer Healthcare Products: The Complete KSA Playbook",
    excerpt:
      "From Amazon.sa to Nahdi online: product listing optimization, digital shelf management, and e-retailer activation strategies for CHC brands.",
    category: "E-Commerce",
    date: "March 23, 2026",
    readTime: "14 min read",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
    href: "/blog/ecommerce-consumer-healthcare-products",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Blog
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Pharma Marketing Insights
            </h1>
            <p className="text-lg text-navy-400 leading-relaxed max-w-2xl mx-auto">
              Expert strategies, industry trends, and career advice for pharma
              and healthcare marketing professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Latest"
            title="Featured Articles"
            subtitle="In-depth guides on pharma digital marketing, AI tools, and brand building in regulated markets."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <BlogCard key={i} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter handled by footer — no duplicate here */}
    </>
  );
}
