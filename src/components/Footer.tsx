import Link from "next/link";

const footerLinks = {
  platform: [
    { href: "/community", label: "Community" },
    { href: "/blog", label: "Blog" },
    { href: "/shop", label: "Shop" },
  ],
  resources: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  social: [
    { href: "https://www.linkedin.com/in/sherif-al-kady-mba/", label: "LinkedIn" },
    { href: "https://www.facebook.com/Sherifalkadymarketing/", label: "Facebook" },
    { href: "https://youtube.com/@pharmagrowth", label: "YouTube" },
    { href: "https://instagram.com/pharmagrowth", label: "Instagram" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      {/* Newsletter section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Get Pharma Marketing Insights Weekly
          </h3>
          <p className="text-navy-500 mb-6 text-sm">
            Actionable tips, industry trends, and career strategies delivered every Tuesday.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-navy-900 border border-white/10 rounded-lg text-white placeholder:text-navy-600 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white hover:bg-navy-200 text-navy-950 text-sm font-semibold rounded-lg transition-colors shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/90 to-white/70 flex items-center justify-center">
                <span className="text-navy-950 font-bold text-sm">PG</span>
              </div>
              <span className="text-lg font-bold text-white">
                Pharma<span className="text-accent-500">Growth</span>
              </span>
            </Link>
            <p className="text-navy-500 text-sm leading-relaxed">
              Empowering pharma and healthcare professionals to master digital marketing and accelerate their careers.
            </p>
          </div>

          {/* Platform links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-navy-500 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-navy-600">
              &copy; {new Date().getFullYear()} PharmaGrowth. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-xs text-navy-600">
                Privacy Policy
              </span>
              <span className="text-xs text-navy-600">
                Terms of Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
