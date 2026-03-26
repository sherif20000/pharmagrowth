import Link from "next/link";
import Image from "next/image";

export interface FaqItem {
  question: string;
  answer: string;
}

interface ArticleLayoutProps {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  slug?: string;
  publishedDate?: string; // ISO 8601 e.g. "2026-03-23"
  heroImage?: string; // path to hero image e.g. "/images/..."
  heroImageAlt?: string;
  faqItems?: FaqItem[];
  children: React.ReactNode;
}

const BASE_URL = "https://pharmagrowth.co";

export default function ArticleLayout({
  title,
  description,
  author,
  date,
  readTime,
  category,
  slug,
  publishedDate,
  heroImage,
  heroImageAlt,
  faqItems,
  children,
}: ArticleLayoutProps) {
  const articleUrl = slug ? `${BASE_URL}/blog/${slug}` : `${BASE_URL}/blog`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Person",
      name: author,
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "PharmaGrowth",
      url: BASE_URL,
    },
    datePublished: publishedDate ?? date,
    dateModified: publishedDate ?? date,
    url: articleUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: title, item: articleUrl },
    ],
  };

  const faqSchema = faqItems?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Back to Blog */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-navy-400 hover:text-white text-sm transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <header className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <span className="inline-block px-3 py-1 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
          {category}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-navy-400">
          <div className="flex items-center gap-3">
            <img src="/images/sherif-headshot.png" alt={author} className="w-10 h-10 rounded-full object-cover border border-white/10" />
            <span className="font-medium text-white">By {author}</span>
          </div>
          <span className="text-navy-600">|</span>
          <time>{date}</time>
          <span className="text-navy-600">|</span>
          <span>{readTime}</span>
        </div>
      </header>

      {/* Hero Image */}
      {heroImage && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-black/40">
            <Image
              src={heroImage}
              alt={heroImageAlt ?? title}
              width={900}
              height={506}
              className="w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
          </div>
        </div>
      )}

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 article-content">
        {children}
      </article>

      {/* Conversion CTA Section */}
      <section className="border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 p-8 lg:p-10">
            <p className="text-accent-500 text-xs font-semibold uppercase tracking-wider mb-3">
              Work With Sherif
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Take Your Pharma Marketing Further
            </h2>
            <p className="text-navy-400 text-base leading-relaxed mb-8 max-w-xl">
              20+ years building pharmaceutical and consumer healthcare brands across Saudi Arabia and the GCC. Turn that into your competitive advantage.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white font-semibold mb-1">1:1 Strategy Coaching</p>
                <p className="text-navy-500 text-sm leading-relaxed mb-4">
                  Focused sessions on your brand, your market, your career. Direct access. No generic frameworks.
                </p>
                <Link
                  href="/coaching"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-navy-950 text-sm font-semibold rounded-lg hover:bg-navy-200 transition-colors"
                >
                  Book a Discovery Call
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <p className="text-white font-semibold mb-1">Courses &amp; Cohorts</p>
                <p className="text-navy-500 text-sm leading-relaxed mb-4">
                  Structured programs for pharma marketers who want to master digital marketing, AI tools, and brand strategy.
                </p>
                <Link
                  href="/courses"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg transition-colors border border-white/10"
                >
                  View Programs
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="border-t border-white/10 bg-navy-900/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <p className="text-navy-400 text-sm text-center mb-4">
            Share this article
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent("https://pharmagrowth.co/blog")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-navy-300 rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              X / Twitter
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent("https://pharmagrowth.co/blog")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-navy-300 rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
