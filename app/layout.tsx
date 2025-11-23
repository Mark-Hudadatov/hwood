/**
 * Root Layout - RTL Hebrew with system fonts
 * Wraps all pages with Header and Footer
 * NOTE: Uses system fonts for better performance and Hebrew support
 * TODO: Add Google Fonts (Heebo or IBM Plex Sans Hebrew) when network is available
 */

import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HWOOD - נגרות תעשייתית ועיבוד CNC',
  description:
    'מובילים בתחום הנגרות התעשייתית, עיבוד CNC ומערכות מודולריות. איכות, דיוק ושירות ללא פשרות.',
  keywords: [
    'נגרות תעשייתית',
    'עיבוד CNC',
    'מערכות מודולריות',
    'חזיתות רהיטים',
    'HWOOD',
  ],
  authors: [{ name: 'HWOOD' }],
  openGraph: {
    title: 'HWOOD - נגרות תעשייתית ועיבוד CNC',
    description:
      'מובילים בתחום הנגרות התעשייתית, עיבוד CNC ומערכות מודולריות',
    type: 'website',
    locale: 'he_IL',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
