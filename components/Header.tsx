"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, BRAND } from "@/lib/data";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSub, setMobileOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Trust Bar */}
      <div className="trust-bar hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs">
          <div className="flex items-center gap-5 overflow-hidden">
            <span>🏆 Govt. Trademark Registered</span>
            <span>✅ 5,000+ Satisfied Clients</span>
            <span>⭐ 4.9/5 Google Rating (700+ Reviews)</span>
            <span>🔒 ISO Certified</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1 hover:text-amber-300 transition-colors">
              <Phone size={12} />
              <span>{BRAND.phone}</span>
            </a>
            <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-green-300 transition-colors">
              <span>💬 WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-black text-lg" style={{ background: "var(--primary)" }}>
              S
            </div>
            <div>
              <span className="font-black text-base leading-tight block" style={{ color: "var(--primary)" }}>
                Sai NGO &amp; Business<span style={{ color: "var(--accent)" }}> Consultancy</span>®️
              </span>
              <p className="text-xs text-gray-500 leading-none mt-0.5">Legal &amp; Compliance Services</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                {link.dropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {link.label}
                      <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === link.label && (
                      <div
                        className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-52 z-50"
                        onMouseEnter={() => setOpenDropdown(link.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${BRAND.phone}`} className="text-sm font-semibold text-gray-600 hover:text-blue-900 flex items-center gap-1">
              <Phone size={15} />
              {BRAND.phone}
            </a>
            <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20need%20legal%20consultancy`} target="_blank" rel="noreferrer" className="btn-primary text-sm py-2 px-4">
              Get Free Consultation
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-3 px-4 max-h-[80vh] overflow-y-auto">
            <div className="flex gap-3 mb-4">
              <a href={`tel:${BRAND.phone}`} className="btn-primary flex-1 justify-center text-sm py-2.5">
                📞 Call Now
              </a>
              <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold rounded-lg py-2.5 border-2" style={{ borderColor: "#25d366", color: "#25d366" }}>
                💬 WhatsApp
              </a>
            </div>
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="border-b border-gray-100 last:border-0">
                {link.dropdown ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 text-sm font-semibold text-gray-800"
                      onClick={() => setMobileOpenSub(mobileOpenSub === link.label ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDown size={15} className={`transition-transform ${mobileOpenSub === link.label ? "rotate-180" : ""}`} />
                    </button>
                    {mobileOpenSub === link.label && (
                      <div className="pb-2 pl-3">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block py-2 text-sm text-gray-600 hover:text-blue-900"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href} className="block py-3 text-sm font-semibold text-gray-800" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
