import Link from "next/link";
import { ArrowRight, CheckCircle, Star, BookOpen, TrendingUp, Shield, Clock, Award } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import LeadForm from "@/components/LeadForm";
import { SERVICES, STATS, TESTIMONIALS, BLOG_POSTS, PROCESS_STEPS, LOCATIONS, BRAND } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Sai NGO & Business Consultancy®️ — India's Most Trusted Legal Platform" },
  description: "Expert NGO registration, Trust, Society, Section 8, FCRA, 12A/80G, Company Registration in India. Free consultation by Advocate P.R. Pandey. 5000+ clients, 4.9★ rating.",
  keywords: "NGO registration India, Sai NGO Consultancy, Trust registration, Section 8 company, FCRA registration, 12A 80G, company registration, trademark registration",
};

export default function HomePage() {
  return (
    <main className="pb-16 md:pb-0">
      {/* HERO */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Trusted by 5,000+ NGOs &amp; Businesses across India
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-5">
              Sai NGO &amp; Business<br />
              <span className="text-amber-400">Consultancy</span>®️
            </h1>

            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
              Expert NGO registration, business incorporation &amp; legal compliance services across India. Guided by{" "}
              <strong className="text-white">Advocate P.R. Pandey</strong> — fast, transparent &amp; affordable.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                "NGO Registration from ₹4,999",
                "7-10 day delivery",
                "Free Expert Consultation",
                "100% Online Process",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20need%20NGO%20registration%20consultation`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-base px-6 py-3"
              >
                💬 WhatsApp Consultation
              </a>
              <Link href="/services" className="btn-white text-base px-6 py-3">
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={16} fill="#fbbf24" className="text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-blue-200">
                <strong className="text-white">4.9/5</strong> from 700+ verified Google Reviews
              </p>
            </div>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block"></span>
              <p className="text-xs font-semibold text-green-700">Expert Online — Avg response 15 min</p>
            </div>
            <h2 className="text-lg font-black text-gray-900 mb-4">Get Free Expert Consultation</h2>
            <LeadForm variant="compact" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl mb-1">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black" style={{ color: "var(--primary)" }}>{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="badge badge-accent mb-3">Our Services</span>
            <h2 className="section-heading">Complete Legal Services for NGOs &amp; Businesses</h2>
            <div className="section-divider"></div>
            <p className="section-subheading max-w-2xl mx-auto">
              From NGO registration to trademark protection — all your legal needs under one roof, guided by experienced advocates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.slice(0, 8).map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="btn-outline">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="badge badge-primary mb-3">How It Works</span>
            <h2 className="section-heading">Simple 4-Step Process</h2>
            <div className="section-divider"></div>
            <p className="section-subheading max-w-xl mx-auto">
              Get your NGO or business registered in 4 easy steps — 100% online, fully guided.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.step} className="relative flex flex-col items-center text-center p-5">
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-blue-200 to-amber-200 z-0" />
                )}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 z-10 shadow-md"
                  style={{ background: "linear-gradient(135deg, #0A346C, #1254a8)" }}
                >
                  {step.icon}
                </div>
                <div
                  className="absolute top-3 right-3 lg:right-auto lg:left-[calc(50%+0.9rem)] text-xs font-black text-white w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: "var(--accent)" }}
                >
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20want%20to%20start%20my%20application`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-base"
            >
              Start My Application →
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge badge-accent mb-3">Why Choose Us</span>
            <h2 className="section-heading mb-2">Expert Legal Services Backed by 15+ Years of Experience</h2>
            <div className="section-divider-left"></div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded by <strong>Advocate P.R. Pandey</strong>, dlegaltech has been India&apos;s go-to platform for NGO and business registration since 2009. We combine legal expertise with technology to deliver fast, transparent services.
            </p>

            <div className="space-y-4">
              {[
                { icon: <Shield size={20} />, title: "Govt. Trademark Registered Brand", desc: "dlegaltech®️ is a government-registered trademark — symbol of trust and authenticity." },
                { icon: <Award size={20} />, title: "Bar Council Registered Advocates", desc: "All legal work supervised by Advocate P.R. Pandey, registered with Bar Council of India." },
                { icon: <TrendingUp size={20} />, title: "98% Application Success Rate", desc: "Our thorough document review ensures maximum approval rate for all applications." },
                { icon: <Clock size={20} />, title: "Real-Time Status Tracking", desc: "Track your application status anytime via our client dashboard — full transparency." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: "var(--primary)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏆", label: "5,000+", sublabel: "Happy Clients" },
              { icon: "⭐", label: "4.9/5", sublabel: "Google Rating" },
              { icon: "📋", label: "ISO", sublabel: "Certified" },
              { icon: "⚖️", label: "Bar Council", sublabel: "Registered" },
              { icon: "🔒", label: "100%", sublabel: "Data Security" },
              { icon: "🇮🇳", label: "Pan India", sublabel: "Service" },
            ].map((item) => (
              <div key={item.label} className="card p-5 text-center">
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-xl font-black" style={{ color: "var(--primary)" }}>{item.label}</div>
                <div className="text-sm text-gray-500">{item.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="badge badge-green mb-3">Client Reviews</span>
            <h2 className="section-heading">What Our Clients Say</h2>
            <div className="section-divider"></div>
            <p className="section-subheading max-w-xl mx-auto">
              700+ verified Google reviews from NGO founders, startups, and legal professionals across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card p-5 flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  {[0, 1, 2, 3, 4].slice(0, t.rating).map((i) => (
                    <Star key={i} size={14} fill="#fbbf24" className="text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed flex-1 mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: "var(--primary)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role} · {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="#" className="btn-outline">
              <Star size={16} fill="currentColor" /> Read All 700+ Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="badge badge-primary mb-3">Pan India Service</span>
            <h2 className="section-heading">We Serve Across India</h2>
            <div className="section-divider"></div>
            <p className="section-subheading max-w-xl mx-auto">
              Expert legal services in all major cities. Our consultants understand local regulations for seamless compliance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="card p-4 text-center hover:border-blue-300 border-2 border-transparent group"
              >
                <div className="text-2xl mb-2">📍</div>
                <h3 className="font-bold text-sm text-gray-900 group-hover:text-blue-800">{loc.city}</h3>
                <p className="text-xs text-gray-500">{loc.state}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="badge badge-accent mb-3">Legal Resources</span>
            <h2 className="section-heading">Guides &amp; Legal Updates</h2>
            <div className="section-divider"></div>
            <p className="section-subheading max-w-xl mx-auto">
              Expert articles on NGO registration, legal compliance, and business incorporation written by Advocate P.R. Pandey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card group">
                <div className="aspect-video bg-gradient-to-br from-blue-50 to-amber-50 flex items-center justify-center text-5xl">
                  📄
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="badge badge-primary">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/blog" className="btn-outline">
              <BookOpen size={16} /> View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CONSULTATION FORM */}
      <section className="py-14 bg-gray-50" id="consultation">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-2">
              <span className="badge badge-accent mb-3">Free Consultation</span>
              <h2 className="section-heading mb-2">Get Expert Guidance Today</h2>
              <div className="section-divider-left"></div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Not sure which service you need? Our experts will guide you through the right registration process for your specific requirements.
              </p>
              <div className="space-y-3">
                {[
                  "Free initial consultation",
                  "Transparent pricing — no hidden fees",
                  "Dedicated consultant assigned",
                  "Progress updates at every stage",
                  "Digital certificate delivery",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500" />
                    {f}
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl" style={{ background: "rgba(10,52,108,0.05)" }}>
                <p className="text-sm font-semibold" style={{ color: "var(--primary)" }}>Founder &amp; Legal Head</p>
                <p className="text-base font-bold text-gray-900 mt-1">Advocate P.R. Pandey</p>
                <p className="text-xs text-gray-500 mt-1">Bar Council of India Registered | 15+ Years Experience | 5000+ Clients Served</p>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <LeadForm variant="full" title="Request a Free Consultation" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="badge badge-primary mb-3">FAQs</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <div className="section-divider"></div>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "What is the difference between Trust, Society, and Section 8 Company?",
                a: "All three are NGO structures in India. Society is registered under Societies Registration Act (needs 7+ members). Trust is under Indian Trusts Act (needs 2+ trustees). Section 8 Company is under Companies Act 2013 — most credible, MCA regulated, with highest governance standards.",
              },
              {
                q: "Can I register an NGO online without visiting any government office?",
                a: "Yes! With dlegaltech, the entire process is online. We handle all government portals, document submission, and follow-ups. You just need to upload your documents via our secure portal.",
              },
              {
                q: "What documents are needed for NGO registration?",
                a: "Basic documents: Aadhar card and PAN of all members/trustees, address proof, passport photos, registered office address proof, and email/phone of key persons. Specific requirements vary by NGO type.",
              },
              {
                q: "How much does NGO registration cost?",
                a: "NGO registration starts at ₹4,999 for Trust/Society. Section 8 Company starts at ₹6,999. All prices include government fees, professional charges, and certificate delivery. No hidden charges.",
              },
              {
                q: "What is the timeline for FCRA registration?",
                a: "FCRA applications are processed by MHA and typically take 3–6 months. The organization must be registered for minimum 3 years and have spent ₹15+ lakhs on activities.",
              },
              {
                q: "Can I get 12A and 80G registration for my existing NGO?",
                a: "Yes! Any existing NGO can apply for 12A and 80G registration. The NGO must be actively working toward charitable objectives and have audited financial statements.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none font-semibold text-gray-900 text-sm hover:bg-gray-50 transition-colors">
                  <span className="pr-4">{faq.q}</span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold group-open:rotate-45 transition-transform"
                    style={{ background: "var(--primary)" }}
                  >
                    +
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
