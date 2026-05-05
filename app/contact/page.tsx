"use client";
import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { BRAND, LOCATIONS } from "@/lib/data";
import LeadForm from "@/components/LeadForm";

export default function ContactPage() {
  return (
    <main className="pb-16 md:pb-0">
      {/* Hero */}
      <div className="hero-gradient text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-3">Contact Us</h1>
          <p className="text-blue-100 text-base">Get expert guidance for NGO registration, business incorporation, and legal compliance. Free consultation available.</p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-800">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">Contact</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-5">
          {/* Quick Contact Buttons */}
          <div className="space-y-3">
            <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20need%20legal%20consultancy`} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl text-white" style={{ background: "#25d366" }}>
              <MessageCircle size={24} fill="white" />
              <div>
                <p className="font-bold">WhatsApp — Fastest</p>
                <p className="text-xs opacity-80">Avg reply in 5 minutes</p>
              </div>
            </a>
            <a href={`tel:${BRAND.phone}`} className="flex items-center gap-4 p-4 rounded-xl text-white" style={{ background: "var(--primary)" }}>
              <Phone size={24} fill="white" />
              <div>
                <p className="font-bold">Call Us Directly</p>
                <p className="text-xs opacity-80">{BRAND.phone}</p>
              </div>
            </a>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-4 p-4 rounded-xl bg-gray-800 text-white">
              <Mail size={24} />
              <div>
                <p className="font-bold">Email Us</p>
                <p className="text-xs opacity-80">{BRAND.email}</p>
              </div>
            </a>
          </div>

          {/* Office Details */}
          <div className="card p-5">
            <h3 className="font-bold text-gray-900 mb-4">Head Office — Ranchi</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-700 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">Lalpur, Ranchi, Jharkhand - 834001</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-700 flex-shrink-0" />
                <div>
                  <p className="text-gray-700">Mon–Sat: 9:00 AM – 6:00 PM</p>
                  <p className="text-xs text-gray-400">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-4 h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
              <div className="text-center">
                <MapPin size={32} className="mx-auto mb-1 text-gray-300" />
                <p>Google Map</p>
                <p className="text-xs">Ranchi, Jharkhand</p>
              </div>
            </div>
          </div>

          {/* Other Offices */}
          <div className="card p-5">
            <h3 className="font-bold text-gray-900 mb-3">Other Locations</h3>
            <div className="space-y-2">
              {LOCATIONS.slice(0, 5).map((loc) => (
                <Link key={loc.slug} href={`/locations/${loc.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-800 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                  <span>📍</span>
                  {loc.city}, {loc.state}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-black text-gray-900 mb-1">Send a Message</h2>
            <p className="text-sm text-gray-500 mb-6">We&apos;ll respond within 15 minutes during business hours.</p>
            <LeadForm variant="full" />
          </div>

          {/* Trust Section */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "🔒", text: "Secure & Confidential" },
              { icon: "⚡", text: "15-min Response" },
              { icon: "✅", text: "Free Consultation" },
              { icon: "⭐", text: "4.9/5 Rating" },
            ].map((t) => (
              <div key={t.text} className="text-center p-3 bg-gray-50 rounded-xl text-sm">
                <div className="text-2xl mb-1">{t.icon}</div>
                <p className="text-gray-600 text-xs font-medium">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
