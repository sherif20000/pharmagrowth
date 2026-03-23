import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Structured group coaching cohorts and masterclasses for pharma marketing professionals. 8-week programs covering digital marketing, brand building, and AI marketing.",
  openGraph: {
    title: "Courses & Cohorts | PharmaGrowth",
    description: "8-week group coaching cohorts and on-demand masterclasses. Coming soon.",
  },
};

const cohorts = [
  {
    title: "Pharma Digital Marketing Mastery",
    duration: "8 Weeks",
    description: "The flagship program. Master every aspect of digital marketing for pharmaceutical and healthcare brands.",
    modules: [
      "Digital strategy for pharma: Compliance meets creativity",
      "Social media marketing for healthcare brands",
      "Paid advertising: Meta, Google, and programmatic for pharma",
      "Content marketing and thought leadership in healthcare",
      "E-commerce and DTC strategies for consumer healthcare",
      "Marketing analytics and ROI measurement",
      "AI tools for pharma marketers",
      "Career positioning and personal branding",
    ],
    status: "Next cohort: Q2 2026",
    spots: "Limited to 20 participants",
  },
  {
    title: "Brand Manager Accelerator",
    duration: "6 Weeks",
    description: "Designed for early to mid-career brand managers who want to fast-track their digital skills.",
    modules: [
      "The modern brand manager toolkit",
      "Digital campaign planning and execution",
      "Social media strategy for pharma",
      "Working with agencies and KOLs",
      "Building your marketing portfolio",
      "Career roadmap and next steps",
    ],
    status: "Next cohort: Q3 2026",
    spots: "Limited to 15 participants",
  },
];

const masterclasses = [
  {
    title: "AI Marketing for Pharma",
    description: "How to use ChatGPT, Claude, and AI tools to 10x your marketing productivity while staying compliant.",
    duration: "3 hours",
  },
  {
    title: "LinkedIn for Pharma Professionals",
    description: "Build your personal brand, grow your network, and attract career opportunities on LinkedIn.",
    duration: "2 hours",
  },
  {
    title: "Data-Driven Marketing in Healthcare",
    description: "Master analytics, attribution, and ROI measurement for pharmaceutical campaigns.",
    duration: "3 hours",
  },
  {
    title: "E-Commerce for Consumer Healthcare",
    description: "Launch and scale DTC channels for OTC products and dermo-cosmetics in GCC.",
    duration: "2.5 hours",
  },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Courses & Cohorts
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Structured Learning for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                Pharma Marketers
              </span>
            </h1>
            <p className="text-lg text-navy-400 leading-relaxed mb-8 max-w-2xl mx-auto">
              Group coaching cohorts with live sessions, hands-on projects, and peer accountability. Plus on-demand masterclasses you can take anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Cohort Programs */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Group Coaching"
            title="Cohort Programs"
            subtitle="Structured, intensive programs with live instruction, group work, and real-world projects."
          />

          <div className="space-y-8">
            {cohorts.map((cohort, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-2xl p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white">{cohort.title}</h3>
                      <span className="px-3 py-1 bg-white/5 text-accent-500 text-xs font-medium rounded-full">
                        {cohort.duration}
                      </span>
                    </div>
                    <p className="text-navy-400 text-sm leading-relaxed mb-6">{cohort.description}</p>

                    <h4 className="text-white text-sm font-semibold mb-3">What You&apos;ll Learn:</h4>
                    <div className="grid sm:grid-cols-2 gap-2 mb-6">
                      {cohort.modules.map((module, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span className="text-navy-400 text-xs">{module}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-navy-500">
                      <span>{cohort.status}</span>
                      <span className="w-1 h-1 rounded-full bg-navy-700" />
                      <span>{cohort.spots}</span>
                    </div>
                  </div>

                  <div className="lg:text-right shrink-0">
                    <p className="text-navy-500 text-sm mb-4">Pricing announced soon</p>
                    <CTAButton href="/contact" variant="primary">
                      Join Waitlist
                    </CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterclasses */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="On-Demand"
            title="Mini-Courses & Masterclasses"
            subtitle="Focused, self-paced sessions on specific topics. Watch anytime."
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {masterclasses.map((mc, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-2xl p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-0.5 bg-white/5 text-accent-500 text-xs font-medium rounded-full">
                    {mc.duration}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{mc.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed flex-1 mb-4">{mc.description}</p>
                <div className="flex items-center justify-between">
                  <p className="text-navy-500 text-sm">Coming Soon</p>
                  <CTAButton href="/contact" variant="secondary" size="sm">
                    Join Waitlist
                  </CTAButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-900 border border-white/10 p-8 lg:p-16 text-center">
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Don&apos;t Miss the Next Cohort
              </h2>
              <p className="text-navy-400 text-lg mb-8 max-w-2xl mx-auto">
                Join the waitlist to get early access, launch pricing, and a spot in the next group coaching cohort.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-white text-navy-950 text-sm font-semibold rounded-lg hover:bg-navy-200 transition-colors shrink-0"
                >
                  Join Waitlist
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
