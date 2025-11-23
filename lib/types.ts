/**
 * Core TypeScript types for HWOOD data models
 * Backend-ready structure with strict typing
 */

export interface Service {
  id: string;
  slug: string;
  nameHe: string;
  shortDescriptionHe: string;
  descriptionHe?: string;
  icon: string; // Icon identifier or SVG path
  imageUrl?: string;
  order: number;
}

export interface Subservice {
  id: string;
  slug: string;
  serviceId: string; // Foreign key to Service
  nameHe: string;
  shortDescriptionHe: string;
  descriptionHe?: string;
  imageUrl?: string;
  order: number;
}

export interface Product {
  id: string;
  slug: string;
  subserviceId: string; // Foreign key to Subservice
  nameHe: string;
  shortDescriptionHe: string;
  descriptionHe?: string;
  imageUrl: string;
  dimensions?: string;
  material?: string;
  code?: string;
  price?: number;
  specifications?: ProductSpecification[];
  order: number;
}

export interface ProductSpecification {
  labelHe: string;
  valueHe: string;
}

// Breadcrumb item for navigation trail
export interface BreadcrumbItem {
  labelHe: string;
  href: string;
}

// API response types (for future backend integration)
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}
