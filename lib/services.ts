/**
 * Mock Services Data
 * TODO: Replace with API calls when backend is ready
 */

import { Service } from './types';

export const services: Service[] = [
  {
    id: '1',
    slug: 'cnc-machining',
    nameHe: 'עיבוד CNC',
    shortDescriptionHe: 'חיתוך, קידוח וכרסום מדויק בטכנולוגיית CNC מתקדמת',
    descriptionHe: 'שירותי עיבוד CNC מתקדמים עם דיוק מקסימלי. אנו מציעים חיתוך, קידוח וכרסום של לוחות עץ, MDF ופורמייקה בכל הגדלים והעוביים.',
    icon: '⚙️',
    imageUrl: '/images/cnc-machining.jpg',
    order: 1,
  },
  {
    id: '2',
    slug: 'modular-systems',
    nameHe: 'מערכות מודולריות',
    shortDescriptionHe: 'פתרונות מודולריים חכמים למטבחים וארונות',
    descriptionHe: 'ייצור מודולים סטנדרטיים ומותאמים אישית למטבחים, ארונות וחדרי אמבטיה. פתרונות גמישים שמאפשרים התאמה מושלמת לכל חלל.',
    icon: '🧩',
    imageUrl: '/images/modular-systems.jpg',
    order: 2,
  },
  {
    id: '3',
    slug: 'furniture-facades',
    nameHe: 'חזיתות רהיטים',
    shortDescriptionHe: 'חזיתות MDF מעוצבות ופרופילי אלומיניום איכוtiים',
    descriptionHe: 'ייצור חזיתות רהיטים מ-MDF לצבע עם פרזול אלומיניום איכותי. מגוון עיצובים קלאסיים ומודרניים להתאמה מושלמת לכל סגנון עיצובי.',
    icon: '🚪',
    imageUrl: '/images/furniture-facades.jpg',
    order: 3,
  },
  {
    id: '4',
    slug: 'custom-carpentry',
    nameHe: 'נגרות מותאמת',
    shortDescriptionHe: 'פתרונות נגרות בהתאמה אישית מלאה',
    descriptionHe: 'שירותי נגרות מקצועיים עם התאמה אישית מלאה. מפרויקטים קטנים ועד פרויקטים מורכבים בקנה מידה גדול.',
    icon: '🔨',
    imageUrl: '/images/custom-carpentry.jpg',
    order: 4,
  },
];

/**
 * Get service by slug
 * @param slug - Service slug identifier
 * @returns Service object or undefined
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/**
 * Get all services sorted by order
 * @returns Array of all services
 */
export function getAllServices(): Service[] {
  return [...services].sort((a, b) => a.order - b.order);
}

/**
 * Get service by ID
 * @param id - Service ID
 * @returns Service object or undefined
 */
export function getServiceById(id: string): Service | undefined {
  return services.find((service) => service.id === id);
}
