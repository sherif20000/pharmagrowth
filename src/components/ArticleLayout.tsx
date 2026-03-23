import Link from "next/link";

interface ArticleLayoutProps {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  children: React.ReactNode;
}

export default function ArticleLayout({
  title,
  author,
  date,
  readTime,
  category,
  children,
}: ArticleLayoutProps) {
  return (
    <>
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

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 article-content">
        {children}
      </article>

      {/* CTA Section */}
      <section className="border-t border-white/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Join the PharmaGrowth Community
          </h2>
          <p className="text-navy-400 text-lg leading-relaxed max-w-xl mx-auto mb-8">
            Connect with pharma marketing professionals who are building the
            future of healthcare marketing. Share strategies, access proven
            frameworks, and accelerate your career.
          </p>
          <Link
            href="/community"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-navy-200 text-navy-950 font-semibold rounded-xl transition-colors"
          >
            Join the Community
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
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
