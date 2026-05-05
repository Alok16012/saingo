"use client";
import { useState } from "react";
import { SERVICES, BRAND } from "@/lib/data";
import { CheckCircle, Loader } from "lucide-react";

interface LeadFormProps {
  defaultService?: string;
  variant?: "full" | "compact";
  title?: string;
}

export default function LeadForm({ defaultService = "", variant = "full", title }: LeadFormProps) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: defaultService, message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = "Enter valid 10-digit mobile number";
    if (!form.service) e.service = "Please select a service";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <CheckCircle size={48} className="mx-auto mb-4 text-green-500" />
        <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You, {form.name}!</h3>
        <p className="text-gray-600 mb-4">Our expert will contact you within 15 minutes on <strong>{form.phone}</strong>.</p>
        <a
          href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(form.service)}`}
          target="_blank"
          rel="noreferrer"
          className="btn-primary mx-auto"
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && <h3 className="text-lg font-bold" style={{ color: "var(--primary)" }}>{title}</h3>}

      <div className={variant === "full" ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "space-y-3"}>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
          <input
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? "border-red-400" : "border-gray-300"}`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number *</label>
          <div className="flex">
            <span className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 text-sm font-medium text-gray-500">+91</span>
            <input
              type="tel"
              placeholder="10-digit mobile"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
              className={`flex-1 px-3 py-2.5 border rounded-r-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? "border-red-400" : "border-gray-300"}`}
            />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {variant === "full" && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email (Optional)</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}

        <div className={variant === "full" ? "" : ""}>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Service Required *</label>
          <select
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className={`w-full px-3 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${errors.service ? "border-red-400" : "border-gray-300"}`}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
        </div>
      </div>

      {variant === "full" && (
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Message (Optional)</label>
          <textarea
            rows={3}
            placeholder="Tell us more about your requirements..."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
      )}

      <div>
        <label className="flex items-start gap-2 text-xs text-gray-500 cursor-pointer">
          <input type="checkbox" required className="mt-0.5 flex-shrink-0" />
          <span>I agree to the <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> and consent to be contacted by dlegaltech. I understand this is a consultation request.</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center py-3 text-base"
      >
        {loading ? (
          <>
            <Loader size={18} className="animate-spin" />
            Submitting...
          </>
        ) : (
          "Get Free Consultation →"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        🔒 Your data is secure & will never be shared. Avg response time: 15 mins.
      </p>
    </form>
  );
}
