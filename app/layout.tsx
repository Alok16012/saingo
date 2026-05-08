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
    default: "dlegaltech — India's Most Trusted Digital Legal Consultancy Platform",
    template: "%s | dlegaltech",
  },
  description: "Expert NGO registration, Trust, Society, Section 8, FCRA, 12A/80G, Company & Trademark Registration online in India. Free consultation. 5000+ clients, 4.9★ rating.",
  keywords: [
    "NGO registration India",
    "dlegaltech",
    "Trust registration",
    "Section 8 company",
    "FCRA registration",
    "12A 80G registration",
    "company registration India",
    "trademark registration",
    "GST registration",
    "legal services India",
  ],
  authors: [{ name: "dlegaltech Legal Team", url: "https://www.dlegaltech.com" }],
  creator: "dlegaltech",
  metadataBase: new URL("https://www.dlegaltech.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.dlegaltech.com",
    siteName: "dlegaltech",
    title: "dlegaltech — India's Most Trusted Digital Legal Consultancy Platform",
    description: "Expert NGO & Business registration services. 5000+ clients. Free consultation.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "dlegaltech" }],
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
              "@type": "ProfessionalService",
              name: "dlegaltech",
              url: "https://www.dlegaltech.com",
              logo: "https://www.dlegaltech.com/logo.png",
              description: "India's most trusted digital legal consultancy platform for NGO registration, business incorporation, and legal compliance.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-8603456708",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ranchi",
                addressRegion: "Jharkhand",
                postalCode: "834001",
                addressCountry: "IN",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "700",
                bestRating: "5",
              },
              sameAs: ["https://www.ngotrust.in"],
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
