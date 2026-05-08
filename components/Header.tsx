"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MEGA_NAV, BRAND } from "@/lib/data";
import { Menu, X, ChevronDown, Phone, ArrowRight } from "lucide-react";

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
    closeTimer.current = setTimeout(() => setActiveMenu(null), 150);
  };
  const stayOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      {/* ── Top Bar ─────────────────────────────────────────────────── */}
      <div className="trust-bar hidden md:flex items-center h-8">
        <div className="max-w-[1400px] mx-auto px-6 w-full flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span>🏆 Govt. Trademark Registered</span>
            <span>✅ 5,000+ Clients</span>
            <span>⭐ 4.9/5 Google Rating</span>
            <span>🔒 ISO Certified</span>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1 hover:text-amber-300 transition-colors font-medium">
              <Phone size={11} /> {BRAND.phone}
            </a>
            <a href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-green-300 transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Header ─────────────────────────────────────────────── */}
      <header className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-gray-200"}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[66px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 mr-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-2xl"
              style={{ background: "linear-gradient(135deg, #0A346C, #1254a8)" }}
            >
              d
            </div>
            <div className="leading-none">
              <span className="font-black text-[22px] tracking-tight" style={{ color: "#0A346C" }}>
                dlegal<span style={{ color: "#ED931A" }}>tech</span>
              </span>
              <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase mt-0.5">
                India&apos;s Legal Platform
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ─────────────────────────────────────────── */}
          <nav className="hidden xl:flex items-center gap-0 flex-1">
            {MEGA_NAV.map((item) => (
              <div
                key={item.label}
                className="relative flex items-center"
                onMouseEnter={() => openMenu(item.label)}
                onMouseLeave={closeMenu}
              >
                <button
                  className={`flex items-center gap-[3px] px-[10px] py-[22px] text-[13.5px] font-semibold leading-none whitespace-nowrap transition-all border-b-2 ${
                    activeMenu === item.label
                      ? "text-[#0A346C] border-[#ED931A]"
                      : "text-gray-700 border-transparent hover:text-[#0A346C] hover:border-[#ED931A]/50"
                  }`}
                >
                  {item.navLabel}
                  <ChevronDown
                    size={12}
                    strokeWidth={2.5}
                    className={`text-gray-400 transition-transform duration-200 ${activeMenu === item.label ? "rotate-180 text-[#0A346C]" : ""}`}
                  />
                </button>

                {/* ── Mega Dropdown ─────────────────────────────── */}
                {activeMenu === item.label && (
                  <div
                    className="absolute top-full left-0 mt-0 w-[700px] bg-white rounded-b-2xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    onMouseEnter={stayOpen}
                    onMouseLeave={closeMenu}
                  >
                    <div className="flex">
                      {/* Service grid */}
                      <div className="flex-1 p-6 grid grid-cols-2 gap-x-8">
                        {item.groups.map((group, gi) => (
                          <div key={group.title}>
                            <p className="text-[10px] font-black uppercase tracking-[0.12em] text-gray-400 mb-2.5" style={{ marginTop: gi > 0 ? "0" : "0" }}>
                              {group.title}
                            </p>
                            <ul className="space-y-[1px]">
                              {group.items.map((service) => (
                                <li key={service.href + service.label}>
                                  <Link
                                    href={service.href}
                                    className="flex items-center justify-between px-2.5 py-2 rounded-lg text-[13px] text-gray-700 hover:bg-blue-50 hover:text-[#0A346C] transition-colors"
                                    onClick={() => setActiveMenu(null)}
                                  >
                                    <span className="flex items-center gap-2.5">
                                      <span className="text-[15px] w-5 text-center leading-none">{service.icon}</span>
                                      <span>{service.label}</span>
                                    </span>
                                    {service.badge && (
                                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 ml-2 shrink-0">
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

                      {/* Featured panel */}
                      <div
                        className="w-52 p-5 flex flex-col justify-between shrink-0"
                        style={{ background: "linear-gradient(160deg, #0A346C 0%, #1254a8 100%)" }}
                      >
                        <div>
                          <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Featured</span>
                          <h4 className="text-white font-bold text-[15px] mt-2 leading-snug">{item.featured.title}</h4>
                          <p className="text-blue-200 text-[11px] mt-2 leading-relaxed">{item.featured.desc}</p>
                        </div>
                        <div className="mt-5">
                          <p className="text-amber-400 font-black text-[13px] mb-3">{item.featured.stat}</p>
                          <Link
                            href={item.featured.href}
                            className="flex items-center justify-center gap-1.5 bg-[#ED931A] hover:bg-amber-400 text-white text-[12px] font-bold px-4 py-2.5 rounded-lg transition-colors w-full"
                            onClick={() => setActiveMenu(null)}
                          >
                            Get Started <ArrowRight size={11} />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 border-t border-gray-100 px-6 py-2.5 flex items-center justify-between">
                      <span className="text-[11px] text-gray-400">Free expert consultation on every service</span>
                      <Link
                        href={item.href}
                        className="text-[11px] font-semibold text-[#0A346C] hover:text-blue-900 flex items-center gap-1"
                        onClick={() => setActiveMenu(null)}
                      >
                        View all <ArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Static links */}
            {[
              { label: "Blog", href: "/blog" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-[10px] py-[22px] text-[13.5px] font-semibold whitespace-nowrap text-gray-700 hover:text-[#0A346C] border-b-2 border-transparent hover:border-[#ED931A]/50 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Desktop Right CTA ───────────────────────────────────── */}
          <div className="hidden xl:flex items-center gap-3 ml-4 shrink-0">
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-1.5 text-[13px] font-semibold text-gray-600 hover:text-[#0A346C] transition-colors whitespace-nowrap"
            >
              <Phone size={14} className="text-[#0A346C]" />
              {BRAND.phone}
            </a>
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20dlegaltech%2C%20I%20need%20free%20consultation`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[13px] font-semibold text-white px-4 py-2 rounded-lg whitespace-nowrap transition-colors"
              style={{ background: "#ED931A" }}
            >
              Free Consultation
            </a>
          </div>

          {/* ── Mobile toggle ───────────────────────────────────────── */}
          <button
            className="xl:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors ml-auto"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Nav ──────────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="xl:hidden fixed inset-0 top-[66px] z-50 bg-white overflow-y-auto">
          <div className="p-4 border-b border-gray-100 flex gap-3">
            <a href={`tel:${BRAND.phone}`} className="flex-1 flex items-center justify-center gap-2 bg-[#0A346C] text-white text-sm font-semibold rounded-xl py-3">
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
                  <ChevronDown size={16} className={`text-gray-400 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                </button>

                {mobileExpanded === item.label && (
                  <div className="bg-gray-50 px-4 pb-4">
                    {item.groups.map((group) => (
                      <div key={group.title}>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 mt-3">{group.title}</p>
                        {group.items.map((service) => (
                          <Link
                            key={service.href + service.label}
                            href={service.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-blue-50"
                            onClick={() => setMobileOpen(false)}
                          >
                            <span className="text-base">{service.icon}</span>
                            {service.label}
                            {service.badge && (
                              <span className="ml-auto text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700">{service.badge}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {[
              { label: "📝 Blog", href: "/blog" },
              { label: "📍 Locations", href: "/locations" },
              { label: "ℹ️ About Us", href: "/about" },
              { label: "📞 Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center px-4 py-4 text-sm font-semibold text-gray-800 hover:bg-gray-50" onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="p-4 border-t border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-400 text-center">dlegaltech · India&apos;s Most Trusted Legal Platform</p>
          </div>
        </div>
      )}
    </>
  );
}
