interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ badge, title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-4 tracking-wide uppercase">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-navy-400 text-base lg:text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
