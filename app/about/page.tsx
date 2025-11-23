/**
 * About Page - Company information and values
 * Static page: /about
 */

import { Hero } from '@/components/Hero';
import { SectionShell } from '@/components/SectionShell';
import { CTASection } from '@/components/CTASection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'אודות HWOOD - נגרות תעשייתית ועיבוד CNC',
  description:
    'למדו על HWOOD, החברה המובילה בתחום הנגרות התעשייתית ועיבוד CNC בישראל. ניסיון, מקצועיות ואיכות ללא פשרות.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        titleHe="אודות HWOOD"
        subtitleHe="מובילים את תחום הנגרות התעשייתית בישראל עם ניסיון, מקצועיות ואיכות ללא פשרות"
        variant="minimal"
        ctaText="בואו נדבר"
        ctaHref="/contact"
      />

      {/* Company Story */}
      <SectionShell>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-dark md:text-4xl">
            הסיפור שלנו
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p>
              HWOOD הוקמה מתוך חזון ברור - להביא לשוק הישראלי פתרונות נגרות
              תעשייתית ברמה הגבוהה ביותר, תוך שימוש בטכנולוגיות מתקדמות ושמירה על
              מסורת האומנות.
            </p>
            <p>
              עם שנות ניסיון רבות בתחום, אנו מתמחים בעיבוד CNC מדויק, ייצור
              מודולים למטבחים וארונות, וייצור חזיתות MDF איכותיות. הצוות
              המקצועי שלנו משלב ידע עמוק בחומרים עם מיומנות טכנית גבוהה.
            </p>
            <p>
              כיום, HWOOD משרתת לקוחות בכל רחבי הארץ - מנגרים פרטיים ועד
              קבלנים גדולים, ומספקת פתרונות מותאמים אישית לכל פרויקט.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* Values Section */}
      <SectionShell className="bg-secondary/20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-dark md:text-4xl">
            הערכים שלנו
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-5xl">🎯</div>
              <h3 className="mb-3 text-xl font-bold text-dark">דיוק מקסימלי</h3>
              <p className="text-muted">
                טכנולוגיית CNC מתקדמת מבטיחה דיוק של עד 0.05 מ&quot;מ בכל חיתוך
                וכרסום
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl">💎</div>
              <h3 className="mb-3 text-xl font-bold text-dark">
                איכות ללא פשרות
              </h3>
              <p className="text-muted">
                שימוש בחומרי גלם איכותיים בלבד ובקרת איכות קפדנית בכל שלב
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl">⚡</div>
              <h3 className="mb-3 text-xl font-bold text-dark">
                זמני אספקה קצרים
              </h3>
              <p className="text-muted">
                תהליכי עבודה יעילים מאפשרים לנו לספק פרויקטים במהירות
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl">🤝</div>
              <h3 className="mb-3 text-xl font-bold text-dark">שירות אישי</h3>
              <p className="text-muted">
                צוות מקצועי וזמין שמלווה אתכם מהתכנון ועד המוצר המוגמר
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl">🔧</div>
              <h3 className="mb-3 text-xl font-bold text-dark">
                מקצועיות ונסיון
              </h3>
              <p className="text-muted">
                שנות ניסיון רבות והכשרה מתמדת של הצוות שלנו
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-5xl">🌱</div>
              <h3 className="mb-3 text-xl font-bold text-dark">
                אחריות סביבתית
              </h3>
              <p className="text-muted">
                שימוש אחראי בחומרים ומחזור פסולת למען הסביבה
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Technology Section */}
      <SectionShell>
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold text-dark md:text-4xl">
            הטכנולוגיה שלנו
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p>
              אנו משקיעים ברציפות בשדרוג הציוד והטכנולוגיה שלנו. מכונות ה-CNC
              המתקדמות שלנו מאפשרות ביצוע עבודות מורכבות בדיוק גבוה ובמהירות.
            </p>
            <p>
              בנוסף, אנו משתמשים בתוכנות תכנון ועיבוד מתקדמות שמאפשרות לנו
              לתכנן ולדמות כל פרויקט לפני הביצוע, כך שהתוצאה הסופית תהיה בדיוק
              כמו שתכננתם.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* CTA */}
      <CTASection
        titleHe="רוצים לדעת עוד?"
        descriptionHe="נשמח לספר לכם עוד על החברה שלנו ואיך נוכל לעזור לכם"
      />
    </>
  );
}
