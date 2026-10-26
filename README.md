# KhadMunshi: aapki dukaan ka digital munshi

> Fertilizer shop hai? Ab register mein nahi, mobile mein hisaab.

**KhadMunshi** is software for fertilizer, pesticide and seed shops in Pakistan and India. It keeps the farmer's udhaar khata, the bill, the stock and the supplier ledger in one place, on mobile, laptop and desktop.

This repository is the public website for KhadMunshi: a fast, server-rendered landing page plus a blog written for dealers, with free downloadable sheets. This README also explains the thinking behind it, so you can read it as an article.

**Live demo:** WhatsApp [+92 319 6165027](https://wa.me/923196165027)

---

## The problem: a khata register holds everything, and forgets everything

Walk into any khad dukaan in Punjab, Sindh, Haryana or UP and you will find the same thing behind the counter: a thick register, a calculator and a munshi who remembers more than the book does.

That setup works until it does not:

- At month-end, adding up what every farmer owes takes an evening.
- On a busy October day, a bill goes unwritten and the farmer's amount is wrong.
- The stock register and the khata are two different books, so nobody knows exactly how many bags of DAP are left.
- If the munshi is on leave, the hisaab leaves with him.

The deeper issue is that **udhaar follows the crop calendar, not the month.** A dealer gives urea and DAP on credit in October and gets paid in April or May. A system built around 30-day invoices does not fit that. A system built around the farmer does.

## The idea

A khata app should feel like the register shopkeepers already trust, with the addition work done for them.

| In the register | In KhadMunshi |
| --- | --- |
| One page per farmer, flipped by hand | Every farmer has a separate khata with bills and payments by date |
| Stock in a separate book | Saving a bill reduces stock automatically |
| Month-end total takes an evening | Lena (receivables) and Dena (payables) on one dashboard |
| Supplier statement checked by eye | Purchases and payments recorded, easy to match |
| Only on the shop counter | Mobile, laptop and desktop |

The name does the explaining: *khata* is the ledger, *munshi* is the trusted clerk who keeps it.

## What is on the website

- **Landing page** in Roman Urdu: hero, the register problem, six core features, app screens with demo data, the laptop view, a Rabi-season section, FAQ and a WhatsApp call to action.
- **Supporting pages:** `/demo` (what the live demo covers and how to book it), `/pilot` (first month free for two pilot shops, with written permission before any numbers are published), `/resources` (all free sheets) and `/about`.
- **A blog** with nine practical guides for dealers, each with a free downloadable sheet where it helps. Posts 5 and 6 (Punjab licence records, India PoS matching) carry a visible "check the official text" note, because those rules change.

| Post | Free sheet |
| --- | --- |
| Why a dated stock and sales record protects you in a DAP or urea shortage | Season stock planner |
| What records a Punjab pesticide dealer should keep for a licence inspection | none |
| Fertilizer retailers in India: matching PoS sales with your stock | none |
| A Rabi-season udhaar plan for a fertilizer dealer | Kisan udhaar tracker |
| Expiry and batch tracking for a pesticide shop | Monthly expiry list |
| Khata register, Excel or app: an honest comparison | none |
| A 5-step routine to recover udhaar from farmers | none |
| Matching your supplier ledger with the distributor statement | Supplier reconciliation sheet |
| How much urea, DAP and pesticide to stock using last year's sales | Season stock planner |

The sheets are plain `.csv` files with working formulas. Open them in Excel or Google Sheets and the "Baaki", "Halat" (green, yellow, red) and "Kitne din baqi" columns calculate themselves.

The comparison post says plainly when a register or Excel is enough. Honest comparisons earn trust, and they are what a shopkeeper actually searches for before choosing software.

## How the site is built (fast and SEO friendly)

The goal was a page that loads quickly on a mid-range phone and a patchy connection, which is how most of the audience will see it.

- **Next.js 15 (App Router) with static generation.** Every page, including each blog post, is pre-rendered to HTML at build time. The content is in the first response, so search engines and WhatsApp link previews read real text and no JavaScript has to run first.
- **About 100 kB of shared JavaScript, and no page-specific JS.** There are no client components, no analytics scripts, no sliders and no login. The FAQ uses the native `<details>` element.
- **Real photographs, optimised.** `next/image` serves AVIF or WebP at the right width, lazy-loads below the fold, and sets explicit dimensions so the layout does not jump. Only the hero image is `priority`.
- **Self-hosted font** through `next/font` with `display: swap`.
- **Structured data (JSON-LD):** `SoftwareApplication`, `Organization` and `FAQPage` on the home page, and `BlogPosting` on each article.
- **Per-page metadata:** unique titles, descriptions, canonical URLs and Open Graph tags.
- **`sitemap.xml` and `robots.txt`** are generated from the same post list, so a new post is in the sitemap as soon as it exists.
- **Blog under `/blog`**, not a separate subdomain, so its search strength helps the product page.
- **No login anywhere.** The only call to action is a WhatsApp link with a prefilled message.

### Where the demo data is, and where it is not

The app screens on the landing page are built in HTML and CSS from **demo data**: invented farmer names and amounts. They are labelled "Demo data" on the screen. Never replace them with a real customer's balance.

The photographs (a Punjab farmer, field workers, wheat at sunset, fertilizer spreading, an Indian farmer, a handwritten ledger) are free stock photos from [Pexels](https://www.pexels.com).

## Run it locally

```bash
git clone https://github.com/kamrandeveloper-code/KhadaMunshi.git
cd KhadaMunshi
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Configuration

| Variable | What it does | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Your real domain. Used for canonical URLs, the sitemap and Open Graph. | `https://khadmunshi.com` |

Set it before you deploy, for example `NEXT_PUBLIC_SITE_URL=https://khadmunshi.yourdomain.com`. If you leave the default, your sitemap will point to a domain you may not own.

The WhatsApp number and tagline live in one file: `lib/site.ts`.

## Deploy

The site is plain Next.js, so any Node host works. Vercel is the quickest:

1. Import the repository on Vercel.
2. Add `NEXT_PUBLIC_SITE_URL`.
3. Deploy, then submit `/sitemap.xml` in Google Search Console.

## Project layout

```text
app/
  page.tsx              landing page
  layout.tsx            site-wide metadata, font, header, footer
  blog/page.tsx         blog index
  blog/[slug]/page.tsx  one article, static per slug
  sitemap.ts            generated sitemap
  robots.ts             robots.txt
components/             header, footer, app screen previews
lib/site.ts             name, WhatsApp number, site URL
lib/posts.ts            blog content
public/images/          photographs
public/downloads/       free CSV sheets
```

### Add a blog post

Add one object to the `posts` array in `lib/posts.ts` (slug, title, description, date, image, body blocks). The page, the sitemap entry and the structured data are generated for you.

## Before you launch

- Search "KhadMunshi" on Google and the Play Store, and run a trademark search in Pakistan (IPO) and India. Khata apps are a crowded space.
- Set `NEXT_PUBLIC_SITE_URL` to your real domain.
- Check that the app screens in the video match your real app. Show your real screen and change the line if they differ.
- Read the Punjab licence post and the India PoS post against the current official text before you promote them. They are written as general record-keeping advice, not legal guidance.
- The case study (plan item 10) is not written, because it needs a real pilot shop. The `/pilot` page is how you recruit one. Record real before and after numbers with written permission, then publish them.
- `docs/launch-kit.md` holds the video script, captions, group posts and posting checklist, with your WhatsApp number filled in.

## Roadmap

- [ ] Real app screenshots to replace the HTML demo screens
- [ ] Case study from the first pilot shop
- [ ] Posts on licence records (Punjab) and PoS matching (India), after checking the official rules
- [ ] A standalone `.com` or `.pk` domain once the first shops are paying
- [ ] Hindi (Devanagari) and Urdu (Nastaliq) versions of the landing page

## License

Code: all rights reserved by the KhadMunshi owner until a license is added. Stock photographs belong to their photographers and are used under the [Pexels license](https://www.pexels.com/license/).
