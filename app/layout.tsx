import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/SiteChrome";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font" });

export const viewport: Viewport = {
  themeColor: "#14532d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "KhadMunshi: Fertilizer Shop Software | Kisan Khata, Bill, Stock",
    template: "%s | KhadMunshi",
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "fertilizer shop software in Pakistan",
    "pesticide shop billing software",
    "khad dukaan management software",
    "kisan udhaar khata app",
    "agri input dealer software",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_PK",
    url: SITE.url,
    title: "KhadMunshi: aapki dukaan ka digital munshi",
    description: SITE.description,
    images: [{ url: "/images/farmer-punjab.jpg", width: 1600, height: 1067, alt: "Punjab ka kisan" }],
  },
  twitter: { card: "summary_large_image", title: "KhadMunshi", description: SITE.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
