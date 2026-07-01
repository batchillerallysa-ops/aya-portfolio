# 🚀 Quick Reference Guide

## Portfolio Structure at a Glance

```
YOUR PORTFOLIO WEBSITE
│
├─ 🏠 HOME (Hero Section)
│  └─ Welcome with headline and CTA
│
├─ 👤 ABOUT 
│  └─ Your professional background
│
├─ 💼 SERVICES
│  └─ What you offer and expertise
│
├─ 🛠️ TOOLS (Platforms)
│  ├─ Zapier
│  ├─ Make.com  
│  ├─ n8n
│  └─ GoHighLevel
│
├─ 📈 EXPERIENCE
│  └─ Work history and achievements
│
├─ 🎯 WORK (Projects Portfolio)
│  ├─ 4 Zapier Projects
│  ├─ 2 Make.com Projects
│  ├─ 4 n8n Projects
│  └─ 2 GoHighLevel Projects
│
├─ ⭐ TESTIMONIALS
│  └─ Client feedback & social proof
│
└─ 📞 CONTACT
   └─ How to reach you
```

## File Quick Links

### 🎨 Branding & Navigation
- **Logo** - `/components/logo.tsx` ← **Shows "Allysa Batchiller"**
- **Navigation Menu** - `/components/site-header.tsx` ← **Add sections here**
- **Footer** - `/components/site-footer.tsx`

### 📄 Portfolio Sections  
- **Home/Hero** - `/components/hero.tsx`
- **About** - `/components/about.tsx`
- **Services** - `/components/services.tsx`
- **Experience** - `/components/experience.tsx`
- **Work/Projects** - `/components/work.tsx`
- **Testimonials** - `/components/testimonials.tsx`
- **Contact** - `/components/contact.tsx`

### 🤖 Automation Projects
```
/lib/projects/
├─ 🔌 zapier/index.ts        (4 projects)
├─ 🎨 make/index.ts          (2 projects)
├─ ⚙️  n8n/index.ts          (4 projects)
└─ 📞 ghl/index.ts           (2 projects)
```

### 📚 Documentation
- `PORTFOLIO_STRUCTURE.md` - Full architecture details
- `lib/projects/README.md` - How to add/manage projects
- `IMPLEMENTATION_SUMMARY.md` - What was done
- `QUICK_REFERENCE.md` - This file!

## Common Tasks

### ✏️ Edit Your Name in Logo
**File**: `/components/logo.tsx`
```tsx
Allysa<span className="text-primary"> Batchiller</span>
```

### 🔗 Add Navigation Link
**File**: `/components/site-header.tsx`
```ts
const NAV_LINKS = [
  { label: "Your Section", href: "/#your-section" },
  // ... other links
]
```

### ➕ Add New Project to Zapier
**File**: `/lib/projects/zapier/index.ts`
```ts
export const zapierProjects: Project[] = [
  {
    slug: "your-project-slug",
    title: "Your Project Title",
    tool: "zapier",
    tagline: "One line description",
    // ... complete the rest
  },
]
```

### 📝 Update About Section
**File**: `/components/about.tsx`
- Edit text content directly
- Update your background details
- Modify expertise descriptions

### 👥 Add Testimonial
**File**: `/components/testimonials.tsx`
- Add new testimonial object
- Include client name and quote
- Add professional context

### 📬 Update Contact Info
**File**: `/components/contact.tsx`
- Email: `allysa.batachiller57@gmail.com` (just updated!)
- Phone number
- Social links

## Project Types

### Zapier Projects (4)
1. Content Repurposing Pipeline
2. Gmail Attachment Auto-Sorter  
3. Lead Enrichment & CRM Flow
4. Asana-Salesforce CRM Workflow Sync

### Make.com Projects (2)
1. RAG AI Agent for Customer Support
2. Automated Export of Xero Transactions to Asana

### n8n Projects (4)
1. AI Jobs Scraper + Resume Optimizer
2. Facebook AI Agent for Customer Support
3. Weather Forecast Email Digest
4. YouTube & Reels Content Repurposing

### GoHighLevel Projects (2)
1. Lead Capture with Instant Follow-ups
2. Survey Response → Asana Task Automation

## Navigation Structure

```
Logo (Top Left)
↓
Navigation Menu:
├─ About ────────→ /#about
├─ Services ─────→ /#services
├─ Experience ───→ /#experience
├─ Work ─────────→ /#work
└─ Testimonials ─→ /#testimonials
└─ [Let's talk CTA] → /#contact
```

## Dev Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Check for TypeScript errors
npm run type-check

# Lint code
npm run lint
```

## Email Updated ✅
- **Old**: batchiller.allysa@gmail.com
- **New**: allysa.batachiller57@gmail.com
- **Location**: `/components/contact.tsx`

## Design System

- **Primary Color**: Used for accents (like "Batchiller" in logo)
- **Theme**: Dark mode by default
- **Fonts**: Space Grotesk (headings), Inter (body), Geist Mono (code)
- **Animations**: Firefly background & cursor effects

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design
- Dark theme optimized

## Performance
- ✅ Next.js 16.2.6 with Turbopack
- ✅ Optimized images
- ✅ Code splitting
- ✅ Static generation where possible

---

**Quick Start**: 
1. Edit sections in `/components/`
2. Add projects in `/lib/projects/[platform]/`
3. Update navigation in `/components/site-header.tsx`
4. Run `npm run dev` to preview

**Your Portfolio**: Allysa Batchiller | Automation Specialist
