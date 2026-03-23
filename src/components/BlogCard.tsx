import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
  href?: string;
}

export default function BlogCard({ title, excerpt, category, date, readTime, image, href }: BlogCardProps) {
  const card = (
    <article className="bg-navy-900 border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 h-full flex flex-col group">
      {/* Image */}
      <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <svg className="w-12 h-12 text-navy-700" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6V7.5z" />
          </svg>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Category & meta */}
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-0.5 bg-white/10 text-white text-xs font-medium rounded-full">
            {category}
          </span>
          <span className="text-navy-600 text-xs">{readTime}</span>
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-accent-500 transition-colors leading-tight">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-navy-500 text-sm leading-relaxed flex-1 mb-4">
          {excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="text-navy-600 text-xs">{date}</p>
          {href && (
            <span className="text-accent-500 text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Read Article
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
