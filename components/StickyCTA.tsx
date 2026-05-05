"use client";
import { Phone, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/data";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 px-4 py-3 flex gap-3 shadow-lg">
      <a
        href={`tel:${BRAND.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm"
        style={{ background: "var(--primary)" }}
      >
        <Phone size={16} fill="white" />
        Call Now
      </a>
      <a
        href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20need%20help`}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold text-sm"
        style={{ background: "#25d366" }}
      >
        <MessageCircle size={16} fill="white" />
        WhatsApp
      </a>
    </div>
  );
}
