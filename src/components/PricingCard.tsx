import CTAButton from "./CTAButton";

interface PricingCardProps {
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
  originalPrice?: string;
}

export default function PricingCard({
  title,
  price,
  period,
  description,
  features,
  ctaText,
  ctaHref,
  highlighted = false,
  badge,
  originalPrice,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 lg:p-8 flex flex-col ${
        highlighted
          ? "bg-gradient-to-b from-white/5 to-navy-900 border-2 border-white/20"
          : "bg-navy-900 border border-white/5"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 bg-white text-navy-950 text-xs font-semibold rounded-full">
            {badge}
          </span>
        </div>
      )}

      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-navy-500 text-sm mb-6">{description}</p>

      <div className="mb-6">
        {originalPrice && (
          <span className="text-navy-600 text-lg line-through mr-2">{originalPrice}</span>
        )}
        <span className="text-3xl font-bold text-white">{price}</span>
        {period && <span className="text-navy-500 text-sm ml-1">/{period}</span>}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            <span className="text-navy-300 text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <CTAButton
        href={ctaHref}
        variant={highlighted ? "primary" : "secondary"}
        size="lg"
        className="w-full"
      >
        {ctaText}
      </CTAButton>
    </div>
  );
}
