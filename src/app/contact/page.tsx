import type { Metadata } from "next";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with PharmaGrowth. Contact us for coaching inquiries, partnership opportunities, or general questions about pharma marketing training.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | PharmaGrowth",
    description: "Get in touch for coaching, partnerships, or general inquiries.",
    images: [{ url: "/images/sherif-speaking.png", width: 800, height: 600 }],
  },
};

const contactMethods = [
  {
    label: "Email",
    value: "hello@pharmagrowth.co",
    href: "mailto:hello@pharmagrowth.co",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "+971 XX XXX XXXX",
    href: "https://wa.me/971XXXXXXXXX",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Sherif Al-Kady",
    href: "https://www.linkedin.com/in/sherif-al-kady-mba/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-white/5 text-accent-500 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Talk
            </h1>
            <p className="text-lg text-navy-400 leading-relaxed max-w-2xl mx-auto">
              Have a question about coaching, community, or partnerships? Reach out and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-navy-900 border border-white/5 rounded-2xl p-6 lg:p-8">
                <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
                <form className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm text-navy-400 mb-2">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder:text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm text-navy-400 mb-2">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder:text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-navy-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder:text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm text-navy-400 mb-2">Subject</label>
                    <select
                      id="subject"
                      className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                      defaultValue=""
                    >
                      <option value="" disabled>Select a topic</option>
                      <option value="coaching">Coaching Inquiry</option>
                      <option value="community">Community Question</option>
                      <option value="partnership">Partnership / Collaboration</option>
                      <option value="speaking">Speaking Request</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-navy-400 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-navy-800 border border-white/10 rounded-lg text-white placeholder:text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-white hover:bg-navy-200 text-navy-950 text-sm font-semibold rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact methods */}
              <div className="bg-navy-900 border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4">Get in Touch Directly</h3>
                <div className="space-y-4">
                  {contactMethods.map((method, i) => (
                    <a
                      key={i}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 text-navy-400 hover:text-white transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-accent-500 group-hover:bg-white/10 transition-colors shrink-0">
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-xs text-navy-600">{method.label}</p>
                        <p className="text-sm text-navy-300 group-hover:text-white transition-colors">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Book a call */}
              <div className="bg-navy-900 border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-2">Book a Free Discovery Call</h3>
                <p className="text-navy-500 text-sm mb-4">
                  Prefer a live conversation? Schedule a 30-minute discovery call to discuss your goals.
                </p>
                <CTAButton
                  href="https://calendly.com/pharmagrowth"
                  variant="secondary"
                  size="sm"
                  className="w-full"
                  external
                >
                  Open Calendly
                </CTAButton>
              </div>

              {/* Response time */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent-500 shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-accent-500 text-sm font-semibold">Quick Response</p>
                    <p className="text-navy-400 text-xs mt-1">
                      We typically respond within 24 hours on business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
