/**
 * Mock Products Data
 * TODO: Replace with API calls when backend is ready
 */

import { Product } from './types';

export const products: Product[] = [
  // Precision Cutting products
  {
    id: 'prod-1',
    slug: 'mdf-panel-3mm',
    subserviceId: 'sub-1',
    nameHe: 'לוח MDF 3 מ"מ חתוך',
    shortDescriptionHe: 'לוח MDF איכותי בעובי 3 מ"מ, חתוך לפי מידות',
    descriptionHe: 'לוח MDF איכותי בעובי 3 מ"מ עם חיתוך מדויק לפי מידות הלקוח. מתאים לגבים, תחתיות מגירות ופרויקטים קלים.',
    imageUrl: '/images/mdf-panel-3mm.jpg',
    dimensions: '280×207 ס"מ',
    material: 'MDF',
    code: 'MDF-3MM-CUT',
    specifications: [
      { labelHe: 'עובי', valueHe: '3 מ"מ' },
      { labelHe: 'מידות מקסימליות', valueHe: '280×207 ס"מ' },
      { labelHe: 'דיוק חיתוך', valueHe: '±0.1 מ"מ' },
      { labelHe: 'גימור', valueHe: 'חלק' },
    ],
    order: 1,
  },
  {
    id: 'prod-2',
    slug: 'mdf-panel-18mm',
    subserviceId: 'sub-1',
    nameHe: 'לוח MDF 18 מ"מ חתוך',
    shortDescriptionHe: 'לוח MDF איכותי בעובי 18 מ"מ, חתוך לפי מידות',
    descriptionHe: 'לוח MDF איכותי בעובי 18 מ"מ עם חיתוך מדויק לפי מידות. מתאים למדפים, דלתות וחזיתות רהיטים.',
    imageUrl: '/images/mdf-panel-18mm.jpg',
    dimensions: '280×207 ס"מ',
    material: 'MDF',
    code: 'MDF-18MM-CUT',
    specifications: [
      { labelHe: 'עובי', valueHe: '18 מ"מ' },
      { labelHe: 'מידות מקסימליות', valueHe: '280×207 ס"מ' },
      { labelHe: 'דיוק חיתוך', valueHe: '±0.1 מ"מ' },
      { labelHe: 'צפיפות', valueHe: '720 ק"ג/מ"ק' },
    ],
    order: 2,
  },
  {
    id: 'prod-3',
    slug: 'plywood-cut',
    subserviceId: 'sub-1',
    nameHe: 'לוח עץ רב-שכבתי חתוך',
    shortDescriptionHe: 'לוחות עץ רב-שכבתי באיכות פרימיום',
    descriptionHe: 'לוחות עץ רב-שכבתי (פנטום) חתוכים במדויק. זמינים בעוביים 9, 12, 15, 18 מ"מ.',
    imageUrl: '/images/plywood-cut.jpg',
    dimensions: '250×125 ס"מ',
    material: 'עץ רב-שכבתי',
    code: 'PLY-CUT',
    specifications: [
      { labelHe: 'עוביים זמינים', valueHe: '9, 12, 15, 18 מ"מ' },
      { labelHe: 'מידות מקסימליות', valueHe: '250×125 ס"מ' },
      { labelHe: 'דרגת איכות', valueHe: 'A/B' },
    ],
    order: 3,
  },

  // CNC Milling products
  {
    id: 'prod-4',
    slug: '3d-carved-panel',
    subserviceId: 'sub-2',
    nameHe: 'פאנל מגולף תלת-ממדי',
    shortDescriptionHe: 'פאנלים מגולפים בטכנולוגיית CNC',
    descriptionHe: 'פאנלים מגולפים תלת-ממדיים בעיצובים מורכבים. מתאימים לדלתות, חזיתות ודפנות דקורטיביות.',
    imageUrl: '/images/3d-carved-panel.jpg',
    material: 'MDF / עץ מלא',
    code: '3D-CARVE',
    specifications: [
      { labelHe: 'טכנולוגיה', valueHe: 'כרסום CNC תלת-ממדי' },
      { labelHe: 'עומק כרסום מקסימלי', valueHe: 'עד 30 מ"מ' },
      { labelHe: 'דיוק', valueHe: '±0.05 מ"מ' },
    ],
    order: 1,
  },
  {
    id: 'prod-5',
    slug: 'decorative-pattern',
    subserviceId: 'sub-2',
    nameHe: 'תבניות דקורטיביות',
    shortDescriptionHe: 'תבליטים ותבניות מעוצבות',
    descriptionHe: 'כרסום תבניות דקורטיביות מורכבות - תבליטים, חריטות ועיצובים גיאומטריים.',
    imageUrl: '/images/decorative-pattern.jpg',
    material: 'MDF / עץ',
    code: 'DEC-PATTERN',
    order: 2,
  },

  // Kitchen Modules products
  {
    id: 'prod-6',
    slug: 'base-cabinet-60',
    subserviceId: 'sub-4',
    nameHe: 'ארון תחתון 60 ס"מ',
    shortDescriptionHe: 'ארון תחתון סטנדרטי רוחב 60 ס"מ',
    descriptionHe: 'ארון תחתון מודולרי למטבח ברוחב 60 ס"מ. כולל מדפים פנימיים ומוכן להתקנת דלתות.',
    imageUrl: '/images/base-cabinet-60.jpg',
    dimensions: '60×57×82 ס"מ',
    material: 'MDF 18 מ"מ',
    code: 'BASE-60',
    specifications: [
      { labelHe: 'רוחב', valueHe: '60 ס"מ' },
      { labelHe: 'עומק', valueHe: '57 ס"מ' },
      { labelHe: 'גובה', valueHe: '82 ס"מ' },
      { labelHe: 'מספר מדפים', valueHe: '1 מדף מתכוונן' },
    ],
    order: 1,
  },
  {
    id: 'prod-7',
    slug: 'wall-cabinet-80',
    subserviceId: 'sub-4',
    nameHe: 'ארון עליון 80 ס"מ',
    shortDescriptionHe: 'ארון עליון סטנדרטי רוחב 80 ס"מ',
    descriptionHe: 'ארון עליון מודולרי למטבח ברוחב 80 ס"מ עם 2 מדפים מתכווננים.',
    imageUrl: '/images/wall-cabinet-80.jpg',
    dimensions: '80×32×70 ס"מ',
    material: 'MDF 18 מ"מ',
    code: 'WALL-80',
    specifications: [
      { labelHe: 'רוחב', valueHe: '80 ס"מ' },
      { labelHe: 'עומק', valueHe: '32 ס"מ' },
      { labelHe: 'גובה', valueHe: '70 ס"מ' },
      { labelHe: 'מספר מדפים', valueHe: '2 מדפים מתכווננים' },
    ],
    order: 2,
  },

  // MDF Facades products
  {
    id: 'prod-8',
    slug: 'shaker-door',
    subserviceId: 'sub-6',
    nameHe: 'דלת שייקר MDF',
    shortDescriptionHe: 'דלת בסגנון שייקר קלאסי',
    descriptionHe: 'דלת MDF בעיצוב שייקר קלאסי, מוכנה לצבע. פרזול אלומיניום איכותי וגימור מושלם.',
    imageUrl: '/images/shaker-door.jpg',
    material: 'MDF 18 מ"מ',
    code: 'SHAKER-DOOR',
    specifications: [
      { labelHe: 'עיצוב', valueHe: 'שייקר קלאסי' },
      { labelHe: 'עובי', valueHe: '18 מ"מ' },
      { labelHe: 'גימור', valueHe: 'מוכן לצבע' },
      { labelHe: 'פרזול', valueHe: 'אלומיניום' },
    ],
    order: 1,
  },
  {
    id: 'prod-9',
    slug: 'modern-flat-door',
    subserviceId: 'sub-6',
    nameHe: 'דלת חלקה מודרנית',
    shortDescriptionHe: 'דלת MDF חלקה במראה מינימליסטי',
    descriptionHe: 'דלת MDF חלקה במראה מודרני ומינימליסטי. זמינה במגוון מידות.',
    imageUrl: '/images/modern-flat-door.jpg',
    material: 'MDF 18 מ"מ',
    code: 'FLAT-DOOR',
    specifications: [
      { labelHe: 'עיצוב', valueHe: 'חלק מודרני' },
      { labelHe: 'עובי', valueHe: '18 מ"מ' },
      { labelHe: 'גימור', valueHe: 'חלק לצבע' },
    ],
    order: 2,
  },

  // Aluminum Profiles products
  {
    id: 'prod-10',
    slug: 'aluminum-frame-profile',
    subserviceId: 'sub-7',
    nameHe: 'פרופיל אלומיניום למסגרת',
    shortDescriptionHe: 'פרופיל אלומיניום למסגרות זכוכית',
    descriptionHe: 'פרופיל אלומיניום איכותי למסגרות זכוכית וחזיתות מודרניות. זמין במגוון צבעים.',
    imageUrl: '/images/aluminum-frame.jpg',
    material: 'אלומיניום',
    code: 'ALU-FRAME',
    specifications: [
      { labelHe: 'חומר', valueHe: 'אלומיניום 6063-T5' },
      { labelHe: 'גימור', valueHe: 'אנודייז / אבקה' },
      { labelHe: 'צבעים זמינים', valueHe: 'שחור, לבן, שמפניה' },
    ],
    order: 1,
  },
];

/**
 * Get product by slug
 * @param slug - Product slug identifier
 * @returns Product object or undefined
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/**
 * Get all products for a specific subservice
 * @param subserviceId - Parent subservice ID
 * @returns Array of products belonging to the subservice
 */
export function getProductsForSubservice(subserviceId: string): Product[] {
  return products
    .filter((product) => product.subserviceId === subserviceId)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get product by ID
 * @param id - Product ID
 * @returns Product object or undefined
 */
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

/**
 * Get all products
 * @returns Array of all products
 */
export function getAllProducts(): Product[] {
  return [...products].sort((a, b) => a.order - b.order);
}

/**
 * Search products by name (Hebrew)
 * @param query - Search query
 * @returns Array of matching products
 */
export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.nameHe.toLowerCase().includes(lowerQuery) ||
      product.shortDescriptionHe.toLowerCase().includes(lowerQuery)
  );
}
