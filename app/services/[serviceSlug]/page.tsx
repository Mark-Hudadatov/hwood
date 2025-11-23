/**
 * Service Detail Page - Shows service info and its subservices
 * Dynamic route: /services/[serviceSlug]
 */

import { notFound } from 'next/navigation';
import { getServiceBySlug } from '@/lib/services';
import { getSubservicesForService } from '@/lib/subservices';
import { Hero } from '@/components/Hero';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SubserviceGrid } from '@/components/SubserviceGrid';
import { CTASection } from '@/components/CTASection';
import { SectionShell } from '@/components/SectionShell';
import type { Metadata } from 'next';

interface ServicePageProps {
  params: Promise<{
    serviceSlug: string;
  }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    return {
      title: 'שירות לא נמצא - HWOOD',
    };
  }

  return {
    title: `${service.nameHe} - HWOOD`,
    description: service.shortDescriptionHe,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  // 404 if service not found
  if (!service) {
    notFound();
  }

  const subservices = getSubservicesForService(service.id);

  // Breadcrumbs
  const breadcrumbs = [
    { labelHe: 'דף הבית', href: '/' },
    { labelHe: service.nameHe, href: `/services/${service.slug}` },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Hero */}
      <Hero
        titleHe={service.nameHe}
        subtitleHe={service.descriptionHe || service.shortDescriptionHe}
        variant="minimal"
        ctaText="בואו נדבר"
        ctaHref="/contact"
      />

      {/* Subservices Section */}
      {subservices.length > 0 ? (
        <SectionShell>
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">
              תתי-שירותים
            </h2>
            <p className="text-lg text-muted">
              בחרו את השירות המדויק שאתם מחפשים
            </p>
          </div>

          <SubserviceGrid subservices={subservices} />
        </SectionShell>
      ) : (
        <SectionShell>
          <div className="text-center">
            <p className="text-lg text-muted">
              פרטים נוספים בקרוב. צרו קשר לפרטים נוספים.
            </p>
          </div>
        </SectionShell>
      )}

      {/* CTA */}
      <CTASection
        titleHe={`מעוניינים ב${service.nameHe}?`}
        descriptionHe="שלחו פרטים ונחזור אליכם בהקדם"
      />
    </>
  );
}
