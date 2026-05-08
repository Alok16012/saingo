import Link from "next/link";
import { CheckCircle, Award, Users, Star, TrendingUp, Shield } from "lucide-react";
import { BRAND, STATS } from "@/lib/data";
import LeadForm from "@/components/LeadForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "About Us | dlegaltech" },
  description: "Learn about dlegaltech — India's most trusted digital legal consultancy platform. 15+ years experience, 5000+ clients, expert advocates registered with Bar Council of India.",
};

export default function AboutPage() {
  return (
    <main className="pb-16 md:pb-0">
      {/* Hero */}
      <section className="hero-gradient text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-4">About dlegaltech</h1>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl mx-auto">
            India&apos;s most trusted digital legal consultancy platform for NGO registration, business incorporation, and legal compliance — 15+ years of dedicated expert service.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-800">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">About Us</span>
        </div>
      </div>

      {/* Stats */}
      <section className="py-10 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-3xl font-black" style={{ color: "var(--primary)" }}>{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

        {/* Founder Story */}
        <section className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <span className="badge badge-accent mb-3">Our Story</span>
            <h2 className="section-heading mb-2">Founded on a Mission to Make Legal Services Accessible</h2>
            <div className="section-divider-left"></div>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                dlegaltech was founded on a simple mission — to make India&apos;s complex legal registration system accessible, transparent, and affordable for everyone, from NGO founders in small towns to entrepreneurs launching startups in metros.
              </p>
              <p>
                Starting in 2009 with a focus on NGO registration services in Jharkhand, dlegaltech quickly expanded as clients experienced the difference — clear pricing, no hidden charges, and genuine legal expertise delivered by registered advocates.
              </p>
              <p>
                Over 15 years, dlegaltech has evolved into India&apos;s leading digital legal consultancy, serving 5,000+ clients across all major Indian cities. Our government trademark registration and ISO certification reflect our commitment to quality and authenticity.
              </p>
              <p>
                Today, our team of Bar Council-registered advocates, paralegals, and compliance experts handles thousands of applications annually — from NGO registrations in remote Jharkhand villages to Section 8 Company incorporations for Mumbai-based corporates.
              </p>
            </div>
          </div>

          {/* Founder Card */}
          <div className="space-y-5">
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-black text-2xl flex-shrink-0" style={{ background: "var(--primary)" }}>
                  AP
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900">dlegaltech Legal Head</h3>
                  <p className="text-sm text-gray-500 mb-2">Founder &amp; Senior Advocate</p>
                  <p className="text-xs font-medium text-blue-700 mb-3">Bar Council of India Registered</p>
                  <div className="space-y-1.5">
                    {["15+ Years Legal Practice", "5000+ Clients Served", "Expert in NGO & Corporate Law", "Pan India Practice"].map((d) => (
                      <div key={d} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle size={12} className="text-green-500 flex-shrink-0" />
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Award size={20} />, label: "Govt. Trademark", sub: "Registered Brand" },
                { icon: <Shield size={20} />, label: "ISO Certified", sub: "Quality Assured" },
                { icon: <Users size={20} />, label: "Expert Team", sub: "10+ Advocates" },
                { icon: <Star size={20} />, label: "4.9/5 Rating", sub: "700+ Reviews" },
              ].map((item) => (
                <div key={item.label} className="card p-4 text-center">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white mx-auto mb-2" style={{ background: "var(--primary)" }}>
                    {item.icon}
                  </div>
                  <p className="font-bold text-sm text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section>
          <div className="text-center mb-10">
            <span className="badge badge-primary mb-3">Our Values</span>
            <h2 className="section-heading">What Makes Us Different</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🔍", title: "Transparency First", desc: "No hidden charges. No surprise fees. Our pricing is clear from day one — you pay exactly what's quoted." },
              { icon: "⚡", title: "Fast Delivery", desc: "We understand urgency. Our streamlined processes deliver certificates in the shortest possible time." },
              { icon: "⚖️", title: "Legal Excellence", desc: "All work supervised by Bar Council-registered advocates. Zero tolerance for errors or non-compliance." },
              { icon: "🔒", title: "Data Security", desc: "Your documents are encrypted at rest and in transit. We're DPDP Act compliant and take privacy seriously." },
              { icon: "📱", title: "Tech-Enabled", desc: "From online document upload to digital certificate delivery, our technology makes the process seamless." },
              { icon: "🤝", title: "Long-term Partnership", desc: "We're not just registration agents — we're your long-term legal partners for all compliance needs." },
            ].map((v) => (
              <div key={v.title} className="card p-5">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <div className="text-center mb-10">
            <span className="badge badge-accent mb-3">Our Team</span>
            <h2 className="section-heading">Expert Legal Professionals</h2>
            <div className="section-divider"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Senior Advocate", role: "Founder & Legal Head", exp: "15+ years" },
              { name: "Adv. Meera Sharma", role: "NGO Compliance Expert", exp: "8 years" },
              { name: "CA Rajesh Gupta", role: "Tax & Finance Advisor", exp: "10 years" },
              { name: "Adv. Priya Singh", role: "Corporate Law Specialist", exp: "7 years" },
            ].map((member) => (
              <div key={member.name} className="card p-5 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-black text-xl mx-auto mb-3" style={{ background: "var(--primary)" }}>
                  {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{member.name}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{member.role}</p>
                <p className="text-xs font-medium mt-2" style={{ color: "var(--accent)" }}>{member.exp} experience</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="grid lg:grid-cols-2 gap-8 md:gap-10 items-start">
          <div>
            <span className="badge badge-accent mb-3">Get in Touch</span>
            <h2 className="section-heading mb-2">Talk to Our Experts</h2>
            <div className="section-divider-left"></div>
            <p className="text-gray-600 text-sm mb-5">Have questions about our services or need guidance on which registration is right for you? Fill the form and we&apos;ll call you back within 15 minutes.</p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> {BRAND.email}</p>
              <p><strong>Phone:</strong> {BRAND.phone}</p>
              <p><strong>WhatsApp:</strong> +91-{BRAND.whatsapp.slice(2)}</p>
              <p><strong>Office:</strong> Lalpur, Ranchi, Jharkhand - 834001</p>
              <p><strong>Hours:</strong> Mon–Sat: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <LeadForm variant="full" title="Send Us a Message" />
          </div>
        </section>
      </div>
    </main>
  );
}
