import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { site } from "@/lib/site";
import "./globals.css";

/** Editorial typography (Stitch design): Manrope for everything. */
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "IFA Connect | Independent Financial Advice, Matched by a Person",
    template: "%s | IFA Connect",
  },
  description:
    "Speak to a real person, usually within the hour, and get introduced to a hand-picked, FCA-regulated independent adviser. Free, no obligation. For £250k+ portfolios.",
  openGraph: { siteName: site.name, locale: "en_GB", type: "website" },
  twitter: { card: "summary_large_image" },
  // Staging: keep noindex until launch + s21 sign-off (compliance brief)
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf6", // cream — light theme
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={manrope.variable}>
      <body>
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
