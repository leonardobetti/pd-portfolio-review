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

export const metadata: Metadata = {
  title: "Product Designer Portfolio Review",
  description:
    "A skill that reviews UX, UI and product design portfolios the way a hiring reviewer would, then scores what to fix.",
  metadataBase: new URL("https://pd-portfolio-review.vercel.app"),
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Product Designer Portfolio Review",
    description:
      "Install the skill, paste a portfolio URL, get a scored hiring-style report.",
    url: "https://pd-portfolio-review.vercel.app",
    siteName: "Product Designer Portfolio Review",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Designer Portfolio Review",
    description:
      "Install the skill, paste a portfolio URL, get a scored hiring-style report.",
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
