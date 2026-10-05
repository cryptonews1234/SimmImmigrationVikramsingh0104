# Simmi Immigration — Next.js

Premium Canadian immigration consulting website. Next.js (Pages Router), JavaScript, Tailwind CSS, Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

### Uplift blog

The `/blog` index and `/blog/[slug]` article pages sync published content from Uplift using Incremental Static Regeneration. Add `UPLIFT_API_TOKEN` to `.env.local` for local development and to the Vercel project for Production, Preview, and Development. The token is server-only and must never use a `NEXT_PUBLIC_` prefix.

## Structure

| Folder | Purpose |
| --- | --- |
| `pages/` | Routes. `index.js` composes the full homepage. |
| `components/layout/` | Header, sticky nav, mobile menu, footer, page layout. |
| `components/home/` | Homepage sections (hero → contact). |
| `components/ui/` | Reusable primitives: Button, Card, Icon, Accordion, Timeline, Field, forms. |
| `components/common/` | Seo, ThemeToggle, Reveal. |
| `context/` | ThemeContext — dark/light with localStorage persistence and no flash on load. |
| `data/` | All business content: company, navigation, services, programs, FAQs, reviews, process. |
| `seo/` | seo.config.js, buildMeta.js, schema.js (Organization, LocalBusiness, FAQ, Breadcrumb). |
| `lib/motion.js` | Shared Framer Motion variants. |
| `hooks/`, `utils/` | useScrolled, useLockBodyScroll, cn, validation. |

## Editing content

Change text, services, FAQs or contact details in `data/` only — no component edits needed.

## Images

Hero and section images load from Unsplash via `next/image` (allowed in `next.config.js`).
For production, download the photos into `public/images/` and swap the `src` values to local paths,
or add your own licensed photography.

## Adding a page

```jsx
import Seo from '@/components/common/Seo';
import Section from '@/components/ui/Section';

export default function SuperVisa() {
  return (
    <>
      <Seo title="Super Visa Canada" description="..." path="/services/super-visa" />
      <Section>...</Section>
    </>
  );
}
```

The layout, header, footer, theme and SEO helpers are inherited automatically.

## Form

`components/ui/ConsultationForm.jsx` validates client-side and currently simulates a submit.
Point `handleSubmit` at an API route (`pages/api/contact.js`) or your CRM/email service.
