import Link from "next/link";
import { BRAND, SERVICES, LOCATIONS } from "@/lib/data";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  const serviceLinks = SERVICES.slice(0, 6);
  const locationLinks = LOCATIONS.slice(0, 5);

  return (
    <footer>
      {/* CTA Banner */}
      <div className="hero-gradient text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Your Legal Journey?</h2>
          <p className="text-blue-200 mb-6 text-base">Get expert guidance from Advocate P.R. Pandey. Free consultation for all services.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20need%20free%20consultation`} target="_blank" rel="noreferrer" className="btn-primary">
              💬 WhatsApp Consultation
            </a>
            <a href={`tel:${BRAND.phone}`} className="btn-white">
              📞 {BRAND.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Footer Main */}
      <div className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-lg bg-blue-700">
                S
              </div>
              <div>
                <span className="font-black text-base leading-tight text-white">
                  Sai NGO &amp; Business<span style={{ color: "var(--accent)" }}> Consultancy</span>®️
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              India&apos;s most trusted digital legal consultancy platform. Expert guidance for NGO registration, business incorporation, and legal compliance.
            </p>
            <div className="space-y-2 text-sm">
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone size={14} className="text-amber-500" />
                {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail size={14} className="text-amber-500" />
                {BRAND.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-amber-500 mt-0.5 shrink-0" />
                <span>Lalpur, Ranchi, Jharkhand - 834001</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-1">
                    <span className="text-xs">›</span>
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Service Locations</h3>
            <ul className="space-y-2">
              {locationLinks.map((loc) => (
                <li key={loc.slug}>
                  <Link href={`/locations/${loc.slug}`} className="text-sm text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-1">
                    <span className="text-xs">›</span>
                    {loc.city}, {loc.stateCode}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="text-sm text-amber-500 hover:text-amber-400 transition-colors">
                  All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Blog & Resources", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
                { label: "Client Dashboard", href: "/dashboard" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Refund Policy", href: "/refund-policy" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-1">
                    <span className="text-xs">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="mt-5">
              <h4 className="text-white font-semibold mb-3 text-sm">Follow Us</h4>
              <div className="flex gap-3">
                {["Facebook", "Twitter", "LinkedIn", "YouTube"].map((social) => (
                  <a key={social} href="#" className="w-8 h-8 rounded-full bg-gray-700 hover:bg-blue-700 flex items-center justify-center text-xs transition-colors" title={social}>
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-5 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <div className="text-center md:text-left">
              <p>© {new Date().getFullYear()} <strong className="text-gray-300">Sai NGO &amp; Business Consultancy®️</strong></p>
              <p className="mt-1">Legal services supervised by <strong className="text-gray-300">Advocate P.R. Pandey</strong> (Bar Council of India Registered)</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span>🔒</span> SSL Secured
              </span>
              <span className="flex items-center gap-1">
                <span>®️</span> Trademarked
              </span>
              <span className="flex items-center gap-1">
                <span>📋</span> ISO Certified
              </span>
            </div>
          </div>
          <p className="max-w-7xl mx-auto mt-3 text-xs text-gray-600">
            <strong>Disclaimer:</strong> dlegaltech provides legal information and filing assistance services. Processing timelines are indicative and subject to government approval. All legal services are supervised by qualified advocates registered with the Bar Council of India.
          </p>
        </div>
      </div>
    </footer>
  );
}
