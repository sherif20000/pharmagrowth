import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PharmaGrowth",
  description: "Terms and conditions for using the PharmaGrowth platform and content.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms of Service | PharmaGrowth",
    description: "Terms and conditions for using the PharmaGrowth platform and content.",
    images: [{ url: "/images/sherif-speaking.png", width: 800, height: 600 }],
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-navy-950 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-navy-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-navy-300 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using <span className="text-white">pharmagrowth.co</span> (&ldquo;the Site&rdquo;),
              you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not
              use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Use of the Site</h2>
            <p>You agree to use this Site only for lawful purposes and in a way that does not:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Infringe the rights of others</li>
              <li>Restrict or inhibit anyone else&rsquo;s use or enjoyment of the Site</li>
              <li>Reproduce, duplicate, or copy content for commercial use without written permission</li>
              <li>Transmit unsolicited communications or spam</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. Intellectual Property</h2>
            <p>
              All content on this Site &mdash; including articles, course materials, videos, graphics, and
              branding &mdash; is the intellectual property of PharmaGrowth and its creator, Sherif Al-Kady,
              unless otherwise stated. You may not reproduce or redistribute any content without prior written
              consent.
            </p>
            <p className="mt-3">
              You are welcome to share links to articles and content, with proper attribution to PharmaGrowth.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Educational Content Disclaimer</h2>
            <p>
              The content on this Site is provided for educational and informational purposes only. It reflects
              the author&rsquo;s personal experience and professional perspective, and does not constitute
              medical, legal, regulatory, or financial advice.
            </p>
            <p className="mt-3">
              Pharma regulations, market conditions, and business practices vary by country. Always verify
              information with qualified professionals before applying it in a regulated context.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Courses and Digital Products</h2>
            <p>
              When you purchase a course or digital product through this Site or affiliated platforms
              (e.g. business.sherifalkadymarketing.com):
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Access is granted to the individual purchaser only and is non-transferable</li>
              <li>Refund policies are specified at the point of purchase</li>
              <li>Course content may be updated or revised over time</li>
              <li>We reserve the right to revoke access for violations of these terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Affiliate Links</h2>
            <p>
              This Site contains affiliate links. When you click an affiliate link and make a qualifying
              purchase, we may receive a commission at no extra cost to you. This does not affect the
              independence of our recommendations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Third-Party Links</h2>
            <p>
              This Site may contain links to third-party websites. These are provided for convenience only.
              We have no control over the content or practices of those sites and accept no responsibility for
              them. Visiting linked sites is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Limitation of Liability</h2>
            <p>
              PharmaGrowth and Sherif Al-Kady shall not be liable for any direct, indirect, incidental, or
              consequential damages arising from your use of this Site or reliance on any content published
              here. The Site is provided &ldquo;as is&rdquo; without warranties of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. Changes will be reflected by
              updating the &ldquo;Last updated&rdquo; date above. Continued use of the Site after changes are
              posted constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Kingdom of Saudi Arabia. Any disputes arising from
              use of this Site will be subject to the exclusive jurisdiction of the courts of Saudi Arabia.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">11. Contact</h2>
            <p>
              Questions about these terms? Email us at{" "}
              <a href="mailto:hello@pharmagrowth.co" className="text-accent-400 hover:text-accent-300 transition-colors">
                hello@pharmagrowth.co
              </a>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
