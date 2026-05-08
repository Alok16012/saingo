import Link from "next/link";
import { BRAND, SERVICES, LOCATIONS, MEGA_NAV } from "@/lib/data";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const ngoServices = SERVICES.filter((s) => s.category === "ngo").slice(0, 5);
  const businessServices = SERVICES.filter((s) => s.category === "business").slice(0, 5);
  const taxServices = SERVICES.filter((s) => s.category === "tax").slice(0, 4);
  const ipServices = SERVICES.filter((s) => s.category === "ip").slice(0, 4);

  return (
    <footer>
      {/* CTA Banner */}
      <div className="hero-gradient text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Start Your Legal Journey Today</h2>
          <p className="text-blue-200 mb-6 text-base">Free expert consultation. Transparent pricing. 100% online. Fast turnaround.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20dlegaltech%2C%20I%20need%20free%20consultation`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
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
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-xl"
                style={{ background: "linear-gradient(135deg, #1254a8, #0A346C)" }}
              >
                d
              </div>
              <span className="font-black text-xl text-white tracking-tight">
                dlegal<span style={{ color: "var(--accent)" }}>tech</span>
              </span>
            </Link>

            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              India&apos;s most trusted digital legal consultancy platform for NGO registration, business incorporation, and legal compliance services.
            </p>

            <div className="space-y-2.5 text-sm">
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone size={13} className="text-amber-500 shrink-0" />
                {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail size={13} className="text-amber-500 shrink-0" />
                {BRAND.email}
              </a>
              <div className="flex items-start gap-2 text-gray-400">
                <MapPin size={13} className="text-amber-500 mt-0.5 shrink-0" />
                <span>Lalpur, Ranchi, Jharkhand - 834001</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2 mt-5">
              {["f", "in", "yt", "tw"].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-700 hover:bg-blue-700 flex items-center justify-center text-xs font-bold transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* NGO Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">NGO Services</h3>
            <ul className="space-y-2">
              {ngoServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-xs text-gray-600">›</span>
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services#ngo" className="text-sm text-amber-500 hover:text-amber-400 transition-colors">
                  All NGO Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Business Registration */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Start a Business</h3>
            <ul className="space-y-2">
              {businessServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-xs text-gray-600">›</span>
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services#business" className="text-sm text-amber-500 hover:text-amber-400 transition-colors">
                  All Business Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Tax & IP */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Tax & Trademark</h3>
            <ul className="space-y-2">
              {taxServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-xs text-gray-600">›</span>
                    {s.name}
                  </Link>
                </li>
              ))}
              {ipServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-xs text-gray-600">›</span>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Locations */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-2 mb-5">
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
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span className="text-xs text-gray-600">›</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">Cities We Serve</h3>
            <div className="flex flex-wrap gap-1.5">
              {LOCATIONS.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="text-xs text-gray-400 hover:text-amber-400 border border-gray-700 hover:border-amber-600 px-2 py-0.5 rounded-full transition-colors"
                >
                  {loc.city}
                </Link>
              ))}
              <Link href="/locations" className="text-xs text-amber-500 border border-amber-800 px-2 py-0.5 rounded-full hover:border-amber-500 transition-colors">
                +All India
              </Link>
            </div>
          </div>
        </div>

        {/* Services Tags Row */}
        <div className="border-t border-gray-800 py-4 px-4">
          <div className="max-w-7xl mx-auto">
            <p className="text-xs text-gray-600 mb-2 font-semibold uppercase tracking-wide">All Services:</p>
            <div className="flex flex-wrap gap-1.5">
              {MEGA_NAV.flatMap((cat) =>
                cat.groups[0].items.slice(0, 3).map((item) => (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))
              ).map((el, i, arr) => (
                <span key={i} className="flex items-center gap-1.5">
                  {el}
                  {i < arr.length - 1 && <span className="text-gray-700">·</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-5 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <div className="text-center md:text-left">
              <p>© {new Date().getFullYear()} <strong className="text-gray-300">dlegaltech</strong> — India&apos;s Most Trusted Legal Platform</p>
              <p className="mt-1 text-gray-600">All legal services supervised by registered advocates | Bar Council of India compliant</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">🔒 SSL Secured</span>
              <span className="flex items-center gap-1">®️ Trademarked</span>
              <span className="flex items-center gap-1">📋 ISO Certified</span>
            </div>
          </div>
          <p className="max-w-7xl mx-auto mt-3 text-xs text-gray-600 leading-relaxed">
            <strong>Disclaimer:</strong> dlegaltech provides legal information and document filing assistance services. Processing timelines are indicative and subject to government approval. All legal services are supervised by qualified advocates registered with the Bar Council of India. dlegaltech is not a law firm and does not provide legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
