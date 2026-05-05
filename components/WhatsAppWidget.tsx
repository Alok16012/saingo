"use client";
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { BRAND } from "@/lib/data";

const QUICK_MESSAGES = [
  { text: "I need NGO registration help", label: "NGO Registration" },
  { text: "What documents are required?", label: "Document Query" },
  { text: "I want a free consultation", label: "Free Consultation" },
  { text: "Please call me back", label: "Callback Request" },
];

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="bg-white rounded-2xl shadow-2xl w-72 overflow-hidden border border-green-100 animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3" style={{ background: "#25d366" }}>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center font-black text-green-600 text-sm">
                d
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Sai NGO Consultancy</p>
                <p className="text-green-100 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-200 inline-block"></span>
                  Online — typically replies in 5 min
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white hover:text-green-200">
              <X size={18} />
            </button>
          </div>

          {/* Chat bubble */}
          <div className="p-4 bg-green-50">
            <div className="bg-white rounded-xl p-3 shadow-sm max-w-xs text-sm text-gray-700 leading-relaxed">
              👋 Hi! Welcome to <strong>Sai NGO &amp; Business Consultancy®️</strong>.<br /><br />
              How can we help you today? Select a quick reply or start typing.
            </div>
          </div>

          {/* Quick messages */}
          <div className="px-4 pb-4 bg-green-50 space-y-2">
            {QUICK_MESSAGES.map((msg) => (
              <a
                key={msg.text}
                href={`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg.text)}`}
                target="_blank"
                rel="noreferrer"
                className="block text-sm text-green-800 font-medium bg-white px-3 py-2 rounded-lg border border-green-200 hover:bg-green-100 transition-colors"
              >
                {msg.label}
              </a>
            ))}
          </div>

          {/* Custom message */}
          <div className="px-4 py-3 bg-white border-t border-gray-100">
            <a
              href={`https://wa.me/${BRAND.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-white font-semibold text-sm"
              style={{ background: "#25d366" }}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl whatsapp-pulse transition-transform hover:scale-110"
        style={{ background: "#25d366" }}
        aria-label="Open WhatsApp chat"
      >
        {open ? <X size={24} /> : <MessageCircle size={26} fill="white" />}
      </button>
    </div>
  );
}
