/**
 * Breadcrumbs - Navigation trail component
 * Shows hierarchical path: Home > Service > Subservice > Product
 */

import Link from 'next/link';
import { BreadcrumbItem } from '@/lib/types';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="ניווט מסלול"
      className="section-container py-4"
    >
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className="flex items-center gap-2">
              {!isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {item.labelHe}
                  </Link>
                  <span className="text-muted">{'<'}</span>
                </>
              ) : (
                <span className="font-medium text-dark">{item.labelHe}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
