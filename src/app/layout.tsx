import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pharmagrowth.co"),
  title: {
    default: "PharmaGrowth | Master Pharma Marketing. Accelerate Your Career.",
    template: "%s | PharmaGrowth",
  },
  description:
    "The leading community, coaching, and training platform for pharma and healthcare marketing professionals. Learn digital marketing strategies from 20+ years of industry experience.",
  keywords: [
    "pharma marketing",
    "healthcare digital marketing",
    "pharma coaching",
    "pharmaceutical marketing training",
    "healthcare marketing community",
    "pharma career growth",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pharmagrowth.co",
    siteName: "PharmaGrowth",
    title: "PharmaGrowth | Master Pharma Marketing. Accelerate Your Career.",
    description:
      "The leading community, coaching, and training platform for pharma and healthcare marketing professionals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PharmaGrowth | Master Pharma Marketing",
    description:
      "Community, coaching, and training for pharma marketing professionals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="l8zsQRZY8DMoLK6MFGuCyg"
          async
        />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HQJ3CK6Z3C" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HQJ3CK6Z3C');
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
