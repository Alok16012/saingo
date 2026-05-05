import Link from "next/link";
import { SERVICES } from "@/lib/data";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-20">
      <div className="max-w-lg text-center">
        <div className="text-8xl mb-4">⚖️</div>
        <h1 className="text-4xl font-black mb-2" style={{ color: "var(--primary)" }}>404</h1>
        <h2 className="text-xl font-bold text-gray-800 mb-3">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The page you&apos;re looking for doesn&apos;t exist. But we can help you find what you need!</p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link href="/" className="btn-primary">Back to Home</Link>
          <Link href="/services" className="btn-outline">Browse Services</Link>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <p className="text-sm font-semibold text-gray-700 mb-3">Popular Services</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {SERVICES.slice(0, 4).map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="badge badge-primary hover:bg-blue-700 hover:text-white transition-colors cursor-pointer">
                {s.icon} {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
