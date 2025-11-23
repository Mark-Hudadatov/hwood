# HWOOD - נגרות תעשייתית ועיבוד CNC

> **Modern, production-ready Next.js website for HWOOD**
> Industrial carpentry, CNC machining, modular systems, and furniture facades

---

## 🎯 Project Overview

This is a consolidated Next.js App Router project built from scratch with:

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** with custom pastel B2B design system
- ✅ **Full RTL support** for Hebrew
- ✅ **Responsive design** (mobile → desktop → ultrawide)
- ✅ **SEO optimized** with metadata
- ✅ **Server Components** for optimal performance
- ✅ **Mock data layer** ready for backend integration

---

## 🎨 Design System

### Colors (Pastel B2B Theme)

```
Primary:    #D9DCE1 (Misty Stone)
Secondary:  #EFEAE4 (Warm Linen)
Accent:     #B9C7B7 (Powder Sage)
Background: #F8F7F5 (Porcelain White)
Muted:      #8C929B (Cool Slate)
Dark:       #2D3748 (Dark text)
```

### Typography

- System fonts with excellent Hebrew support
- **TODO:** Add Heebo or IBM Plex Sans Hebrew when network/CDN is available

---

## 📁 Project Structure

```
hwood/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (RTL, Header, Footer)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles with RTL
│   ├── services/
│   │   └── [serviceSlug]/page.tsx
│   ├── subservices/
│   │   └── [subserviceSlug]/page.tsx
│   ├── products/
│   │   └── [productSlug]/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
│
├── components/                    # Reusable React components
│   ├── Header.tsx                # Sticky navigation
│   ├── Footer.tsx                # Site footer
│   ├── Hero.tsx                  # Full-width hero
│   ├── Breadcrumbs.tsx           # Navigation trail
│   ├── ServiceCard.tsx           # Service display card
│   ├── ServiceList.tsx           # Services grid
│   ├── SubserviceGrid.tsx        # Subservices grid
│   ├── ProductCard.tsx           # Product card
│   ├── ProductGrid.tsx           # Products grid
│   ├── CTASection.tsx            # Call-to-action section
│   └── SectionShell.tsx          # Section wrapper
│
├── lib/                          # Data layer & utilities
│   ├── types.ts                  # TypeScript interfaces
│   ├── services.ts               # Service mock data + selectors
│   ├── subservices.ts            # Subservice mock data + selectors
│   └── products.ts               # Product mock data + selectors
│
├── public/
│   └── images/                   # Static assets
│
├── tailwind.config.ts            # Tailwind configuration
├── next.config.mjs               # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** (recommended: 20+)
- **npm** or **yarn** or **pnpm**

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

### Type Check

```bash
npm run type-check
```

### Lint

```bash
npm run lint
```

---

## 🗺️ Navigation Structure

```
Home (/)
  ↓
Service Page (/services/[serviceSlug])
  ↓
Subservice Page (/subservices/[subserviceSlug])
  ↓
Product Page (/products/[productSlug])

Additional Pages:
- /about    → Company information
- /contact  → Contact form and details
```

### Example Navigation Flow

```
/
  → /services/cnc-machining
    → /subservices/precision-cutting
      → /products/mdf-panel-18mm
```

**Breadcrumbs Example:**
```
דף הבית > עיבוד CNC > חיתוך מדויק > לוח MDF 18 מ"מ
```

---

## 📊 Data Model

All data is currently **mocked** in the `lib/` directory and ready for backend integration.

### Core Types

```typescript
interface Service {
  id: string;
  slug: string;
  nameHe: string;
  shortDescriptionHe: string;
  descriptionHe?: string;
  icon: string;
  imageUrl?: string;
  order: number;
}

interface Subservice {
  id: string;
  slug: string;
  serviceId: string;      // FK to Service
  nameHe: string;
  shortDescriptionHe: string;
  descriptionHe?: string;
  imageUrl?: string;
  order: number;
}

interface Product {
  id: string;
  slug: string;
  subserviceId: string;   // FK to Subservice
  nameHe: string;
  shortDescriptionHe: string;
  descriptionHe?: string;
  imageUrl: string;
  dimensions?: string;
  material?: string;
  code?: string;
  specifications?: ProductSpecification[];
  order: number;
}
```

### Data Selectors

All pages use **selector functions** to fetch data:

```typescript
// Services
getServiceBySlug(slug: string): Service | undefined
getAllServices(): Service[]
getServiceById(id: string): Service | undefined

// Subservices
getSubserviceBySlug(slug: string): Subservice | undefined
getSubservicesForService(serviceId: string): Subservice[]
getSubserviceById(id: string): Subservice | undefined

// Products
getProductBySlug(slug: string): Product | undefined
getProductsForSubservice(subserviceId: string): Product[]
getProductById(id: string): Product | undefined
searchProducts(query: string): Product[]
```

---

## 🔌 Backend Integration

### TODO: Replace Mock Data

When connecting to your backend:

1. **Replace data files** (`lib/services.ts`, `lib/subservices.ts`, `lib/products.ts`)
2. **Update selectors** to call API endpoints instead of filtering mock arrays
3. **Add error handling** and loading states
4. **Implement data fetching** in Server Components:

```typescript
// Example: app/services/[serviceSlug]/page.tsx
export default async function ServicePage({ params }) {
  const { serviceSlug } = await params;

  // TODO: Replace with API call
  // const service = await fetch(`/api/services/${serviceSlug}`).then(r => r.json())
  const service = getServiceBySlug(serviceSlug);

  if (!service) notFound();

  return (/* JSX */);
}
```

### API Endpoints to Implement

```
GET /api/services              → List all services
GET /api/services/:slug        → Get service by slug
GET /api/subservices           → List all subservices
GET /api/subservices/:slug     → Get subservice by slug
GET /api/products              → List all products
GET /api/products/:slug        → Get product by slug
POST /api/contact              → Submit contact form
```

---

## 🎨 Styling Guidelines

### Using Tailwind Classes

```tsx
// Buttons
<button className="btn btn-primary">Primary Action</button>
<button className="btn btn-secondary">Secondary Action</button>

// Cards
<div className="card">
  {/* Card content */}
</div>

// Section Container
<div className="section-container">
  {/* Max-width container with responsive padding */}
</div>

// Links
<a className="link">Hover Link</a>
```

### RTL Support

All layouts automatically support RTL. For special cases:

```tsx
// Flip icons in RTL
<svg className="flip-rtl" />

// Force LTR for specific content
<input type="email" dir="ltr" />
```

---

## ✅ Features Implemented

- ✅ Full Hebrew RTL support
- ✅ Responsive design (mobile-first)
- ✅ Sticky navigation with scroll effect
- ✅ Breadcrumb navigation
- ✅ SEO metadata on all pages
- ✅ Server Components for performance
- ✅ TypeScript strict mode
- ✅ Mock data with clean selectors
- ✅ Pastel B2B design system
- ✅ Semantic HTML
- ✅ Accessible focus states
- ✅ Smooth transitions and hover effects

---

## 📋 TODO: Future Enhancements

### High Priority

- [ ] **Add Hebrew font**: Integrate Heebo or IBM Plex Sans Hebrew from Google Fonts
- [ ] **Backend integration**: Connect to REST API or GraphQL
- [ ] **Contact form**: Add form validation and submission handler
- [ ] **Image optimization**: Add actual product images with Next.js Image component
- [ ] **Search functionality**: Implement product/service search
- [ ] **Admin panel**: Add content management

### Medium Priority

- [ ] **Mobile menu**: Implement hamburger menu for mobile
- [ ] **Product filtering**: Add filters (material, price, category)
- [ ] **Google Maps**: Integrate map on contact page
- [ ] **Analytics**: Add Google Analytics or similar
- [ ] **Sitemap**: Auto-generate sitemap.xml from data
- [ ] **i18n**: Add English translation support

### Low Priority

- [ ] **Dark mode**: Add theme switcher
- [ ] **Blog**: Add blog/news section
- [ ] **Testimonials**: Customer reviews section
- [ ] **Gallery**: Project showcase gallery
- [ ] **PDF quotes**: Generate PDF quotes from forms

---

## 🛠️ Development Notes

### Component Guidelines

1. **Always read files before editing** them
2. **Use TypeScript types** for all props
3. **Server Components by default**, add `'use client'` only when needed
4. **Keep components small and focused** (~100 lines max)
5. **Use semantic HTML** (`<section>`, `<article>`, `<nav>`)

### Code Quality

- **Zero ESLint errors** in build
- **Strict TypeScript** mode enabled
- **Consistent naming**: kebab-case for files, PascalCase for components
- **Hebrew text only** in UI (no placeholder English)

---

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📄 License

Proprietary - HWOOD © 2024

---

## 🤝 Contributing

This is a private project. For questions or suggestions, contact the development team.

---

## 📞 Support

**HWOOD Contact:**
- 📱 Phone: 050-123-4567
- 📧 Email: info@hwood.co.il
- 🌐 Website: [hwood.co.il](https://hwood.co.il)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
