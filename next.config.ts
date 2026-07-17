import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent the site being embedded in iframes (clickjacking protection)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Stop browsers MIME-sniffing responses away from declared content-type
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Send only the origin when navigating cross-origin (privacy)
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable powerful browser APIs the site never uses
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
