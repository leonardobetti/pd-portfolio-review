import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  axes: ["opsz"],
});

const SITE_URL = "https://pd-portfolio-review.vercel.app";
const OG_IMAGE = {
  url: `${SITE_URL}/og.jpg`,
  width: 1200,
  height: 630,
  alt: "Product Designer Portfolio Review: a scored report on your portfolio from a hiring reviewer's point of view",
  type: "image/jpeg",
} as const;

export const metadata: Metadata = {
  title: "Product Designer Portfolio Review",
  description:
    "An AI skill that reviews UX, UI and product design portfolios the way a hiring reviewer would. Based on the State of UX Portfolios 2026 report, it scores the site out of 100 and lists what to fix first.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Product Designer Portfolio Review",
    description:
      "Install the skill and paste a portfolio URL. Get a report scored out of 100, with strengths, mistakes and up to five fixes.",
    url: SITE_URL,
    siteName: "Product Designer Portfolio Review",
    locale: "en_GB",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Designer Portfolio Review",
    description:
      "Install the skill and paste a portfolio URL. Get a report scored out of 100, with strengths, mistakes and up to five fixes.",
    images: [OG_IMAGE.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
