/**
 * Footer - Company information and links
 * RTL-optimized footer with proper Hebrew formatting
 */

import Link from 'next/link';

const footerLinks = {
  services: [
    { href: '/services/cnc-machining', labelHe: 'עיבוד CNC' },
    { href: '/services/modular-systems', labelHe: 'מערכות מודולריות' },
    { href: '/services/furniture-facades', labelHe: 'חזיתות רהיטים' },
    { href: '/services/custom-carpentry', labelHe: 'נגרות מותאמת' },
  ],
  company: [
    { href: '/about', labelHe: 'אודות HWOOD' },
    { href: '/contact', labelHe: 'צור קשר' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white/90">
      <div className="section-container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-white">HWOOD</h3>
            <p className="mb-6 text-sm leading-relaxed text-white/70">
              מובילים בתחום הנגרות התעשייתית, עיבוד CNC ומערכות מודולריות.
              <br />
              איכות, דיוק ושירות ללא פשרות.
            </p>
            <div className="space-y-2 text-sm text-white/70">
              <p>
                <span className="font-medium text-white">טלפון:</span>{' '}
                <a href="tel:+972-50-123-4567" className="link hover:text-accent">
                  050-123-4567
                </a>
              </p>
              <p>
                <span className="font-medium text-white">אימייל:</span>{' '}
                <a href="mailto:info@hwood.co.il" className="link hover:text-accent">
                  info@hwood.co.il
                </a>
              </p>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">שירותים</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-accent"
                  >
                    {link.labelHe}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">החברה</h4>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-accent"
                  >
                    {link.labelHe}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>© {currentYear} HWOOD. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}
