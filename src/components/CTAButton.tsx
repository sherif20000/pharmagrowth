import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: CTAButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200";

  const variants = {
    primary: "bg-white hover:bg-navy-200 text-navy-950 shadow-lg shadow-white/10 hover:shadow-white/20",
    secondary: "bg-navy-800 hover:bg-navy-700 text-white border border-white/10 hover:border-white/20",
    outline: "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedStyles}>
      {children}
    </Link>
  );
}
