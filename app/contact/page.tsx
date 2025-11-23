/**
 * Contact Page - Contact form and company information
 * Static page: /contact
 */

import { Hero } from '@/components/Hero';
import { SectionShell } from '@/components/SectionShell';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'צור קשר - HWOOD',
  description:
    'צרו קשר עם HWOOD לקבלת הצעת מחיר, ייעוץ מקצועי או כל שאלה. אנחנו כאן בשבילכם.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        titleHe="צור קשר"
        subtitleHe="נשמח לענות על כל שאלה, לתת ייעוץ מקצועי ולספק הצעת מחיר מדויקת"
        variant="minimal"
        ctaText={undefined}
      />

      <SectionShell>
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-dark">
                שלחו הודעה
              </h2>

              {/* TODO: Replace with actual form with backend integration */}
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-primary/30 bg-white px-4 py-3 text-dark transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="הזינו את שמכם המלא"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    אימייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-primary/30 bg-white px-4 py-3 text-dark transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="your@email.com"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    טלפון
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full rounded-xl border border-primary/30 bg-white px-4 py-3 text-dark transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="050-1234567"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    נושא
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full rounded-xl border border-primary/30 bg-white px-4 py-3 text-dark transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">בחרו נושא</option>
                    <option value="quote">הצעת מחיר</option>
                    <option value="cnc">עיבוד CNC</option>
                    <option value="modular">מערכות מודולריות</option>
                    <option value="facades">חזיתות רהיטים</option>
                    <option value="custom">נגרות מותאמת</option>
                    <option value="other">אחר</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-dark"
                  >
                    הודעה
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full rounded-xl border border-primary/30 bg-white px-4 py-3 text-dark transition-colors focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="ספרו לנו על הפרויקט שלכם או השאלה שלכם..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full text-lg"
                >
                  שלחו הודעה
                </button>

                <p className="text-center text-sm text-muted">
                  נחזור אליכם תוך 24 שעות בימי עבודה
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-dark">
                פרטי התקשרות
              </h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="card">
                  <div className="mb-2 text-3xl">📞</div>
                  <h3 className="mb-2 font-semibold text-dark">טלפון</h3>
                  <a
                    href="tel:+972-50-123-4567"
                    className="text-lg text-accent hover:underline"
                    dir="ltr"
                  >
                    050-123-4567
                  </a>
                  <p className="mt-1 text-sm text-muted">
                    ראשון-חמישי: 08:00-17:00
                    <br />
                    שישי: 08:00-13:00
                  </p>
                </div>

                {/* Email */}
                <div className="card">
                  <div className="mb-2 text-3xl">✉️</div>
                  <h3 className="mb-2 font-semibold text-dark">אימייל</h3>
                  <a
                    href="mailto:info@hwood.co.il"
                    className="text-lg text-accent hover:underline"
                    dir="ltr"
                  >
                    info@hwood.co.il
                  </a>
                  <p className="mt-1 text-sm text-muted">
                    נשיב תוך 24 שעות בימי עבודה
                  </p>
                </div>

                {/* Address */}
                <div className="card">
                  <div className="mb-2 text-3xl">📍</div>
                  <h3 className="mb-2 font-semibold text-dark">כתובת</h3>
                  <p className="text-muted">
                    אזור התעשייה
                    <br />
                    ישראל
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    מגיעים אלינו? יש לתאם מראש
                  </p>
                </div>

                {/* WhatsApp */}
                <div className="card bg-accent/10">
                  <div className="mb-2 text-3xl">💬</div>
                  <h3 className="mb-2 font-semibold text-dark">WhatsApp</h3>
                  <a
                    href="https://wa.me/972501234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary inline-flex"
                  >
                    שלחו הודעה בווטסאפ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Map Section (Placeholder) */}
      <SectionShell className="bg-secondary/20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-dark">מיקום</h2>
          <div className="overflow-hidden rounded-2xl bg-primary/20 p-12">
            <p className="text-lg text-muted">
              🗺️ מפה תוצג כאן לאחר אינטגרציה עם Google Maps
            </p>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
