import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PricingCard from "@/components/PricingCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Join the PharmaGrowth community on Skool. Weekly live sessions, course library, peer networking, templates, and expert Q&A for pharma marketing professionals.",
  openGraph: {
    title: "Join the PharmaGrowth Community | PharmaGrowth",
    description: "Weekly live sessions, courses, templates, and peer networking. Early bird: $29/month.",
  },
};

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Weekly Live Sessions",
    description: "Join live workshops, Q&A calls, and masterclasses every week with Sherif and guest experts.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "Full Course Library",
    description: "Access all recorded courses, frameworks, and training modules on pharma digital marketing.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Peer Network",
    description: "Connect with pharma marketers from across GCC and MENA. Share wins, ask questions, grow together.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Templates & Playbooks",
    description: "Download ready-to-use marketing plans, campaign frameworks, and brand strategy templates.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Expert Q&A",
    description: "Get your marketing challenges answered by Sherif and seasoned industry professionals.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Accountability",
    description: "Monthly challenges, progress tracking, and a supportive environment to keep you moving forward.",
  },
];

const faqs = [
  {
    q: "Who is this community for?",
    a: "Pharma and healthcare marketing professionals at all levels -- from brand managers to marketing directors, whether you're in traditional pharma or consumer healthcare.",
  },
  {
    q: "What platform is the community on?",
    a: "We use Skool, a modern community platform that combines courses, discussions, and live events in one place. It works on web and mobile.",
  },
  {
    q: "How much time do I need to commit?",
    a: "As little or as much as you want. Weekly live sessions are 60 minutes. Courses are self-paced. The community is always active for quick questions.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no contracts or commitments. Cancel anytime from your Skool dashboard. Your access continues until the end of your billing period.",
  },
  {
    q: "Is this relevant for non-GCC markets?",
    a: "While many examples come from GCC/MENA, the frameworks and strategies apply globally. We have members from Egypt, Lebanon, India, and beyond.",
  },
  {
    q: "What's the difference between the community and coaching?",
    a: "The community gives you group learning, courses, and peer support. Coaching is 1:1 with Sherif for personalized strategy, career guidance, and deep-dive sessions.",
  },
];

const testimonials = [
  {
    quote: "The weekly sessions alone are worth 10x the membership fee. Sherif breaks down complex digital strategies into actionable steps for pharma.",
    name: "Omar H.",
    role: "Product Manager",
    company: "Pharma Company, UAE",
  },
  {
    quote: "Finally a community that gets pharma marketing. The templates saved me weeks of work and the network opened doors I didn't know existed.",
    name: "Nadia S.",
    role: "Digital Marketing Lead",
    company: "Healthcare, KSA",
  },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
                Community
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Your Tribe of Pharma Marketers
              </h1>
              <p className="text-lg text-navy-400 leading-relaxed mb-8">
                Join a private community of ambitious pharma and healthcare marketing professionals. Learn together, grow together, win together.
              </p>
              <CTAButton href="https://skool.com/pharmagrowth" size="lg" external>
                Join for $29/month
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </CTAButton>
              <p className="text-navy-600 text-sm mt-4">Early bird launch price. Cancel anytime.</p>
            </div>

            {/* Community Image */}
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop"
                  alt="Team of professionals collaborating"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What You Get"
            title="Everything Inside the Community"
            subtitle="A complete ecosystem for pharma marketing growth, all in one place."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-2xl p-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-500 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{benefit.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pricing"
            title="Simple, Transparent Pricing"
            subtitle="One plan. Everything included. No hidden fees."
          />

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-start">
            {/* Regular Price — Anchor (shows what they'll pay later) */}
            <PricingCard
              title="Regular Membership"
              price="$49"
              period="month"
              description="Standard pricing after early bird period ends."
              features={[
                "Weekly live workshops & Q&A sessions",
                "Full course library (all modules)",
                "Private peer networking community",
                "Marketing templates & playbooks",
                "Expert feedback on your campaigns",
                "Monthly challenges & accountability",
                "Archive of all past sessions",
                "Mobile access via Skool app",
              ]}
              ctaText="Available After Launch"
              ctaHref="#"
            />

            {/* Early Bird — The deal (highlighted) */}
            <div>
              <PricingCard
                title="Early Bird Membership"
                price="$29"
                originalPrice="$49"
                period="month"
                description="Lock in this price forever. Cancel anytime."
                features={[
                  "Everything in Regular, plus:",
                  "Founding member badge & recognition",
                  "Price locked for life (never increases)",
                  "Direct access to Sherif for feedback",
                  "Priority in live Q&A sessions",
                  "Early access to all new courses",
                  "Exclusive founding members channel",
                  "Shape the community roadmap",
                ]}
                ctaText="Claim Early Bird Spot"
                ctaHref="https://skool.com/pharmagrowth"
                highlighted
                badge="Save 41%"
              />
              {/* Urgency bar */}
              <div className="mt-4 bg-navy-900 border border-white/10 rounded-xl p-4 text-center">
                <p className="text-accent-500 text-sm font-semibold mb-1">
                  Early bird pricing — limited time only
                </p>
                <p className="text-navy-500 text-xs">
                  Early bird pricing locks in permanently — it will never increase for founding members. When the early bird period ends, price goes to $49/month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Member Stories"
            title="What Members Are Saying"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-xl p-6">
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Level Up Your Pharma Marketing?
          </h2>
          <p className="text-navy-400 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of pharma professionals already growing their skills and careers inside the community.
          </p>
          <CTAButton href="https://skool.com/pharmagrowth" size="lg" external>
            Join for $29/month
          </CTAButton>
        </div>
      </section>
    </>
  );
}
