// Single source of truth for all blog articles.
// Consumed by the blog index (/blog) and the sitemap.
// When adding a guide: add its entry here — index and sitemap update automatically.

export type Article = {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  href: string;
};

export const articles: Article[] = [
  {
    title: "Consumer Insights for Consumer Healthcare Brands: How to Actually Understand Your Shopper in KSA (2026)",
    excerpt:
      "Jobs-to-be-done for health categories, cheap insight methods that work in the GCC (review mining, Arabic social listening, pharmacy interviews), personas, need-states, and the consumer journey from trigger to repeat purchase.",
    category: "Consumer Centricity",
    date: "July 17, 2026",
    readTime: "15 min read",
    image: "/images/blog-hero-consumer-insights.jpg",
    href: "/blog/consumer-insights-consumer-healthcare",
  },
  {
    title: "Influencer Marketing for Consumer Health Brands in Saudi Arabia: The SFDA-Compliant Playbook (2026)",
    excerpt:
      "Influencer tiers, mawthooq licensing, what claims creators can and cannot make per category, compliant briefing frameworks, platform strategy for KSA, budgets in SAR, and measurement beyond vanity metrics.",
    category: "Digital Marketing",
    date: "July 17, 2026",
    readTime: "14 min read",
    image: "/images/blog-hero-influencer-ksa.jpg",
    href: "/blog/influencer-marketing-consumer-health-ksa",
  },
  {
    title: "How to Launch an OTC Product in Saudi Arabia: The Complete Playbook (2026)",
    excerpt:
      "The phased launch playbook: SFDA classification and registration, distributor selection, listing fees, pharmacist recommendation engine, launch marketing mix, in-store execution, and the first-90-days scorecard.",
    category: "Strategy",
    date: "July 17, 2026",
    readTime: "16 min read",
    image: "/images/blog-hero-otc-launch.jpg",
    href: "/blog/otc-product-launch-saudi-arabia",
  },
  {
    title: "Retail Media for Consumer Healthcare in KSA: Winning Amazon.sa, Noon and Nahdi Ads (2026)",
    excerpt:
      "The KSA retail media landscape mapped: sponsored placements, Arabic + English keyword strategy, campaign architecture, PDP-first rules, realistic CPC ranges, and how retail media is entering JBP negotiations.",
    category: "E-Commerce",
    date: "July 17, 2026",
    readTime: "14 min read",
    image: "/images/blog-hero-retail-media.jpg",
    href: "/blog/retail-media-consumer-healthcare-ksa",
  },
  {
    title: "Vitamins & Supplements Marketing in the GCC: How to Build a Winning VMS Brand (2026)",
    excerpt:
      "Why VMS is the fastest-growing CHC category in the GCC, the regulatory line for supplement claims, emotional positioning playbooks, the iHerb effect, subscription mechanics, and category P&L realities.",
    category: "Consumer Healthcare",
    date: "July 17, 2026",
    readTime: "15 min read",
    image: "/images/blog-hero-vms-gcc.jpg",
    href: "/blog/vitamins-supplements-marketing-gcc",
  },
  {
    title: "The Complete Guide to Digital Marketing for Pharmaceutical Companies (2026)",
    excerpt:
      "A proven framework covering 7 core channels, SFDA/FDA compliance, GCC case studies, and actionable strategy from 20+ years in pharma.",
    category: "Digital Marketing",
    date: "March 23, 2026",
    readTime: "18 min read",
    image: "/images/blog-hero-digital-marketing-pharma.jpg",
    href: "/blog/digital-marketing-pharmaceutical-companies",
  },
  {
    title: "10 AI Tools Every Pharma Marketer Should Use in 2026",
    excerpt:
      "Expert-tested picks for content creation, SEO, design, CRM, and compliance-safe marketing at scale. Includes pricing, pros/cons, and pharma-specific ratings.",
    category: "AI & Technology",
    date: "March 23, 2026",
    readTime: "15 min read",
    image: "/images/blog-hero-ai-tools-pharma.jpg",
    href: "/blog/ai-tools-pharma-marketing",
  },
  {
    title: "How to Build a Pharmaceutical Brand on Social Media in Saudi Arabia",
    excerpt:
      "SFDA-compliant strategies, platform breakdowns, content frameworks, and real-world examples from 10+ years building pharma brands in KSA.",
    category: "Strategy",
    date: "March 23, 2026",
    readTime: "14 min read",
    image: "/images/blog-hero-social-media-pharma.jpg",
    href: "/blog/pharma-brand-social-media-saudi-arabia",
  },
  {
    title: "Trade Marketing in the Pharmaceutical Industry: A Complete Guide",
    excerpt:
      "Master the 5 pillars of pharma trade marketing. Channel strategy, in-store execution, and digital trade activation for KSA pharmacy chains.",
    category: "Trade Marketing",
    date: "March 23, 2026",
    readTime: "14 min read",
    image: "/images/blog-hero-trade-marketing.jpg",
    href: "/blog/trade-marketing-pharmaceutical-industry",
  },
  {
    title: "Merchandising for Consumer Healthcare: How to Win at the Pharmacy Shelf",
    excerpt:
      "Shelf placement science, planogram strategy, POSM tools, and KSA pharmacy chain merchandising standards that drive sell-out.",
    category: "Merchandising",
    date: "March 23, 2026",
    readTime: "13 min read",
    image: "/images/blog-hero-merchandising-chc.jpg",
    href: "/blog/merchandising-consumer-healthcare",
  },
  {
    title: "Healthcare Private Label Marketing: How Pharmacy Chains Are Disrupting Branded Products",
    excerpt:
      "The rise of private label in KSA pharmacies, which categories are most vulnerable, and how branded companies should respond.",
    category: "Strategy",
    date: "March 23, 2026",
    readTime: "12 min read",
    image: "/images/blog-hero-private-label.jpg",
    href: "/blog/private-label-healthcare-marketing",
  },
  {
    title: "E-Commerce for Consumer Healthcare Products: The Complete KSA Playbook",
    excerpt:
      "From Amazon.sa to Nahdi online: product listing optimization, digital shelf management, and e-retailer activation strategies for CHC brands.",
    category: "E-Commerce",
    date: "March 23, 2026",
    readTime: "14 min read",
    image: "/images/blog-hero-ecommerce-chc.jpg",
    href: "/blog/ecommerce-consumer-healthcare-products",
  },
  {
    title: "Pharmacy Merchandising Strategies That Drive Sell-Out: A Field Guide",
    excerpt:
      "Planogram design, shelf placement hierarchy, POSM execution, digital shelf optimization, and a practical audit checklist for pharma brand teams in KSA and GCC.",
    category: "Merchandising",
    date: "March 23, 2026",
    readTime: "13 min read",
    image: "/images/blog-hero-pharmacy-merchandising.jpg",
    href: "/blog/pharmacy-merchandising-strategies",
  },
  {
    title: "Healthcare Private Label: How Pharmacy Chains Are Reshaping the OTC Landscape",
    excerpt:
      "How Nahdi, Al-Dawaa, and Whites own-brand products are disrupting OTC categories in the GCC — and the defense strategies branded pharma companies need now.",
    category: "Strategy",
    date: "March 23, 2026",
    readTime: "12 min read",
    image: "/images/blog-hero-healthcare-private-label.jpg",
    href: "/blog/healthcare-private-label-marketing",
  },
  {
    title: "E-Commerce for Consumer Healthcare: How to Win Online in the GCC Market (2026)",
    excerpt:
      "Marketplace strategy, e-pharmacy regulations, pricing, digital shelf optimization, and P&L modeling for CHC brands competing on Amazon.sa, Noon, and Nahdi Online.",
    category: "E-Commerce",
    date: "March 23, 2026",
    readTime: "14 min read",
    image: "/images/blog-hero-ecommerce-gcc.jpg",
    href: "/blog/ecommerce-consumer-healthcare-gcc",
  },
  {
    title: "SFDA Marketing Compliance: What Every Pharma Brand Manager Must Know (2026)",
    excerpt:
      "A practical guide to SFDA marketing regulations for pharmaceutical and consumer healthcare brands in Saudi Arabia. Covers what is allowed, what is prohibited, the MLR process, social media rules, and how to build a compliant marketing team.",
    category: "Regulatory & Compliance",
    date: "March 26, 2026",
    readTime: "16 min read",
    image: "/images/blog-hero-sfda-compliance.jpg",
    href: "/blog/sfda-marketing-compliance",
  },
  {
    title: "HCP Digital Engagement: How to Reach Doctors Online Without Breaking Compliance (2026)",
    excerpt:
      "A practical guide to digital HCP engagement for pharma marketing teams. Approved channels, compliant content formats, omnichannel orchestration, and measurement frameworks for KSA and GCC markets.",
    category: "Digital Marketing",
    date: "March 26, 2026",
    readTime: "15 min read",
    image: "/images/blog-hero-hcp-digital.jpg",
    href: "/blog/hcp-digital-engagement",
  },
  {
    title: "Pharmacy Channel Management in Saudi Arabia: A Complete Guide for Pharma Brand Teams (2026)",
    excerpt:
      "KSA pharmacy landscape, key account management for Nahdi and Al-Dawaa, sell-in vs. sell-out dynamics, listing fees, distribution strategy, and pharmacy activation programs.",
    category: "Trade Marketing",
    date: "March 27, 2026",
    readTime: "16 min read",
    image: "/images/blog-hero-pharmacy-channel.jpg",
    href: "/blog/pharmacy-channel-management-ksa",
  },
  {
    title: "Pharma Brand Positioning: How to Build a Brand That Doctors and Patients Actually Trust (2026)",
    excerpt:
      "A practical framework for pharmaceutical brand positioning in regulated markets. Positioning statement construction, rational vs. emotional drivers, brand architecture models, and trust-building strategies for KSA and GCC brands.",
    category: "Digital Marketing",
    date: "March 26, 2026",
    readTime: "14 min read",
    image: "/images/blog-hero-brand-positioning.jpg",
    href: "/blog/pharma-brand-positioning",
  },
];

export const articleSlugs = articles.map((a) => a.href.replace("/blog/", ""));
