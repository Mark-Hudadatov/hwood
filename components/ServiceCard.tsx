/**
 * ServiceCard - Display service with icon and description
 * Clickable card that links to service detail page
 */

import Link from 'next/link';
import { Service } from '@/lib/types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card group block"
    >
      {/* Icon */}
      <div className="mb-4 text-5xl transition-transform group-hover:scale-110">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="mb-3 text-xl font-bold text-dark transition-colors group-hover:text-accent">
        {service.nameHe}
      </h3>

      {/* Description */}
      <p className="text-muted leading-relaxed">
        {service.shortDescriptionHe}
      </p>

      {/* Arrow indicator */}
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
        <span>למידע נוסף</span>
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1 flip-rtl"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    </Link>
  );
}
