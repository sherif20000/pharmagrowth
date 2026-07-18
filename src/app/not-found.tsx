import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/blog", label: "Blog", desc: "19 in-depth CHC & pharma marketing guides" },
  { href: "/tools", label: "Tools", desc: "Free calculators for margin, P&L, and launch budget" },
  { href: "/resources", label: "Resources", desc: "Free playbooks and templates to download" },
  { href: "/community", label: "Community", desc: "Join the free WhatsApp community" },
];

export default function NotFound() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
          404
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
          This page moved or never existed
        </h1>
        <p className="text-lg text-navy-400 leading-relaxed mb-10 max-w-lg mx-auto">
          The link may be old or mistyped. Here&apos;s where most people are headed — pick one and
          keep going.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group bg-navy-900 border border-white/5 hover:border-white/20 rounded-2xl p-5 transition-all"
            >
              <h2 className="text-white font-semibold mb-1 group-hover:text-accent-400 transition-colors">
                {l.label}
              </h2>
              <p className="text-navy-500 text-sm leading-relaxed">{l.desc}</p>
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 bg-white hover:bg-navy-200 text-navy-950 px-8 py-4 text-base"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
