import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Sai NGO & Business Consultancy®️ — India's Most Trusted Legal Platform",
    template: "%s | Sai NGO & Business Consultancy®️",
  },
  description: "Expert NGO registration, Trust, Society, Section 8, FCRA, 12A/80G, Company & Trademark Registration. Free consultation by Advocate P.R. Pandey. 5000+ clients, 4.9★ rating.",
  keywords: ["NGO registration", "Sai NGO Consultancy", "Trust registration India", "Section 8 company", "FCRA registration", "12A 80G registration", "company registration India", "trademark registration"],
  authors: [{ name: "Advocate P.R. Pandey", url: "https://www.dlegaltech.com" }],
  creator: "Sai NGO & Business Consultancy®️",
  metadataBase: new URL("https://www.dlegaltech.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.dlegaltech.com",
    siteName: "Sai NGO & Business Consultancy®️",
    title: "Sai NGO & Business Consultancy®️ — India's Most Trusted Legal Consultancy",
    description: "Expert NGO & Business registration. 5000+ clients. Free consultation.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@dlegaltech",
    creator: "@dlegaltech",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "dlegaltech — Sai NGO & Business Consultancy®️",
              url: "https://www.dlegaltech.com",
              logo: "https://www.dlegaltech.com/logo.png",
              founder: { "@type": "Person", name: "Advocate P.R. Pandey" },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8603456708",
                contactType: "customer service",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: ["https://www.ngotrust.in"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ranchi",
                addressRegion: "Jharkhand",
                postalCode: "834001",
                addressCountry: "IN",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppWidget />
        <StickyCTA />
      </body>
    </html>
  );
}
