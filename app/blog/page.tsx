import Link from "next/link";
import { BLOG_POSTS } from "@/lib/data";
import NewsletterForm from "@/components/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Legal Resources — NGO Registration Guides",
  description: "Expert guides on NGO registration, FCRA, 12A/80G, Section 8 Company, CSR Funding, and more. Written by the dlegaltech legal team.",
};

const ALL_CATEGORIES = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

export default function BlogPage() {
  return (
    <main className="pb-16 md:pb-0">
      <div className="hero-gradient text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-black mb-3">Legal Resources &amp; Guides</h1>
          <p className="text-blue-100 text-base mb-5">Expert articles on NGO registration, compliance, and business law — written by the dlegaltech legal team.</p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="badge" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>All Topics</span>
            {ALL_CATEGORIES.map((cat) => (
              <span key={cat} className="badge cursor-pointer hover:bg-white/25 transition-colors" style={{ background: "rgba(255,255,255,0.1)", color: "white" }}>{cat}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto text-sm text-gray-500">
          <Link href="/" className="hover:text-blue-800">Home</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 font-medium">Blog</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="card group">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-amber-50 flex items-center justify-center text-6xl">
                📄
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="badge badge-primary">{post.category}</span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-gray-900 mb-2 group-hover:text-blue-800 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-3 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                  <span className="font-medium">{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-14 rounded-2xl p-8 text-center text-white" style={{ background: "var(--primary)" }}>
          <h2 className="text-2xl font-bold mb-2">Stay Updated on NGO Laws &amp; Compliance</h2>
          <p className="text-blue-200 mb-5 text-sm">Get weekly updates on NGO registration, FCRA amendments, and legal compliance directly from our advocates.</p>
          <NewsletterForm />
          <p className="text-xs text-blue-300 mt-2">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </main>
  );
}
