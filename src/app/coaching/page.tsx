import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "1:1 Coaching",
  description:
    "1:1 coaching with Sherif Al-Kady for pharma brand managers and marketing directors. Strategy sessions, marketing plan reviews, and career guidance.",
  alternates: { canonical: "/coaching" },
  openGraph: {
    title: "1:1 Premium Coaching | PharmaGrowth",
    description: "Personalized 1:1 coaching for pharma marketing professionals. $100/hour.",
    images: [{ url: "/images/sherif-speaking.png", width: 800, height: 600 }],
  },
};

const audiences = [
  {
    title: "Brand Managers",
    description: "Level up your digital marketing skills, build stronger campaigns, and position yourself for promotion.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Marketing Directors",
    description: "Get strategic input on team structure, digital transformation, and scaling marketing operations in pharma.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: "Career Changers",
    description: "Transitioning into pharma marketing? Get a personalized roadmap, skill-building plan, and interview prep.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

const includes = [
  "60-minute strategy sessions via Zoom",
  "Marketing plan review and feedback",
  "Campaign audit and optimization advice",
  "Career guidance and positioning",
  "LinkedIn profile and personal brand review",
  "Custom action plan after each session",
  "Email follow-up with resources and recommendations",
  "Priority access to Sherif between sessions",
];

const process = [
  {
    step: "01",
    title: "Book Your Session",
    description: "Choose a time that works for you. Fill out a short intake form so Sherif can prepare.",
  },
  {
    step: "02",
    title: "Deep-Dive Call",
    description: "60 minutes of focused strategy, problem-solving, or career planning. No fluff.",
  },
  {
    step: "03",
    title: "Action Plan",
    description: "Within 24 hours, you receive a written summary with action items, resources, and next steps.",
  },
];

export default function CoachingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              1:1 Coaching
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Premium Coaching for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                Pharma Leaders
              </span>
            </h1>
            <p className="text-lg text-navy-400 leading-relaxed mb-8 max-w-2xl mx-auto">
              Get personalized strategy, career guidance, and marketing expertise directly from Sherif Al-Kady. No generic advice. Only proven frameworks from 20+ years in pharma.
            </p>
            <CTAButton href="https://calendly.com/pharmagrowth" size="lg" external>
              Book a Free Discovery Call
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Who It's For"
            title="Is Coaching Right for You?"
            subtitle="Designed for pharma professionals who want fast, focused results."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((audience, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent-500 mx-auto mb-4">
                  {audience.icon}
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{audience.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                badge="What's Included"
                title="More Than Just a Call"
                centered={false}
              />
              <ul className="space-y-3">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="text-navy-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="space-y-6">
              {process.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-500 font-bold shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{step.title}</h3>
                    <p className="text-navy-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Let&apos;s Build Your Growth Plan
          </h2>
          <p className="text-navy-400 text-lg mb-8 max-w-2xl mx-auto">
            Book a 1:1 coaching session at $100/hour and get a clear roadmap for your pharma marketing career.
          </p>
          <CTAButton href="https://calendly.com/pharmagrowth" size="lg" external>
            Book a Free Discovery Call
          </CTAButton>
        </div>
      </section>
    </>
  );
}
