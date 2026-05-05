import Link from "next/link";
import { LOCATIONS, SERVICES } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Locations — NGO Registration Across India",
  description: "dlegaltech provides NGO and business registration services across India. Ranchi, Prayagraj, Pune, Patna, Delhi, Mumbai and more.",
};

export default function LocationsPage() {
  return (
    <main className="pb-16 md:pb-0">
      <div className="hero-gradient text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-3">We Serve Across India</h1>
          <p className="text-blue-100 text-base">Expert NGO and business registration services in all major Indian cities. Local knowledge, national expertise.</p>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-800">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">Locations</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="card p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">📍</div>
                <div className="flex-1">
                  <h2 className="text-xl font-black text-gray-900 group-hover:text-blue-800 transition-colors">
                    {loc.city}
                  </h2>
                  <p className="text-sm text-gray-500 mb-3">{loc.state}</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{loc.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.slice(0, 3).map((s) => (
                      <span key={s.slug} className="badge badge-primary">{s.name}</span>
                    ))}
                    <span className="badge badge-accent">+5 more</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                <span className="text-gray-500">{loc.phone}</span>
                <span className="text-blue-700 font-semibold group-hover:text-amber-600 transition-colors">View Details →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
