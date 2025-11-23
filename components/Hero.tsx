/**
 * Hero - Full-width hero section with CTA
 * Responsive and RTL-optimized
 */

import Link from 'next/link';

interface HeroProps {
  titleHe: string;
  subtitleHe: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  variant?: 'default' | 'minimal';
}

export function Hero({
  titleHe,
  subtitleHe,
  ctaText = 'קבלו הצעת מחיר',
  ctaHref = '/contact',
  backgroundImage,
  variant = 'default',
}: HeroProps) {
  const isMinimal = variant === 'minimal';

  return (
    <section
      className={`relative flex items-center justify-center ${
        isMinimal ? 'min-h-[50vh] py-20' : 'min-h-[80vh] py-24'
      } ${backgroundImage ? 'gradient-overlay' : ''}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : undefined
      }
    >
      {/* Background overlay for better text readability */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-bl from-primary/20 via-background to-secondary/30" />
      )}

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1
            className={`mb-6 font-bold leading-tight text-balance ${
              isMinimal ? 'text-4xl md:text-5xl' : 'text-5xl md:text-6xl lg:text-7xl'
            } ${backgroundImage ? 'text-white' : 'text-dark'}`}
          >
            {titleHe}
          </h1>

          <p
            className={`mb-8 leading-relaxed ${
              isMinimal ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'
            } ${backgroundImage ? 'text-white/90' : 'text-muted'}`}
          >
            {subtitleHe}
          </p>

          {ctaText && ctaHref && (
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href={ctaHref}
                className="btn btn-primary text-lg shadow-hover"
              >
                {ctaText}
              </Link>
              <Link
                href="/#services"
                className="btn btn-secondary text-lg"
              >
                גלו את השירותים שלנו
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
