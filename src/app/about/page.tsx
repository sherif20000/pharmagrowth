import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";
import StatBar from "@/components/StatBar";

export const metadata: Metadata = {
  title: "About Sherif Al-Kady",
  description:
    "Meet Sherif Al-Kady, MBA — 20+ years pharma marketing leadership across Egypt and GCC. Founder of PharmaGrowth education platform.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sherif Al-Kady | PharmaGrowth",
    description: "20+ years of pharma marketing leadership. 80+ brands managed. $500K+ ad spend optimized.",
    images: [{ url: "/images/sherif-speaking.png", width: 800, height: 600 }],
  },
};

const stats = [
  { value: "20+", label: "Years in Pharma" },
  { value: "80+", label: "Brands Managed" },
  { value: "$500K+", label: "Ad Spend Managed" },
  { value: "30M+", label: "Consumers Reached" },
];

const credentials = [
  { title: "MBA", institution: "Paris ESLSCA Business School" },
  { title: "Marketing Certificate", institution: "Wharton School, University of Pennsylvania" },
  { title: "Inbound Marketing Certified", institution: "HubSpot Academy" },
  { title: "Digital Marketing Diploma", institution: "Multiple accredited institutions" },
  { title: "Consumer Psychology", institution: "Professional diploma" },
  { title: "AI Marketing Specialist", institution: "Advanced certification" },
];

const experience = [
  {
    company: "MPS Bashirco",
    role: "Business Unit Manager",
    description: "Led strategic planning and commercial execution for the Oral Care and Beauty Care business units, driving KA partnerships and cross-functional teams across GCC markets.",
  },
  {
    company: "STADA MENA",
    role: "CHC Marketing Manager — KSA & Bahrain",
    description: "Delivered 50% sales growth and 15% market share gain across the CHC portfolio in KSA & Bahrain — including Nizoral, Septofort, Radian, and 7 new launches.",
  },
  {
    company: "Zimmo Trading Co.",
    role: "Marketing Manager",
    description: "Built the marketing department from scratch, managing 3–4 marketers and full P&L across global healthcare brands including Omron, TENA, and Ducray.",
  },
  {
    company: "Al-Dawaa Medical Services (DMSCO)",
    role: "Acting Marketing Manager",
    description: "Managed brand activation and marketing operations across chain pharmacies, private, and governmental sectors at one of KSA's largest pharmacy retail chains.",
  },
];

const values = [
  {
    title: "Practical Over Theoretical",
    description: "Every framework, template, and strategy comes from real campaigns -- not textbooks.",
  },
  {
    title: "Region-First",
    description: "Built specifically for pharma marketers in GCC and MENA. We understand your market dynamics.",
  },
  {
    title: "Community-Driven",
    description: "Learning happens faster together. Our community creates accountability and opportunity.",
  },
  {
    title: "Career-Focused",
    description: "Skills training is useless without career impact. We focus on outcomes that matter.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              About the Founder
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Sherif Al-Kady
            </h1>
            <p className="text-xl text-accent-500 font-medium mb-4">
              From Brand Lead to Industry Educator
            </p>
            <p className="text-lg text-navy-400 leading-relaxed mb-8">
              With over 20 years of experience in pharmaceutical and consumer healthcare marketing across Egypt and the GCC, Sherif has managed 80+ brands, optimized over $500K in ad spend, and reached more than 30 million consumers. He founded PharmaGrowth to make world-class pharma marketing education accessible to every professional in the region.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/community">Join the Community</CTAButton>
              <CTAButton href="/contact" variant="secondary">Get in Touch</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatBar stats={stats} />

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeading
                badge="The Story"
                title="From Brand Lead to Industry Educator"
                centered={false}
              />
              <div className="space-y-4 text-navy-400 text-sm leading-relaxed">
                <p>
                  Sherif began his career in pharma marketing in Egypt, working his way up from brand manager to leading digital marketing operations for some of the region&apos;s largest pharmaceutical distributors.
                </p>
                <p>
                  His move to the GCC accelerated everything. At Zimmo Trading, he built the marketing department from scratch and managed global brands including Omron, TENA, and Ducray. At STADA MENA, he drove 50% sales growth across the CHC portfolio in KSA and Bahrain. At MPS Bashirco, he led the Oral Care and Beauty Care business units from strategy to execution. Each role deepened his understanding of what pharma marketers actually need — and what they're rarely taught.
                </p>
                <p>
                  Along the way, Sherif noticed a critical gap: talented pharma professionals who wanted to learn digital marketing had nowhere to turn. University programs were too theoretical. Online courses were too generic. And coaching from someone who actually understood pharma? Nearly nonexistent.
                </p>
                <p>
                  PharmaGrowth was born to fill that gap. Sherif now dedicates his expertise to training the next generation of pharma marketers through community, coaching, and structured programs.
                </p>
              </div>
            </div>

            {/* Founder Photo */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 relative">
                <img
                  src="/images/sherif-speaking.png"
                  alt="Sherif Al-Kady - Founder of PharmaGrowth"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <p className="text-white font-semibold">Sherif Al-Kady</p>
                  <p className="text-navy-400 text-sm">Founder, PharmaGrowth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Experience"
            title="Career Highlights"
            subtitle="Leadership roles across the pharma and healthcare marketing industry."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {experience.map((exp, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-1">{exp.company}</h3>
                <p className="text-accent-500 text-sm font-medium mb-3">{exp.role}</p>
                <p className="text-navy-500 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Education & Certifications"
            title="Credentials That Matter"
            subtitle="A foundation of world-class education and continuous professional development."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((cred, i) => (
              <div key={i} className="bg-navy-900 border border-white/5 rounded-xl p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{cred.title}</p>
                  <p className="text-navy-500 text-xs mt-0.5">{cred.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Corporate Experience */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Training & Speaking"
            title="Corporate Training & Industry Sessions"
            subtitle="Trusted by hospitals, pharma companies, and professional communities across the region."
          />

          {/* Corporate Training Logos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <div className="bg-navy-900 border border-white/5 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Saudi German Hospital</h3>
              <p className="text-accent-500 text-sm font-medium mb-2">KSA</p>
              <p className="text-navy-500 text-xs">Complete Service Marketing Course</p>
            </div>

            <div className="bg-navy-900 border border-white/5 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Utopia Pharma</h3>
              <p className="text-accent-500 text-sm font-medium mb-2">Egypt</p>
              <p className="text-navy-500 text-xs">Digital Marketing Course for Pharma Teams</p>
            </div>

            <a
              href="https://business.sherifalkadymarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-900 border border-white/5 rounded-2xl p-6 text-center hover:border-accent-500/30 transition-colors block"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Online Academy</h3>
              <p className="text-accent-500 text-sm font-medium mb-2">300+ Trainees</p>
              <p className="text-navy-500 text-xs">Digital Marketing Foundation — 11+ hour curriculum</p>
            </a>
          </div>

          {/* Speaking Sessions */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-white font-semibold text-lg mb-6 text-center">Featured Sessions & Webinars</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="https://www.youtube.com/watch?v=Ffj4oD_rxXc"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-navy-900 border border-white/5 rounded-2xl overflow-hidden hover:border-accent-500/30 transition-colors"
              >
                <div className="relative aspect-video">
                  <img
                    src="https://i.ytimg.com/vi/Ffj4oD_rxXc/hqdefault.jpg"
                    alt="Marketing Club Session - Digital Marketing in Consumer Healthcare"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white text-sm font-semibold mb-1">Digital Marketing in Consumer Healthcare</p>
                  <p className="text-navy-500 text-xs">Marketing Club — 77th Session, Jeddah</p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/watch?v=He_5HuYK084"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-navy-900 border border-white/5 rounded-2xl overflow-hidden hover:border-accent-500/30 transition-colors"
              >
                <div className="relative aspect-video">
                  <img
                    src="https://i.ytimg.com/vi/He_5HuYK084/hqdefault.jpg"
                    alt="Marketing Club Session - Best Practice Pharma Digital Marketing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-white text-sm font-semibold mb-1">Best Practice in Pharma Digital Marketing</p>
                  <p className="text-navy-500 text-xs">Marketing Club — 109th Session</p>
                </div>
              </a>

              <a
                href="https://www.youtube.com/watch?v=DZAzB0fwRDA"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-navy-900 border border-white/5 rounded-2xl overflow-hidden hover:border-accent-500/30 transition-colors"
              >
                <div className="relative aspect-video">
                  <img
                    src="https://i.ytimg.com/vi/DZAzB0fwRDA/maxresdefault.jpg"
                    alt="Live Webinar - AI for Non-Technical Professionals"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-0.5 bg-red-600 text-white text-[10px] font-bold rounded uppercase tracking-wide">Live Webinar</span>
                </div>
                <div className="p-4">
                  <p className="text-white text-sm font-semibold mb-1">AI for Non-Technical Professionals</p>
                  <p className="text-navy-500 text-xs">Live Webinar — Dr. Sherif Al-Kady Channel</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What Drives PharmaGrowth"
          />

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {values.map((value, i) => (
              <div key={i} className="text-center p-6">
                <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission CTA */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-xl text-navy-400 leading-relaxed mb-8 italic">
              &ldquo;Making world-class pharma marketing education accessible to every professional in the region.&rdquo;
            </p>
            <CTAButton href="/community" size="lg">
              Join the Movement
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
