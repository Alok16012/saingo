import Link from "next/link";
import { CheckCircle, Clock, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";

type Service = (typeof SERVICES)[number];

interface ServiceCardProps {
  service: Service;
  compact?: boolean;
}

export default function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const discountPercent = Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100);

  return (
    <div className="card flex flex-col h-full group">
      <div className="p-5 flex flex-col h-full">
        {/* Top: icon + badge */}
        <div className="flex items-start justify-between mb-3">
          <div className="service-icon">{service.icon}</div>
          {service.badge && (
            <span className="badge badge-accent">{service.badge}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-base mb-2 text-gray-900 group-hover:text-blue-800 transition-colors">
          {service.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
          {service.shortDescription}
        </p>

        {!compact && (
          <div className="space-y-1.5 mb-4">
            {service.benefits.slice(0, 3).map((b) => (
              <div key={b} className="flex items-center gap-2 text-xs text-gray-600">
                <CheckCircle size={13} className="text-green-500 flex-shrink-0" />
                {b}
              </div>
            ))}
          </div>
        )}

        {/* Price + Timeline */}
        <div className="flex items-end justify-between mb-4 pt-3 border-t border-gray-100">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-black" style={{ color: "var(--primary)" }}>
                ₹{service.price.toLocaleString("en-IN")}
              </span>
              <span className="text-sm text-gray-400 line-through">₹{service.originalPrice.toLocaleString("en-IN")}</span>
              <span className="badge badge-green">{discountPercent}% off</span>
            </div>
            <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
              <Clock size={11} />
              {service.timeline}
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/services/${service.slug}`}
          className="btn-primary w-full justify-center text-sm py-2.5"
        >
          Start Now <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
