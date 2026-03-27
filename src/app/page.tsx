import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import StatBar from "@/components/StatBar";
import SectionHeading from "@/components/SectionHeading";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "PharmaGrowth | Master Pharma Marketing. Accelerate Your Career.",
  description:
    "Join 5,000+ pharma professionals mastering digital marketing through community, coaching, and courses. Led by Sherif Al-Kady with 20+ years in pharma marketing across GCC.",
};

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "80+", label: "Brands Managed" },
  { value: "30M+", label: "Consumers Reached" },
  { value: "5,000+", label: "Professionals Trained" },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Community",
    description: "Join a private community of pharma marketing professionals. Weekly live sessions, peer networking, and expert Q&A.",
    href: "/community",
    price: "Early Bird: $29/mo",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Coaching",
    description: "1:1 premium coaching sessions for brand managers, marketing directors, and career changers seeking rapid growth.",
    href: "/coaching",
    price: "$100/hour",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Courses",
    description: "Structured 8-week group coaching cohorts and on-demand masterclasses covering digital marketing for pharma.",
    href: "/courses",
    price: "Coming Soon",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Templates & Tools",
    description: "Ready-to-use marketing templates, ChatGPT prompt packs, Canva templates, and toolkits built for pharma.",
    href: "/shop",
    price: "$19 - $47",
  },
];

const testimonials = [
  {
    quote: "PharmaGrowth completely changed how I approach digital campaigns. The frameworks Sherif teaches are practical and immediately applicable to pharma brands.",
    name: "Sarah M.",
    role: "Brand Manager",
    company: "Top 10 Pharma Company",
  },
  {
    quote: "The community is incredible. Having a network of pharma marketers who understand the unique challenges of our industry is invaluable. Worth every dirham.",
    name: "Ahmed K.",
    role: "Marketing Director",
    company: "Healthcare Distributor, UAE",
  },
  {
    quote: "After just 3 coaching sessions, I landed a senior marketing role with a 40% salary increase. Sherif's career guidance was spot on.",
    name: "Fatima R.",
    role: "Senior Marketing Manager",
    company: "Consumer Healthcare, KSA",
  },
];

const steps = [
  {
    step: "01",
    title: "Join the Community",
    description: "Get instant access to our private community of pharma marketers, weekly live sessions, and a library of resources.",
  },
  {
    step: "02",
    title: "Learn & Apply",
    description: "Follow proven frameworks, take structured courses, and use ready-made templates to level up your marketing skills.",
  },
  {
    step: "03",
    title: "Grow Your Career",
    description: "Build your portfolio, expand your network, and accelerate your career trajectory in pharma marketing.",
  },
];

/* Free resources data merged from resources page */
const freeResources = [
  {
    title: "The GCC Pharma Digital Marketing Playbook",
    description: "5 channels that actually work in KSA, SFDA compliance rules, a LinkedIn content system, and a complete 90-day action plan. Built from 20 years in GCC pharma.",
    format: "PDF · 30 pages",
    href: "https://pharmagrowth.gumroad.com/l/pharma-digital-marketing-playbook",
  },
  {
    title: "Pharma Marketing Plan Template",
    description: "A complete, structured template for building a brand marketing plan for KSA and the GCC. Covers brand snapshot, SWOT, channel plan, budget, activity calendar, and KPIs.",
    format: "PDF · Fillable template",
    href: "https://pharmagrowth.gumroad.com/l/pharma-marketing-plan-template",
  },
  {
    title: "Pharma Campaign Brief Template",
    description: "Brief any campaign cleanly — from objective to launch. Includes channel plan, key message framework, approval sign-off, and a launch checklist built for pharma.",
    format: "PDF · Fillable template",
    href: "https://pharmagrowth.gumroad.com/l/pharma-campaign-brief-template",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                The #1 Pharma Marketing Platform
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Master Pharma Marketing.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                  Accelerate Your Career.
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-navy-400 mb-8 leading-relaxed">
                Join the community where pharma and healthcare professionals learn digital marketing, build their brands, and advance their careers. Led by 20+ years of real-world experience.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <CTAButton href="/community" size="lg">
                  Join the Community
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </CTAButton>
                <CTAButton href="/about" variant="secondary" size="lg">
                  Learn More
                </CTAButton>
              </div>

              <p className="mt-6 text-navy-600 text-sm">
                Trusted by 5,000+ pharma professionals across GCC and MENA
              </p>
            </div>

            {/* Hero Visual — brand, not person */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/brand-hero-visual.png"
                  alt="PharmaGrowth — pharma marketing intelligence platform"
                  width={800}
                  height={600}
                  className="w-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/20 to-transparent" />
                {/* Floating stat cards */}
                <div className="absolute bottom-5 left-5 right-5 flex gap-3">
                  {[
                    { value: "5,000+", label: "Professionals" },
                    { value: "80+", label: "Brands Built" },
                    { value: "GCC", label: "Market Focus" },
                  ].map((s, i) => (
                    <div key={i} className="flex-1 bg-navy-950/80 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2.5 text-center">
                      <p className="text-white text-sm font-bold leading-none">{s.value}</p>
                      <p className="text-navy-500 text-xs mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatBar stats={stats} />

      {/* Services Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Offer"
            title="Everything You Need to Grow in Pharma Marketing"
            subtitle="From community support to 1:1 coaching, structured courses to ready-made tools. Pick the path that fits your goals."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <a
                key={i}
                href={service.href}
                className="group bg-navy-900 border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-500 mb-4 group-hover:bg-white/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed mb-4">{service.description}</p>
                <p className="text-accent-500 text-sm font-medium">{service.price}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Visual break — coaching in action */}
      <section className="overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
            <Image
              src="/images/pharma-marketing-team.png"
              alt="Pharma marketing strategy session — PharmaGrowth coaching"
              width={1400}
              height={600}
              className="w-full object-cover max-h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-lg px-8 lg:px-16">
                <p className="text-accent-500 text-xs font-semibold uppercase tracking-widest mb-3">1:1 Coaching</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                  Direct access to 20+ years of pharma marketing experience
                </h2>
                <a
                  href="/coaching"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-950 text-sm font-bold rounded-xl hover:bg-navy-100 transition-colors"
                >
                  Book a Discovery Call
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Resources Section (merged from /resources) */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Free Resources"
            title="Start With These Free Tools"
            subtitle="Free playbooks and guides built specifically for pharma marketers in KSA and the GCC. Download instantly."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {freeResources.map((resource, i) => (
              <a key={i} href={resource.href} target="_blank" rel="noopener noreferrer" className="bg-navy-900 border border-white/5 hover:border-accent-500/30 rounded-2xl p-6 flex flex-col transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-500 mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="text-white font-semibold mb-2 group-hover:text-accent-400 transition-colors">{resource.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed flex-1 mb-4">{resource.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-navy-600 text-xs">{resource.format}</span>
                  <span className="text-accent-500 text-sm font-semibold">Download Free →</span>
                </div>
              </a>
            ))}
          </div>

          {/* Email capture for playbook */}
          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email for the free playbook"
                className="flex-1 px-4 py-3 bg-navy-900 border border-white/10 rounded-lg text-white placeholder:text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white hover:bg-navy-200 text-navy-950 text-sm font-semibold rounded-lg transition-colors shrink-0"
              >
                Download Free
              </button>
            </form>
            <p className="text-navy-600 text-xs mt-3 text-center">No spam. Instant download link sent to your email.</p>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="Trusted by Pharma Professionals Across the Region"
            subtitle="Hear from marketing leaders who transformed their careers and campaigns with PharmaGrowth."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="Your Path to Pharma Marketing Mastery"
            subtitle="A simple, proven framework to help you level up your skills and career."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                {/* Connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 text-accent-500 text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 p-8 lg:p-16 text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Pharma Marketing Career?
              </h2>
              <p className="text-navy-400 text-lg mb-8 max-w-2xl mx-auto">
                Join 5,000+ professionals who are already growing. Start with the community and get instant access to live sessions, courses, and tools.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <CTAButton href="/community" size="lg">
                  Join for $29/month
                </CTAButton>
                <CTAButton href="/contact" variant="outline" size="lg">
                  Book a Free Discovery Call
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter handled by footer — no duplicate */}
    </>
  );
}
