import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Clock, FileText, ArrowRight, Phone, Star } from "lucide-react";
import { SERVICES, BRAND } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import LeadForm from "@/components/LeadForm";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: { absolute: service.seoTitle },
    description: service.seoDescription,
    alternates: { canonical: `https://www.dlegaltech.com/services/${slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const related = SERVICES.filter((s) => service.relatedServices.includes(s.slug));
  const discountPct = Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: "dlegaltech",
      url: "https://www.dlegaltech.com",
    },
    offers: {
      "@type": "Offer",
      price: service.price.toString(),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    areaServed: "India",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="pb-16 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-800">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/services" className="hover:text-blue-800">Services</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">{service.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-5xl mb-4">{service.icon}</div>
            <h1 className="text-3xl md:text-4xl font-black mb-3">{service.name}</h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">{service.description}</p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {service.benefits.slice(0, 4).map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-amber-400">₹{service.price.toLocaleString("en-IN")}</span>
                  <span className="text-blue-200 line-through text-base">₹{service.originalPrice.toLocaleString("en-IN")}</span>
                  <span className="badge badge-green">{discountPct}% off</span>
                </div>
                <div className="flex items-center gap-1 mt-1 text-sm text-blue-200">
                  <Clock size={13} />
                  {service.timeline}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20need%20help%20with%20${encodeURIComponent(service.name)}`} target="_blank" rel="noreferrer" className="btn-primary">
                💬 Start on WhatsApp
              </a>
              <a href={`tel:${BRAND.phone}`} className="btn-white">
                <Phone size={16} /> {BRAND.phone}
              </a>
            </div>
          </div>

          {/* Sidebar Form */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <h2 className="text-lg font-black text-gray-900 mb-4">Get Expert Consultation</h2>
            <LeadForm variant="compact" defaultService={service.slug} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">

          {/* Process */}
          <section>
            <h2 className="text-xl font-black mb-2" style={{ color: "var(--primary)" }}>Step-by-Step Process</h2>
            <div className="section-divider-left"></div>
            <div className="space-y-4 mt-4">
              {service.process.map((p) => (
                <div key={p.step} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0" style={{ background: "var(--primary)" }}>
                    {p.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{p.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Documents */}
          <section>
            <h2 className="text-xl font-black mb-2" style={{ color: "var(--primary)" }}>Documents Required</h2>
            <div className="section-divider-left"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {service.documents.map((doc) => (
                <div key={doc} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <FileText size={16} className="text-blue-700 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{doc}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3 flex items-center gap-1">
              ℹ️ Additional documents may be required based on specific requirements. Our expert will guide you.
            </p>
          </section>

          {/* Pricing */}
          <section>
            <h2 className="text-xl font-black mb-2" style={{ color: "var(--primary)" }}>Transparent Pricing</h2>
            <div className="section-divider-left"></div>
            <div className="mt-4 overflow-hidden rounded-xl border border-gray-200">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th>Package</th>
                    <th>What&apos;s Included</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-semibold text-sm">{service.name} — Basic</td>
                    <td className="text-sm text-gray-600">All core inclusions + Certificate</td>
                    <td className="font-bold" style={{ color: "var(--primary)" }}>₹{service.price.toLocaleString("en-IN")}</td>
                  </tr>
                  <tr>
                    <td className="font-semibold text-sm">{service.name} — Premium</td>
                    <td className="text-sm text-gray-600">Basic + Priority Processing + Expert Call</td>
                    <td className="font-bold" style={{ color: "var(--primary)" }}>Custom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-500 mt-2">✅ No hidden charges. Government fees included. GST applicable.</p>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-xl font-black mb-2" style={{ color: "var(--primary)" }}>Frequently Asked Questions</h2>
            <div className="section-divider-left"></div>
            <div className="space-y-3 mt-4">
              {service.faqs.map((faq) => (
                <details key={faq.q} className="group border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-4 cursor-pointer list-none font-semibold text-gray-900 text-sm hover:bg-gray-50">
                    <span className="pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold group-open:rotate-45 transition-transform" style={{ background: "var(--primary)" }}>+</span>
                  </summary>
                  <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">{faq.a}</div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Quick Contact */}
          <div className="card p-5">
            <h3 className="font-bold text-gray-900 mb-4">Quick Contact</h3>
            <div className="space-y-3">
              <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20need%20help%20with%20${encodeURIComponent(service.name)}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-xl text-white text-sm font-semibold" style={{ background: "#25d366" }}>
                <span className="text-xl">💬</span>
                <div>
                  <p className="font-bold">WhatsApp Us</p>
                  <p className="text-xs opacity-80">Avg reply in 5 min</p>
                </div>
              </a>
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 p-3 rounded-xl text-white text-sm font-semibold" style={{ background: "var(--primary)" }}>
                <Phone size={18} />
                <div>
                  <p className="font-bold">Call Now</p>
                  <p className="text-xs opacity-80">{BRAND.phone}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="card p-5">
            <h3 className="font-bold text-gray-900 mb-3">Why Trust Us</h3>
            <div className="space-y-2.5">
              {[
                { icon: "⭐", text: "4.9/5 — 700+ Reviews" },
                { icon: "✅", text: "98% Success Rate" },
                { icon: "🔒", text: "Secure Document Upload" },
                { icon: "📋", text: "No Hidden Charges" },
                { icon: "⚖️", text: "Advocate Supervised" },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-2 text-sm text-gray-700">
                  <span>{t.icon}</span>
                  {t.text}
                </div>
              ))}
            </div>
          </div>

          {/* Related Services */}
          {related.length > 0 && (
            <div>
              <h3 className="font-bold text-gray-900 mb-3">You May Also Need</h3>
              <div className="space-y-3">
                {related.slice(0, 3).map((r) => (
                  <Link key={r.slug} href={`/services/${r.slug}`} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group">
                    <span className="text-xl">{r.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-blue-800">{r.name}</p>
                      <p className="text-xs text-gray-500">From ₹{r.price.toLocaleString("en-IN")}</p>
                    </div>
                    <ArrowRight size={14} className="text-gray-400 group-hover:text-blue-600" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Reviews strip */}
      <div className="bg-gray-50 border-t border-gray-200 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[0,1,2,3,4].map((i) => <Star key={i} size={18} fill="#fbbf24" className="text-amber-400" />)}
            </div>
            <span className="font-bold">4.9/5</span>
            <span className="text-gray-500 text-sm">· 700+ verified reviews</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Ramesh Kumar", text: `Got my ${service.name} done in record time. Professional team, no surprises on pricing.`, location: "Ranchi" },
              { name: "Priya Singh", text: "They handled everything online. Just uploaded documents and received the certificate. Excellent!",  location: "Pune" },
              { name: "Arun Sharma", text: "Best legal consultancy I've used. Advocate Pandey's team is thorough and quick to respond.", location: "Delhi" },
            ].map((r) => (
              <div key={r.name} className="bg-white rounded-xl p-4 border border-gray-100">
                <div className="flex items-center gap-1 mb-2">
                  {[0,1,2,3,4].map((i) => <Star key={i} size={12} fill="#fbbf24" className="text-amber-400" />)}
                </div>
                <p className="text-sm text-gray-700 mb-3">&ldquo;{r.text}&rdquo;</p>
                <p className="text-xs font-semibold text-gray-900">{r.name} · {r.location}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
