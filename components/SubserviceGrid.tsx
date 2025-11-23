/**
 * SubserviceGrid - Grid of subservice cards
 * Displays subservices with images and descriptions
 */

import Link from 'next/link';
import { Subservice } from '@/lib/types';

interface SubserviceGridProps {
  subservices: Subservice[];
}

export function SubserviceGrid({ subservices }: SubserviceGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {subservices.map((subservice) => (
        <Link
          key={subservice.id}
          href={`/subservices/${subservice.slug}`}
          className="card group block overflow-hidden"
        >
          {/* Image */}
          {subservice.imageUrl && (
            <div className="relative mb-4 -mx-6 -mt-6 h-48 overflow-hidden rounded-t-2xl bg-primary/10">
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              {/* Placeholder for image - will show default if image not found */}
              <div className="flex h-full items-center justify-center text-4xl">
                📐
              </div>
            </div>
          )}

          {/* Content */}
          <div>
            <h3 className="mb-2 text-lg font-bold text-dark transition-colors group-hover:text-accent">
              {subservice.nameHe}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {subservice.shortDescriptionHe}
            </p>

            {/* Arrow indicator */}
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
              <span>צפו במוצרים</span>
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
          </div>
        </Link>
      ))}
    </div>
  );
}
