import Link from "next/link";
import { SERVICES } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Services — NGO, Business & Legal Registration",
  description: "Browse all legal services: NGO registration, Section 8 Company, FCRA, 12A/80G, GST, Trademark, Company registration & CSR Funding. Starting from ₹1,499.",
};

export default function ServicesPage() {
  const categories = [
    { label: "NGO Services", services: SERVICES.filter((s) => ["ngo-registration", "12a-80g-registration", "section-8-company", "fcra-registration", "csr-funding"].includes(s.slug)) },
    { label: "Business Services", services: SERVICES.filter((s) => ["gst-registration", "trademark-registration", "company-registration"].includes(s.slug)) },
  ];

  return (
    <main className="pb-16 md:pb-0">
      {/* Hero */}
      <div className="hero-gradient text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge mb-3" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>Our Services</span>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Complete Legal Services for Every Need</h1>
          <p className="text-blue-100 text-base mb-6">NGO registration, business incorporation, trademark protection &amp; more — all under one roof with expert guidance.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="#ngo" className="btn-white text-sm py-2 px-4">NGO Services</Link>
            <Link href="#business" className="btn-white text-sm py-2 px-4">Business Services</Link>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-800">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">Services</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {categories.map((cat, ci) => (
          <div key={cat.label} id={ci === 0 ? "ngo" : "business"} className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl font-black" style={{ color: "var(--primary)" }}>{cat.label}</h2>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {cat.services.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Not Sure Which Service You Need?</h2>
          <p className="text-gray-600 mb-5">Our expert consultants will help you choose the right service based on your specific requirements — completely free.</p>
          <a href="https://wa.me/918603456708?text=Hi%20I%20need%20help%20choosing%20the%20right%20service" target="_blank" rel="noreferrer" className="btn-primary text-base px-6">
            💬 Get Free Guidance on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
