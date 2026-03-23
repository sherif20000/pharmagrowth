import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Free Resources",
  description:
    "Download the free Pharma Digital Marketing Playbook, access templates, and explore premium tools for pharma marketing professionals.",
};

export default function ResourcesPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
          Resources
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
          Free Resources
        </h1>
        <p className="text-lg text-navy-400 leading-relaxed mb-8">
          Our free resources section has moved to the home page. Visit the home page to download the free Pharma Digital Marketing Playbook, templates, and more.
        </p>
        <CTAButton href="/" size="lg">
          Go to Home Page
        </CTAButton>
      </div>
    </section>
  );
}
