import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { LOCATIONS, SERVICES, BRAND } from "@/lib/data";
import LeadForm from "@/components/LeadForm";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `NGO Registration in ${loc.city}, ${loc.state} | dlegaltech`,
    description: `Expert NGO registration, FCRA, 12A/80G, Section 8 Company registration in ${loc.city}, ${loc.state}. Free consultation by dlegaltech experts. Call ${loc.phone}.`,
    alternates: { canonical: `https://www.dlegaltech.com/locations/${slug}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const loc = LOCATIONS.find((l) => l.slug === slug);
  if (!loc) notFound();

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `dlegaltech — ${loc.city} Office`,
    image: `https://www.dlegaltech.com/${loc.slug}-office.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: loc.address,
      addressLocality: loc.city,
      addressRegion: loc.state,
      postalCode: loc.pincode,
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: loc.lat, longitude: loc.lng },
    telephone: loc.phone,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  return (
    <main className="pb-16 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-800">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/locations" className="hover:text-blue-800">Locations</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">{loc.city}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="hero-gradient text-white py-10 md:py-12 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={20} className="text-amber-400" />
              <span className="text-blue-200 text-sm">{loc.city}, {loc.state}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-3">
              NGO Registration in {loc.city}, {loc.state}
            </h1>
            <p className="text-blue-100 text-base mb-5 leading-relaxed">
              Expert legal consultancy services in {loc.city}. Our advocates understand {loc.state}&apos;s specific regulations for NGO and business registration.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
              {[
                `Local ${loc.state} expertise`,
                "7-10 day delivery",
                "100% online process",
                "Free consultation",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2 text-sm">
                  <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                  <span className="text-blue-100">{b}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20need%20NGO%20registration%20help%20in%20${encodeURIComponent(loc.city)}`} target="_blank" rel="noreferrer" className="btn-primary">
                💬 WhatsApp Now
              </a>
              <a href={`tel:${loc.phone}`} className="btn-white">
                <Phone size={16} /> {loc.phone}
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <h2 className="text-lg font-black text-gray-900 mb-1">Free Consultation in {loc.city}</h2>
            <p className="text-sm text-gray-500 mb-4">Talk to a local expert today</p>
            <LeadForm variant="compact" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          {/* About location */}
          <section>
            <h2 className="text-xl font-black mb-2" style={{ color: "var(--primary)" }}>
              NGO Registration Services in {loc.city}
            </h2>
            <div className="section-divider-left"></div>
            <div className="prose prose-sm text-gray-600 mt-4 space-y-3">
              <p>
                dlegaltech provides comprehensive legal consultancy services in {loc.city}, {loc.state}. Our experts are well-versed with {loc.state}&apos;s specific regulatory requirements for NGO registration, company incorporation, and legal compliance.
              </p>
              <p>
                Whether you want to register a Trust, Society, or Section 8 Company in {loc.city}, our advocates handle the entire process — from document preparation to final certificate delivery — without you having to visit any government office.
              </p>
              <p>
                We have successfully registered 500+ NGOs and businesses in {loc.state}, with an expertise in {loc.localKeyword}. Our clients in {loc.city} benefit from our deep understanding of local stamp duty regulations, state-specific requirements, and registration procedures.
              </p>
            </div>
          </section>

          {/* Services available */}
          <section>
            <h2 className="text-xl font-black mb-2" style={{ color: "var(--primary)" }}>
              Services Available in {loc.city}
            </h2>
            <div className="section-divider-left"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {SERVICES.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-colors group"
                >
                  <span className="text-2xl">{service.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 group-hover:text-blue-800">{service.name}</p>
                    <p className="text-xs text-gray-500">From ₹{service.price.toLocaleString("en-IN")}</p>
                  </div>
                  <ArrowRight size={14} className="text-gray-400 group-hover:text-blue-600 flex-shrink-0" />
                </Link>
              ))}
            </div>
          </section>

          {/* Local FAQs */}
          <section>
            <h2 className="text-xl font-black mb-2" style={{ color: "var(--primary)" }}>
              FAQs for {loc.city} Clients
            </h2>
            <div className="section-divider-left"></div>
            <div className="space-y-3 mt-4">
              {[
                {
                  q: `What are the requirements for NGO registration in ${loc.city}?`,
                  a: `NGO registration in ${loc.city}, ${loc.state} follows standard central government requirements with some state-specific variations. You need minimum members (7 for Society, 2 for Trust), address proof in ${loc.state}, and relevant KYC documents. We guide you through all ${loc.state}-specific requirements.`,
                },
                {
                  q: `How long does NGO registration take in ${loc.city}?`,
                  a: `With dlegaltech, NGO registration in ${loc.city} typically takes 7-10 working days after complete document submission. Section 8 Company takes 15-20 days due to MCA processing. We ensure fast processing with no unnecessary delays.`,
                },
                {
                  q: `Is it necessary to have an office in ${loc.city} for registration?`,
                  a: `Yes, you need a registered office address in ${loc.city}/${loc.state} for local NGO registration. This can be a home address initially. We can guide you on the specific address requirements for your registration type.`,
                },
              ].map((faq) => (
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
        <aside className="space-y-5">
          {/* Contact Card */}
          <div className="card p-5">
            <h3 className="font-bold text-gray-900 mb-4">{loc.city} Office Details</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-blue-700 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">{loc.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-700 flex-shrink-0" />
                <a href={`tel:${loc.phone}`} className="text-gray-600 hover:text-blue-800">{loc.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-blue-700 flex-shrink-0" />
                <span className="text-gray-600">Mon–Sat: 9:00 AM – 6:00 PM</span>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20am%20from%20${encodeURIComponent(loc.city)}%20and%20need%20help`} target="_blank" rel="noreferrer" className="btn-primary w-full justify-center text-sm py-2.5">
                💬 WhatsApp Now
              </a>
              <a href={`tel:${loc.phone}`} className="btn-outline w-full justify-center text-sm py-2.5">
                📞 Call Now
              </a>
            </div>
          </div>

          {/* Other Locations */}
          <div className="card p-5">
            <h3 className="font-bold text-gray-900 mb-3">Other Locations</h3>
            <div className="space-y-2">
              {LOCATIONS.filter((l) => l.slug !== slug).slice(0, 5).map((l) => (
                <Link key={l.slug} href={`/locations/${l.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-800 transition-colors p-2 rounded-lg hover:bg-gray-50">
                  <span>📍</span>
                  {l.city}, {l.stateCode}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
