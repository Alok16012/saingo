import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, User, Calendar, Tag, ArrowLeft } from "lucide-react";
import { BLOG_POSTS, BRAND, SERVICES } from "@/lib/data";
import LeadForm from "@/components/LeadForm";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://www.dlegaltech.com/blog/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article", publishedTime: post.date },
  };
}

const BLOG_CONTENT: Record<string, string> = {
  "ngo-registration-complete-guide-india-2024": `
## What is an NGO?

A Non-Governmental Organization (NGO) is a non-profit entity that operates independently of the government, typically working toward social, humanitarian, or environmental objectives. In India, NGOs can be registered under three main structures:

1. **Trust** — Under the Indian Trusts Act, 1882 or respective state trust acts
2. **Society** — Under the Societies Registration Act, 1860
3. **Section 8 Company** — Under the Companies Act, 2013

## Comparison: Trust vs Society vs Section 8 Company

| Feature | Trust | Society | Section 8 |
|---------|-------|---------|-----------|
| Min. Members | 2 Trustees | 7 Members | 2 Directors |
| Registration Authority | Registrar | Charity Commissioner | MCA |
| Credibility | Medium | Medium | Highest |
| FCRA Eligible | Yes | Yes | Yes |
| Annual Compliance | Low | Medium | High |
| Recommended For | Small NGOs | Mid-size NGOs | Large NGOs |

## Documents Required

For **Trust Registration**:
- Aadhar Card of all trustees
- PAN Card of all trustees
- Address proof (utility bill)
- Passport size photographs
- Trust deed (prepared by us)
- Registered office address proof

For **Society Registration**:
- Same as Trust + Memorandum of Association
- Rules & Regulations document
- Affidavit from President/Secretary

For **Section 8 Company**:
- Director KYC (Aadhar + PAN)
- DSC (Digital Signature Certificate)
- DIN Application
- MOA & AOA

## Step-by-Step Registration Process

1. **Choose the Right Structure** — We help you decide based on your goals and long-term plans
2. **Prepare Documents** — Upload required documents via our secure portal
3. **Name Approval** — Apply for name availability
4. **Deed/MoA Preparation** — Our advocates draft the founding document
5. **Government Filing** — We file with the concerned authority
6. **Follow-up & Corrections** — Handle any queries from the authority
7. **Certificate Delivery** — Receive digital certificate

## Timeline & Costs

- **Trust/Society**: 7-10 working days | Starting ₹4,999
- **Section 8 Company**: 15-20 working days | Starting ₹6,999

All government fees are included. No hidden charges.

## Next Steps After Registration

Once registered, consider:
1. **12A Registration** — Get income tax exemption for the NGO
2. **80G Registration** — Enable donors to claim tax deductions
3. **FCRA Registration** — Receive foreign donations (after 3 years)
4. **PAN & TAN** — Required for banking and TDS
5. **Bank Account** — Open a dedicated NGO bank account
`,
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = BLOG_CONTENT[slug] || post.excerpt + "\n\nFull article coming soon. Contact us for expert guidance on this topic.";
  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "dlegaltech",
      logo: { "@type": "ImageObject", url: "https://www.dlegaltech.com/logo.png" },
    },
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
  };

  return (
    <main className="pb-16 md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-800">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-blue-800">Blog</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium line-clamp-1">{post.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-8">
        {/* Article */}
        <article className="lg:col-span-2">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-900 mb-6 font-medium">
            <ArrowLeft size={15} /> Back to Blog
          </Link>

          <div className="aspect-video bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl flex items-center justify-center text-7xl mb-6">
            📄
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge badge-primary">{post.category}</span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Clock size={12} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">{post.title}</h1>

          {/* Author */}
          <div className="flex items-center gap-3 mb-6 p-4 bg-blue-50 rounded-xl">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: "var(--primary)" }}>AP</div>
            <div>
              <p className="font-bold text-gray-900 text-sm">{post.author}</p>
              <p className="text-xs text-gray-500">Bar Council of India Registered | 15+ Years Experience | Legal Supervisor, dlegaltech</p>
              <p className="text-xs text-green-600 mt-0.5 font-medium">✅ Fact-checked by Legal Team</p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-sm md:prose-base max-w-none prose-headings:font-black prose-headings:text-gray-900 prose-a:text-blue-700 prose-strong:text-gray-900 prose-li:text-gray-700 text-gray-700 leading-relaxed">
            {content.split("\n").map((line, i) => {
              if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-black mt-8 mb-3" style={{ color: "var(--primary)" }}>{line.replace("## ", "")}</h2>;
              if (line.startsWith("### ")) return <h3 key={i} className="text-lg font-bold mt-6 mb-2 text-gray-900">{line.replace("### ", "")}</h3>;
              if (line.startsWith("- **")) return <li key={i} className="ml-4 my-1 text-gray-700" dangerouslySetInnerHTML={{ __html: line.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
              if (line.startsWith("- ")) return <li key={i} className="ml-4 my-1 text-gray-700">{line.replace("- ", "")}</li>;
              if (line.startsWith("|")) return null;
              if (line.trim() === "") return <div key={i} className="h-2" />;
              if (/^\d+\./.test(line)) return <p key={i} className="ml-4 my-1 text-gray-700">{line}</p>;
              return <p key={i} className="my-3 text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />;
            })}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-gray-200">
            <Tag size={14} className="text-gray-400 mt-1" />
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full hover:bg-blue-100 hover:text-blue-700 cursor-pointer transition-colors">{tag}</span>
            ))}
          </div>

          {/* Inline CTA */}
          <div className="mt-8 p-5 rounded-2xl text-white" style={{ background: "var(--primary)" }}>
            <h3 className="font-bold text-lg mb-2">Need Expert Help with {post.tags[0]}?</h3>
            <p className="text-blue-200 text-sm mb-4">Get free expert consultation from the dlegaltech legal team. We handle everything — from document preparation to final certificate.</p>
            <a href={`https://wa.me/${BRAND.whatsapp}?text=Hi%20I%20read%20your%20article%20on%20${encodeURIComponent(post.title)}%20and%20need%20help`} target="_blank" rel="noreferrer" className="btn-primary">
              💬 Get Free Expert Help
            </a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-black mb-4" style={{ color: "var(--primary)" }}>Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((rp) => (
                  <Link key={rp.slug} href={`/blog/${rp.slug}`} className="card p-4 group">
                    <span className="badge badge-primary mb-2 block w-fit">{rp.category}</span>
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-blue-800 line-clamp-2">{rp.title}</h3>
                    <p className="text-xs text-gray-400 mt-2">{rp.readTime}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-5 border border-gray-100 sticky top-20">
            <h3 className="font-black text-gray-900 mb-4">Get Expert Help</h3>
            <LeadForm variant="compact" />
          </div>

          <div className="card p-5">
            <h3 className="font-bold text-gray-900 mb-3">Popular Services</h3>
            <div className="space-y-3">
              {SERVICES.slice(0, 5).map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-800 p-2 rounded-lg hover:bg-gray-50 transition-colors group">
                  <span>{s.icon}</span>
                  <span className="font-medium group-hover:text-blue-800">{s.name}</span>
                  <span className="ml-auto text-xs text-green-700 font-semibold">₹{s.price.toLocaleString("en-IN")}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
