import { MetadataRoute } from "next";

const BASE_URL = "https://pharmagrowth.co";

const articleSlugs = [
  "digital-marketing-pharmaceutical-companies",
  "ai-tools-pharma-marketing",
  "pharma-brand-social-media-saudi-arabia",
  "trade-marketing-pharmaceutical-industry",
  "merchandising-consumer-healthcare",
  "private-label-healthcare-marketing",
  "ecommerce-consumer-healthcare-products",
  "pharmacy-merchandising-strategies",
  "healthcare-private-label-marketing",
  "ecommerce-consumer-healthcare-gcc",
  "sfda-marketing-compliance",
  "hcp-digital-engagement",
  "pharma-brand-positioning",
  "pharmacy-channel-management-ksa",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/coaching`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/courses`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/community`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE_URL}/shop`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/shop/claude-skills-pack`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];

  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...articlePages];
}
