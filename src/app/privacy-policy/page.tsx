import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PharmaGrowth",
  description: "How PharmaGrowth collects, uses, and protects your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-navy-950 pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-navy-500 text-sm mb-10">Last updated: March 2026</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-navy-300 leading-relaxed">

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">1. Who We Are</h2>
            <p>
              PharmaGrowth (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the website{" "}
              <span className="text-white">pharmagrowth.co</span> — an educational platform for pharma and
              healthcare marketing professionals. This policy explains what personal data we collect, why we
              collect it, and how we use it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-white font-medium">Email address</span> &mdash; when you subscribe to our
                newsletter or contact us through any form on the site.
              </li>
              <li>
                <span className="text-white font-medium">Usage data</span> &mdash; pages visited, time spent, and
                browser/device information, collected automatically via analytics tools (e.g. Google Analytics).
              </li>
              <li>
                <span className="text-white font-medium">Communications</span> &mdash; any messages you send us
                via the contact form or email.
              </li>
            </ul>
            <p className="mt-3">We do not collect payment information directly. Any purchases are processed by
            third-party providers (e.g. Stripe, Gumroad) under their own privacy policies.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To send you the weekly newsletter you subscribed to</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To improve our content and understand what topics are most useful to our audience</li>
              <li>To notify you of new courses, coaching programs, or community updates (only if you opted in)</li>
            </ul>
            <p className="mt-3">We will never sell your email address or personal data to third parties.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">4. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to understand how visitors interact with our site.
              These include analytics cookies (Google Analytics) and functional cookies required for the site to
              work properly. You can disable cookies in your browser settings at any time, though some parts of
              the site may not function correctly as a result.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">5. Affiliate Links</h2>
            <p>
              Some links on this site are affiliate links. If you click one and make a purchase, we may earn a
              commission at no additional cost to you. We only recommend tools and products we genuinely use or
              believe in. Affiliate links are clearly disclosed within the relevant articles.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">6. Data Retention</h2>
            <p>
              We retain your email address for as long as you are subscribed to our newsletter. You can
              unsubscribe at any time using the link at the bottom of every email. Once unsubscribed, your data
              is removed from our mailing list within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">7. Third-Party Services</h2>
            <p>Our site may use third-party services including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Google Analytics &mdash; website traffic analysis</li>
              <li>Email marketing platforms (e.g. Mailchimp, ConvertKit) &mdash; newsletter delivery</li>
              <li>YouTube &mdash; embedded videos</li>
            </ul>
            <p className="mt-3">
              Each of these services has its own privacy policy and we encourage you to review them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Request a copy of the personal data we hold about you</li>
              <li>Ask us to correct or delete your data</li>
              <li>Withdraw consent for marketing emails at any time</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:hello@pharmagrowth.co" className="text-accent-400 hover:text-accent-300 transition-colors">
                hello@pharmagrowth.co
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. When we do, we&rsquo;ll update the &ldquo;Last
              updated&rdquo; date at the top of this page. Continued use of the site after changes are posted
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">10. Contact</h2>
            <p>
              Questions about this policy? Reach us at{" "}
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
