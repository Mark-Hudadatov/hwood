/**
 * Home Page - Landing page with hero, services overview, and CTA
 * Main entry point for the HWOOD website
 */

import { Hero } from '@/components/Hero';
import { ServiceList } from '@/components/ServiceList';
import { CTASection } from '@/components/CTASection';
import { SectionShell } from '@/components/SectionShell';
import { getAllServices } from '@/lib/services';

export default function HomePage() {
  const services = getAllServices();

  return (
    <>
      {/* Hero Section */}
      <Hero
        titleHe="נגרות תעשייתית בדיוק מקסימלי"
        subtitleHe="פתרונות מקצועיים לעיבוד CNC, מערכות מודולריות וחזיתות רהיטים. מהתכנון ועד המוצר המוגמר."
      />

      {/* Services Section */}
      <SectionShell id="services">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-dark md:text-5xl">
            השירותים שלנו
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted">
            מגוון פתרונות נגרות תעשייתית עם טכנולוגיה מתקדמת ודיוק מקסימלי
          </p>
        </div>

        <ServiceList services={services} />
      </SectionShell>

      {/* About Preview Section */}
      <SectionShell className="bg-secondary/30">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-dark md:text-4xl">
            למה HWOOD?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 text-4xl">⚡</div>
              <h3 className="mb-2 text-xl font-semibold text-dark">
                מהירות ביצוע
              </h3>
              <p className="text-muted">
                זמני אספקה קצרים עם שמירה על איכות גבוהה
              </p>
            </div>
            <div>
              <div className="mb-3 text-4xl">🎯</div>
              <h3 className="mb-2 text-xl font-semibold text-dark">
                דיוק מקסימלי
              </h3>
              <p className="text-muted">
                טכנולוגיית CNC מתקדמת לתוצאות מושלמות
              </p>
            </div>
            <div>
              <div className="mb-3 text-4xl">💎</div>
              <h3 className="mb-2 text-xl font-semibold text-dark">
                איכות פרימיום
              </h3>
              <p className="text-muted">
                חומרים איכותיים וביצוע ללא פשרות
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
