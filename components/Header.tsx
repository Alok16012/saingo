"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MEGA_NAV, BRAND } from "@/lib/data";
import { Menu, X, ChevronDown, Phone, Search, ArrowRight } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(label);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), 120);
  };
  const stayOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      {/* ── Top Bar ─────────────────────────────────────────────────── */}
      <div className="trust-bar hidden md:flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full flex items-center justify-between text-xs">
          <div className="flex items-center gap-5 overflow-hidden">
            <span className="flex items-center gap-1.5">🏆 Govt. Trademark Registered</span>
            <span className="flex items-center gap-1.5">✅ 5,000+ Clients</span>
            <span className="flex items-center gap-1.5">⭐ 4.9/5 Google Rating (700+ Reviews)</span>
            <span className="flex items-center gap-1.5">🔒 ISO Certified</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-medium">
              <Phone size={11} />
              {BRAND.phone}
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20dlegaltech%2C%20I%20need%20legal%20assistance`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-green-300 transition-colors"
            >
              <span>💬</span> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Header ─────────────────────────────────────────────── */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-lg" : "shadow-sm border-b border-gray-100"}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[60px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-xl tracking-tight"
              style={{ background: "linear-gradient(135deg, var(--primary), var(--primary-light))" }}
            >
              d
            </div>
            <div className="leading-none">
              <span className="font-black text-xl tracking-tight" style={{ color: "var(--primary)" }}>
                dlegal<span style={{ color: "var(--accent)" }}>tech</span>
              </span>
              <p className="text-[10px] text-gray-400 font-medium mt-0.5 tracking-wide hidden sm:block">
                INDIA&apos;S LEGAL PLATFORM
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center h-full">
            {MEGA_NAV.map((item) => (
              <div
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={closeMenu}
              >
                <button
                  className={`flex items-center gap-0.5 px-2.5 h-full text-[13px] font-semibold whitespace-nowrap transition-colors border-b-2 ${
                    activeMenu === item.label
                      ? "text-blue-900 border-amber-500"
                      : "text-gray-700 border-transparent hover:text-blue-900 hover:border-amber-300"
                  }`}
                >
                  {item.navLabel}
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${activeMenu === item.label ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mega Dropdown */}
                {activeMenu === item.label && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-[720px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    onMouseEnter={stayOpen}
                    onMouseLeave={closeMenu}
                  >
                    <div className="flex">
                      {/* Service Groups */}
                      <div className="flex-1 p-5 grid grid-cols-2 gap-x-6 gap-y-1">
                        {item.groups.map((group) => (
                          <div key={group.title}>
                            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 mt-3 first:mt-0">
                              {group.title}
                            </p>
                            <ul className="space-y-0.5">
                              {group.items.map((service) => (
                                <li key={service.href + service.label}>
                                  <Link
                                    href={service.href}
                                    className="flex items-center justify-between px-2 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors group"
                                    onClick={() => setActiveMenu(null)}
                                  >
                                    <span className="flex items-center gap-2">
                                      <span className="text-base w-5 text-center">{service.icon}</span>
                                      {service.label}
                                    </span>
                                    {service.badge && (
                                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 shrink-0">
                                        {service.badge}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      {/* Featured Panel */}
                      <div
                        className="w-56 p-5 flex flex-col justify-between shrink-0"
                        style={{ background: "linear-gradient(160deg, #0A346C 0%, #1254a8 100%)" }}
                      >
                        <div>
                          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Featured</span>
                          <h4 className="text-white font-bold text-base mt-2 leading-snug">{item.featured.title}</h4>
                          <p className="text-blue-200 text-xs mt-2 leading-relaxed">{item.featured.desc}</p>
                        </div>
                        <div className="mt-4">
                          <div className="text-amber-400 font-black text-sm mb-3">{item.featured.stat}</div>
                          <Link
                            href={item.featured.href}
                            className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                            onClick={() => setActiveMenu(null)}
                          >
                            Get Started <ArrowRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="bg-gray-50 border-t border-gray-100 px-5 py-2.5 flex items-center justify-between">
                      <span className="text-xs text-gray-500">Free expert consultation on every service</span>
                      <Link
                        href={item.href}
                        className="text-xs font-semibold text-blue-800 hover:text-blue-900 flex items-center gap-1"
                        onClick={() => setActiveMenu(null)}
                      >
                        View all <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Static nav links */}
            {[
              { label: "Blog", href: "/blog" },
              { label: "Locations", href: "/locations" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-2.5 h-full flex items-center text-[13px] font-semibold whitespace-nowrap text-gray-700 hover:text-blue-900 border-b-2 border-transparent hover:border-amber-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a href={`tel:${BRAND.phone}`} className="text-[13px] font-semibold text-gray-600 hover:text-blue-900 flex items-center gap-1.5 whitespace-nowrap xl:flex hidden">
              <Phone size={13} />
              {BRAND.phone}
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20dlegaltech%2C%20I%20need%20free%20consultation`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-[13px] py-2 px-4 whitespace-nowrap"
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── Mobile Nav ───────────────────────────────────────────── */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] z-50 bg-white overflow-y-auto">
            {/* Mobile quick actions */}
            <div className="p-4 border-b border-gray-100 flex gap-3">
              <a
                href={`tel:${BRAND.phone}`}
                className="flex-1 flex items-center justify-center gap-2 bg-blue-900 text-white text-sm font-semibold rounded-xl py-3"
              >
                <Phone size={15} /> Call Now
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold rounded-xl py-3 border-2"
                style={{ borderColor: "#25d366", color: "#25d366" }}
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Mobile menu categories */}
            <div className="divide-y divide-gray-100">
              {MEGA_NAV.map((item) => (
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-4 text-sm font-semibold text-gray-900"
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  >
                    <span className="flex items-center gap-2">
                      <span>{item.icon}</span>
                      {item.label}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-gray-400 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                    />
                  </button>

                  {mobileExpanded === item.label && (
                    <div className="bg-gray-50 px-4 pb-4">
                      {item.groups.map((group) => (
                        <div key={group.title} className="mb-3">
                          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 mt-3">
                            {group.title}
                          </p>
                          <div className="grid grid-cols-1 gap-0.5">
                            {group.items.map((service) => (
                              <Link
                                key={service.href + service.label}
                                href={service.href}
                                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 active:bg-blue-100"
                                onClick={() => setMobileOpen(false)}
                              >
                                <span className="text-base w-6 text-center">{service.icon}</span>
                                <span className="flex-1">{service.label}</span>
                                {service.badge && (
                                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700">
                                    {service.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Static links */}
              {[
                { label: "📝 Blog", href: "/blog" },
                { label: "📍 Locations", href: "/locations" },
                { label: "ℹ️ About Us", href: "/about" },
                { label: "📞 Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center px-4 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile footer */}
            <div className="p-4 border-t border-gray-100 bg-gray-50">
              <p className="text-xs text-gray-400 text-center">India&apos;s Most Trusted Legal Platform · 5,000+ Clients</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
