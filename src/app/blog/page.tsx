import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights on pharma digital marketing, AI marketing, brand building, and career growth. Actionable strategies for healthcare marketing professionals.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | PharmaGrowth",
    description: "Pharma marketing insights, strategies, and career advice.",
    images: [{ url: "/images/sherif-speaking.png", width: 800, height: 600 }],
  },
};

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
            {articles.map((post, i) => (
              <BlogCard key={i} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter handled by footer — no duplicate here */}
    </>
  );
}
