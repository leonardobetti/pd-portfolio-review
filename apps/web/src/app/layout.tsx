import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
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
  alt: "Product Designer Portfolio Review",
  type: "image/jpeg",
} as const;

export const metadata: Metadata = {
  title: "Product Designer Portfolio Review",
  description:
    "A skill that reviews UX, UI and product design portfolios the way a hiring reviewer would, then scores what to fix.",
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Product Designer Portfolio Review",
    description:
      "Install the skill, paste a portfolio URL, get a scored hiring-style report.",
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
      "Install the skill, paste a portfolio URL, get a scored hiring-style report.",
    images: [OG_IMAGE.url],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
