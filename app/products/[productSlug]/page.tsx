/**
 * Product Detail Page - Shows product details, specs, and CTA
 * Dynamic route: /products/[productSlug]
 */

import { notFound } from 'next/navigation';
import { getProductBySlug } from '@/lib/products';
import { getSubserviceById } from '@/lib/subservices';
import { getServiceById } from '@/lib/services';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CTASection } from '@/components/CTASection';
import { SectionShell } from '@/components/SectionShell';
import type { Metadata } from 'next';

interface ProductPageProps {
  params: Promise<{
    productSlug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);

  if (!product) {
    return {
      title: 'מוצר לא נמצא - HWOOD',
    };
  }

  return {
    title: `${product.nameHe} - HWOOD`,
    description: product.shortDescriptionHe,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);

  // 404 if product not found
  if (!product) {
    notFound();
  }

  const subservice = getSubserviceById(product.subserviceId);
  const service = subservice ? getServiceById(subservice.serviceId) : null;

  // Breadcrumbs
  const breadcrumbs = [
    { labelHe: 'דף הבית', href: '/' },
    ...(service
      ? [{ labelHe: service.nameHe, href: `/services/${service.slug}` }]
      : []),
    ...(subservice
      ? [
          {
            labelHe: subservice.nameHe,
            href: `/subservices/${subservice.slug}`,
          },
        ]
      : []),
    { labelHe: product.nameHe, href: `/products/${product.slug}` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Product Detail Section */}
      <SectionShell>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <div className="overflow-hidden rounded-2xl bg-secondary shadow-soft">
              <div className="flex aspect-square items-center justify-center text-9xl">
                🪵
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="mb-4 text-4xl font-bold text-dark md:text-5xl">
                {product.nameHe}
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-muted">
                {product.descriptionHe || product.shortDescriptionHe}
              </p>

              {/* Quick Info */}
              <div className="mb-8 space-y-3 rounded-xl bg-primary/10 p-6">
                {product.material && (
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-dark">חומר:</span>
                    <span className="text-muted">{product.material}</span>
                  </div>
                )}
                {product.dimensions && (
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-dark">מידות:</span>
                    <span className="text-muted">{product.dimensions}</span>
                  </div>
                )}
                {product.code && (
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-dark">קוד מוצר:</span>
                    <span className="font-mono text-muted">{product.code}</span>
                  </div>
                )}
              </div>

              {/* Specifications Table */}
              {product.specifications && product.specifications.length > 0 && (
                <div className="mb-8">
                  <h2 className="mb-4 text-2xl font-bold text-dark">
                    מפרט טכני
                  </h2>
                  <div className="overflow-hidden rounded-xl border border-primary/20">
                    <table className="w-full">
                      <tbody>
                        {product.specifications.map((spec, index) => (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? 'bg-secondary/20' : 'bg-white'
                            }`}
                          >
                            <td className="px-6 py-3 font-semibold text-dark">
                              {spec.labelHe}
                            </td>
                            <td className="px-6 py-3 text-muted">
                              {spec.valueHe}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/contact"
                  className="btn btn-primary flex-1 justify-center text-lg"
                >
                  בקשו הצעת מחיר
                </a>
                <a
                  href="tel:+972-50-123-4567"
                  className="btn btn-secondary flex-1 justify-center text-lg"
                >
                  התקשרו עכשיו
                </a>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Related Products CTA */}
      <CTASection
        titleHe="מעוניינים במוצרים נוספים?"
        descriptionHe="גלו את מגוון הפתרונות הנוספים שלנו"
        buttonText="חזרה לכל המוצרים"
        buttonHref={
          subservice ? `/subservices/${subservice.slug}` : '/#services'
        }
      />
    </>
  );
}
