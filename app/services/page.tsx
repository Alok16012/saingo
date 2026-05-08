import Link from "next/link";
import { SERVICES, MEGA_NAV } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Legal Services — NGO, Business, Tax & Trademark | dlegaltech",
  description: "Browse all 26+ legal services: NGO registration, Section 8 Company, FCRA, 12A/80G, GST, Trademark, Company registration & more. Starting from ₹999.",
};

export default function ServicesPage() {
  return (
    <main className="pb-16 md:pb-0">
      {/* Hero */}
      <div className="hero-gradient text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="badge mb-3" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>26+ Services</span>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Complete Legal Services for Every Need</h1>
          <p className="text-blue-100 text-base mb-6">NGO registration, business incorporation, trademark protection &amp; more — all under one roof with expert guidance.</p>
          <div className="pills-scroll md:flex md:flex-wrap md:justify-center md:gap-2 px-0">
            {MEGA_NAV.map((cat) => (
              <Link key={cat.label} href={`#${cat.href.replace("/services#", "").replace("/services/", "").replace("#", "")}`} className="btn-white text-sm py-2 px-4 whitespace-nowrap" style={{ flexShrink: 0 }}>
                <span>{cat.icon}</span> {cat.label}
              </Link>
            ))}
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

      <div className="max-w-7xl mx-auto px-4 py-10">
        {MEGA_NAV.map((cat) => {
          const catServices = SERVICES.filter((s) => {
            const catId = cat.href.replace("/services#", "").replace("#", "");
            return s.category === catId;
          });
          if (catServices.length === 0) return null;
          return (
            <div key={cat.label} id={cat.href.replace("/services#", "").replace("#", "")} className="mb-14 scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl md:text-2xl font-black" style={{ color: "var(--primary)" }}>{cat.label}</h2>
                <div className="flex-1 h-px bg-gray-200 hidden md:block"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
                {catServices.map((service) => (
                  <ServiceCard key={service.slug} service={service} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-3">Not Sure Which Service You Need?</h2>
          <p className="text-gray-600 mb-5">Our expert consultants will help you choose the right service based on your specific requirements — completely free.</p>
          <a href={`https://wa.me/918603456708?text=Hi%20I%20need%20help%20choosing%20the%20right%20service`} target="_blank" rel="noreferrer" className="btn-primary text-base px-6">
            💬 Get Free Guidance on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
