# Allysa Batchiller Portfolio Structure

This document outlines the complete organization of your automation portfolio website.

## Website Sections

Your portfolio is organized into the following sections:

### 1. **Home/Hero** (`/app/page.tsx` → `Hero` component)
- Welcome section with your headline
- Call-to-action to explore projects

### 2. **About** (`/components/about.tsx`)
- Your professional background
- Key expertise and experience overview
- Professional summary

### 3. **Services** (`/components/services.tsx`)
- The services you offer
- Automation capabilities and specializations
- Value propositions

### 4. **Tools/Platforms** (`/components/tools-marquee.tsx`)
- Showcase of platforms you specialize in:
  - Zapier
  - Make.com
  - n8n
  - GoHighLevel (GHL)

### 5. **Work Experience** (`/components/experience.tsx`)
- Your professional work history
- Previous roles and achievements
- Years of experience and specializations

### 6. **Previous Works/Projects** (`/components/work.tsx`)
- Showcase of completed automation projects
- Portfolio of case studies
- Interactive project gallery

### 7. **Testimonials** (`/components/testimonials.tsx`)
- Client/colleague feedback
- Social proof of your expertise
- Success stories

### 8. **Contact** (`/components/contact.tsx`)
- Contact information (email, phone, social links)
- Call-to-action for inquiries
- Easy ways to reach you

### 9. **Footer** (`/components/site-footer.tsx`)
- Additional links and information
- Copyright and attribution

## Projects Organization

All automation projects are organized by platform in `/lib/projects/`:

### **Zapier Projects** (`/lib/projects/zapier/`)
Contains 4 Zapier automation projects:
1. Content Repurposing Pipeline
2. Gmail Attachment Auto-Sorter
3. Lead Enrichment & CRM Flow
4. Asana-Salesforce CRM Workflow Sync

### **Make.com Projects** (`/lib/projects/make/`)
Contains 2 Make automation projects:
1. RAG AI Agent for Customer Support
2. Automated Export of Xero Transactions to Asana

### **n8n Projects** (`/lib/projects/n8n/`)
Contains 4 n8n automation projects:
1. AI Jobs Scraper + Resume Optimizer
2. Facebook AI Agent for Customer Support
3. Weather Forecast Email Digest
4. YouTube & Reels Content Repurposing

### **GoHighLevel (GHL) Projects** (`/lib/projects/ghl/`)
Contains 2 GHL automation projects:
1. Lead Capture with Instant Follow-ups
2. Survey Response → Asana Task Automation

## Brand Elements

### Logo
- **Component**: `/components/logo.tsx`
- **Display**: Your full name "Allysa Batchiller" 
- **Style**: Clean, professional typography with "Batchiller" highlighted in primary color
- **Location**: Top-left of the header, links to home

### Navigation
- **Component**: `/components/site-header.tsx`
- **Menu Items**: About, Services, Experience, Work, Testimonials
- **CTA Button**: "Let's talk" → Directs to Contact section
- **Mobile**: Hamburger menu for responsive design

### Design System
- **Font**: Space Grotesk (headings), Inter (body), Geist Mono (code)
- **Color Scheme**: Dark theme with customizable accents
- **Background**: Animated firefly background effects
- **Cursor**: Custom firefly cursor animation

## Sections - Detailed View

```
Home (Hero)
    ↓
About (Your Background)
    ↓
Services (What You Offer)
    ↓
Tools (Platforms You Specialize In)
    ↓
Experience (Work History)
    ↓
Work (Portfolio of Projects)
    │
    ├─→ Zapier Projects
    ├─→ Make Projects
    ├─→ n8n Projects
    └─→ GHL Projects
    ↓
Testimonials (Social Proof)
    ↓
Contact (Get in Touch)
    ↓
Footer (Legal & Links)
```

## Route Structure

- `/` - Main portfolio page with all sections
- `/zapier` - Zapier projects showcase page
- `/make` - Make.com projects showcase page
- `/n8n` - n8n projects showcase page
- `/ghl` - GoHighLevel projects showcase page
- `/projects/[slug]` - Individual project case study page
- `/projects/[platform]/[slug]` - Platform-specific project case study

## File Organization

```
project-root/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main home page
│   ├── zapier/page.tsx         # Zapier projects page
│   ├── make/page.tsx           # Make projects page
│   ├── n8n/page.tsx            # n8n projects page
│   ├── ghl/page.tsx            # GHL projects page
│   ├── projects/[slug]/page.tsx        # Project detail page
│   └── projects/[platform]/[slug]/page.tsx
├── components/
│   ├── logo.tsx                # Brand logo with your name
│   ├── site-header.tsx         # Navigation header
│   ├── hero.tsx                # Home section
│   ├── about.tsx               # About section
│   ├── services.tsx            # Services section
│   ├── experience.tsx          # Experience section
│   ├── work.tsx                # Previous works section
│   ├── testimonials.tsx        # Testimonials section
│   ├── contact.tsx             # Contact section
│   ├── site-footer.tsx         # Footer
│   ├── tools-marquee.tsx       # Tools showcase
│   ├── glassmorphic-nav.tsx    # Platform navigation
│   └── ui/                     # shadcn/ui components
├── lib/
│   ├── projects.ts             # Main projects aggregator
│   ├── projects/
│   │   ├── README.md           # Projects organization guide
│   │   ├── zapier/index.ts     # Zapier projects
│   │   ├── make/index.ts       # Make projects
│   │   ├── n8n/index.ts        # n8n projects
│   │   └── ghl/index.ts        # GHL projects
│   └── utils.ts                # Utility functions
└── public/                      # Static assets
```

## Adding New Content

### To Add a New Section
1. Create a new component in `/components/`
2. Import it in `/app/page.tsx`
3. Add it to the main layout with appropriate ID for linking
4. Update navigation if needed

### To Add a New Project
1. Choose the appropriate platform folder in `/lib/projects/`
2. Add your project to the platform's `index.ts` file
3. Follow the existing `Project` type structure
4. The project will automatically appear in the portfolio

### To Customize the Logo
Edit `/components/logo.tsx` - currently displays your full name with styled branding

## Maintenance

- **Projects**: Update in `/lib/projects/[platform]/index.ts`
- **Sections**: Update component files in `/components/`
- **Navigation**: Update `/components/site-header.tsx`
- **Meta data**: Update `/app/layout.tsx` for SEO and branding

---

**Portfolio by**: Allysa Batchiller  
**Specialization**: Workflow & AI Automations  
**Platforms**: Zapier, Make.com, n8n, GoHighLevel
