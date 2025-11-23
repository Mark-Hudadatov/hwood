/**
 * Mock Subservices Data
 * TODO: Replace with API calls when backend is ready
 */

import { Subservice } from './types';

export const subservices: Subservice[] = [
  // CNC Machining subservices
  {
    id: 'sub-1',
    slug: 'precision-cutting',
    serviceId: '1',
    nameHe: 'חיתוך מדויק',
    shortDescriptionHe: 'חיתוך מדויק של לוחות עץ ו-MDF בכל העוביים',
    descriptionHe: 'שירותי חיתוך מדויק בעזרת מכונות CNC מתקדמות. מתאים לייצור רהיטים, דלתות וחזיתות.',
    imageUrl: '/images/precision-cutting.jpg',
    order: 1,
  },
  {
    id: 'sub-2',
    slug: 'cnc-milling',
    serviceId: '1',
    nameHe: 'כרסום CNC',
    shortDescriptionHe: 'כרסום תלת-ממדי לעיצובים מורכבים',
    descriptionHe: 'כרסום CNC מתקדם ליצירת עיצובים תלת-ממדיים, תבליטים ותבניות מורכבות.',
    imageUrl: '/images/cnc-milling.jpg',
    order: 2,
  },
  {
    id: 'sub-3',
    slug: 'drilling-services',
    serviceId: '1',
    nameHe: 'קידוח מקצועי',
    shortDescriptionHe: 'קידוח מדויק לצירים, ברגים וחיבורים',
    descriptionHe: 'שירותי קידוח מדויקים למגוון סוגי חיבורים ופתרונות הרכבה.',
    imageUrl: '/images/drilling.jpg',
    order: 3,
  },

  // Modular Systems subservices
  {
    id: 'sub-4',
    slug: 'kitchen-modules',
    serviceId: '2',
    nameHe: 'מודולים למטבח',
    shortDescriptionHe: 'מודולים סטנדרטיים ומותאמים למטבחים',
    descriptionHe: 'ייצור מודולים למטבחים בגדלים סטנדרטיים או בהתאמה אישית. כולל תחתונים, עליונים ועמודים.',
    imageUrl: '/images/kitchen-modules.jpg',
    order: 1,
  },
  {
    id: 'sub-5',
    slug: 'closet-systems',
    serviceId: '2',
    nameHe: 'מערכות ארונות',
    shortDescriptionHe: 'פתרונות מודולריים לארונות ומלתחות',
    descriptionHe: 'מערכות ארונות מודולריות גמישות עם מגוון אפשרויות חלוקה ופתרונות אחסון חכמים.',
    imageUrl: '/images/closet-systems.jpg',
    order: 2,
  },

  // Furniture Facades subservices
  {
    id: 'sub-6',
    slug: 'mdf-facades',
    serviceId: '3',
    nameHe: 'חזיתות MDF לצבע',
    shortDescriptionHe: 'חזיתות MDF מוכנות לצבע בעיצובים מגוונים',
    descriptionHe: 'חזיתות MDF איכותיות מוכנות לצבע. מגוון עיצובים קלאסיים ומודרניים עם פרזול אלומיניום איכותי.',
    imageUrl: '/images/mdf-facades.jpg',
    order: 1,
  },
  {
    id: 'sub-7',
    slug: 'aluminum-profiles',
    serviceId: '3',
    nameHe: 'פרופילי אלומיניום',
    shortDescriptionHe: 'פרופילי אלומיניום מעוצבים לחזיתות',
    descriptionHe: 'פרופילי אלומיניום איכותיים במגוון צבעים וגימורים. מתאימים לחזיתות מודרניות ומינימליסטיות.',
    imageUrl: '/images/aluminum-profiles.jpg',
    order: 2,
  },

  // Custom Carpentry subservices
  {
    id: 'sub-8',
    slug: 'custom-furniture',
    serviceId: '4',
    nameHe: 'רהיטים בהזמנה',
    shortDescriptionHe: 'ייצור רהיטים מותאמים אישית',
    descriptionHe: 'ייצור רהיטים בהתאמה אישית מלאה לפי תכניות ומפרטים. מפרויקטים ביתיים ועד מסחריים.',
    imageUrl: '/images/custom-furniture.jpg',
    order: 1,
  },
];

/**
 * Get subservice by slug
 * @param slug - Subservice slug identifier
 * @returns Subservice object or undefined
 */
export function getSubserviceBySlug(slug: string): Subservice | undefined {
  return subservices.find((subservice) => subservice.slug === slug);
}

/**
 * Get all subservices for a specific service
 * @param serviceId - Parent service ID
 * @returns Array of subservices belonging to the service
 */
export function getSubservicesForService(serviceId: string): Subservice[] {
  return subservices
    .filter((subservice) => subservice.serviceId === serviceId)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get subservice by ID
 * @param id - Subservice ID
 * @returns Subservice object or undefined
 */
export function getSubserviceById(id: string): Subservice | undefined {
  return subservices.find((subservice) => subservice.id === id);
}

/**
 * Get all subservices
 * @returns Array of all subservices
 */
export function getAllSubservices(): Subservice[] {
  return [...subservices].sort((a, b) => a.order - b.order);
}
