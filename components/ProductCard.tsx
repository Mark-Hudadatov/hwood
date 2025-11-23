/**
 * ProductCard - Display product with image and details
 * Clickable card linking to product detail page
 */

import Link from 'next/link';
import { Product } from '@/lib/types';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="card group block overflow-hidden"
    >
      {/* Product Image */}
      <div className="relative mb-4 -mx-6 -mt-6 h-56 overflow-hidden rounded-t-2xl bg-secondary">
        <div className="absolute inset-0 bg-gradient-to-t from-dark/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        {/* Placeholder for product image */}
        <div className="flex h-full items-center justify-center text-6xl">
          🪵
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h3 className="mb-2 text-lg font-bold text-dark transition-colors group-hover:text-accent">
          {product.nameHe}
        </h3>

        <p className="mb-3 text-sm text-muted leading-relaxed">
          {product.shortDescriptionHe}
        </p>

        {/* Product Details */}
        <div className="space-y-1 text-xs text-muted">
          {product.material && (
            <div className="flex items-center gap-2">
              <span className="font-medium text-dark">חומר:</span>
              <span>{product.material}</span>
            </div>
          )}
          {product.dimensions && (
            <div className="flex items-center gap-2">
              <span className="font-medium text-dark">מידות:</span>
              <span>{product.dimensions}</span>
            </div>
          )}
          {product.code && (
            <div className="flex items-center gap-2">
              <span className="font-medium text-dark">קוד:</span>
              <span className="font-mono">{product.code}</span>
            </div>
          )}
        </div>

        {/* Arrow indicator */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
          <span>פרטים נוספים</span>
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
  );
}
