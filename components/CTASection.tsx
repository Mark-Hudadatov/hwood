/**
 * CTASection - Call-to-action section
 * "שלחו תוכניות וקבלו הצעת מחיר"
 */

import Link from 'next/link';

interface CTASectionProps {
  titleHe?: string;
  descriptionHe?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  titleHe = 'מוכנים להתחיל בפרויקט?',
  descriptionHe = 'שלחו תוכניות וקבלו הצעת מחיר תוך 24 שעות',
  buttonText = 'שלחו תוכניות',
  buttonHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="bg-gradient-to-br from-accent/20 via-primary/20 to-secondary/20 py-20">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-dark md:text-4xl">
            {titleHe}
          </h2>
          <p className="mb-8 text-lg text-muted md:text-xl">
            {descriptionHe}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={buttonHref}
              className="btn btn-primary text-lg shadow-hover"
            >
              {buttonText}
            </Link>
            <Link
              href="tel:+972-50-123-4567"
              className="btn btn-secondary text-lg"
            >
              או התקשרו: 050-123-4567
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
