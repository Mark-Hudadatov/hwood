/**
 * Subservice Detail Page - Shows subservice info and its products
 * Dynamic route: /subservices/[subserviceSlug]
 */

import { notFound } from 'next/navigation';
import { getSubserviceBySlug } from '@/lib/subservices';
import { getServiceById } from '@/lib/services';
import { getProductsForSubservice } from '@/lib/products';
import { Hero } from '@/components/Hero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductGrid } from '@/components/ProductGrid';
import { CTASection } from '@/components/CTASection';
import { SectionShell } from '@/components/SectionShell';
import type { Metadata } from 'next';

interface SubservicePageProps {
  params: Promise<{
    subserviceSlug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: SubservicePageProps): Promise<Metadata> {
  const { subserviceSlug } = await params;
  const subservice = getSubserviceBySlug(subserviceSlug);

  if (!subservice) {
    return {
      title: 'תת-שירות לא נמצא - HWOOD',
    };
  }

  return {
    title: `${subservice.nameHe} - HWOOD`,
    description: subservice.shortDescriptionHe,
  };
}

export default async function SubservicePage({
  params,
}: SubservicePageProps) {
  const { subserviceSlug } = await params;
  const subservice = getSubserviceBySlug(subserviceSlug);

  // 404 if subservice not found
  if (!subservice) {
    notFound();
  }

  const service = getServiceById(subservice.serviceId);
  const products = getProductsForSubservice(subservice.id);

  // Breadcrumbs
  const breadcrumbs = [
    { labelHe: 'דף הבית', href: '/' },
    ...(service
      ? [{ labelHe: service.nameHe, href: `/services/${service.slug}` }]
      : []),
    {
      labelHe: subservice.nameHe,
      href: `/subservices/${subservice.slug}`,
    },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero */}
      <Hero
        titleHe={subservice.nameHe}
        subtitleHe={subservice.descriptionHe || subservice.shortDescriptionHe}
        variant="minimal"
        ctaText="בואו נדבר"
        ctaHref="/contact"
      />

      {/* Products Section */}
      {products.length > 0 ? (
        <SectionShell>
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">
              המוצרים שלנו
            </h2>
            <p className="text-lg text-muted">
              גלו את מגוון המוצרים והפתרונות שאנו מציעים
            </p>
          </div>

          <ProductGrid products={products} />
        </SectionShell>
      ) : (
        <SectionShell>
          <div className="text-center">
            <p className="text-lg text-muted">
              מוצרים בקרוב. צרו קשר לפרטים נוספים.
            </p>
          </div>
        </SectionShell>
      )}

      {/* CTA */}
      <CTASection
        titleHe={`מעוניינים ב${subservice.nameHe}?`}
        descriptionHe="שלחו תוכניות וקבלו הצעת מחיר מדויקת"
      />
    </>
  );
}
