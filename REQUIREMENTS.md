# Chesapeake Junk and Hauling, LLC — Website Requirements

> **Status:** Draft — in progress. Review and update before any development begins.

---

## Business Overview

- **Business name:** Chesapeake Junk and Hauling, LLC
- **Google Business listing:** Chesapeake Junk and Hauling LLC
- **Type:** Local junk removal and hauling service
- **Primary service area:** Cecil County, MD (and surrounding areas TBD)

---

## Contact Information

- **Phone:** (443) 945-5258
- **Email:** TBD — owner will use a general email address (confirm before launch)
- Both must be prominently displayed on the site (header, footer, contact section)

---

## Services

Residential and commercial customers. Services include:

- Junk removal
- Hauling
- Furniture removal
- Appliance removal
- Debris removal
- Yard waste removal

---

## Estimate / Quote Flow

Customers need a way to submit:
- **Photos** of the job
- **Description** of the job

This can be done via:
- **Email** (with photo attachments)
- **Text message** (photo + description via SMS)

Customers can also **call or email** with general questions.

> **TODO:** Decide if the site will have a built-in form with photo upload, or just prompt users to text/email directly. A form with file upload would be the cleanest UX.

---

## Pages / Structure

**Structure:** Single-page scrolling site with one dedicated sub-page for estimate requests.

### Main page sections (scrollable):

1. **Hero** — Bold headline, logo, phone number, primary CTA button ("Get a Free Estimate")
2. **Services** — What we haul / remove
3. **How It Works** — Simple 3-step process (Submit photos → Get a quote → We haul it away)
4. **Service Area** — Cecil County, MD and surrounding areas (map optional)
5. **About Us** — Brief company story / who we are
6. **Gallery** — Before/after photos (if available)
7. **Reviews / Testimonials** — Google reviews or manual quotes
8. **Contact** — Phone number, email, and link to estimate page
9. **Footer** — Logo, contact info, copyright

### Estimate Request page (`/estimate` or `/get-a-quote`):

- Photo upload field (multiple photos)
- Description / notes text field
- Name, phone, email fields
- Submit button
- On submit: sends everything to the business email (and/or a text notification)

---

## Pricing

- **No pricing shown on the site** — all jobs are custom-quoted
- Customers request a free estimate by submitting photos and a description

---

## Visual Style / Branding

- **Logo:** Provided (white truck towing a loaded dump trailer, Maryland flag background, script "Chesapeake" wordmark in red/yellow/white — see logo file)
- **Logo colors:** Black, red, gold/yellow, white
- **Tone:** Bold, local, trustworthy, hardworking
- **Tagline / copy inspiration (from Google listing):** "Fast, affordable junk removal and hauling for residential and commercial customers. Reliable service, fair pricing, and professional results every time."
- **Color scheme:** Match the logo — dark/bold with black backgrounds, red and gold/yellow accents, white text

---

## Competitor Reference

- **Site:** https://rubbishmaryland.com
- Use as a reference for structure, content, and tone — not a direct copy

---

## Technical Requirements

> **TODO:** Answer these before development begins.

- [ ] Domain name — **not yet registered.** Need to pick and purchase one (e.g. chesapeakejunkandhauling.com)
- [ ] Does the business have existing hosting? (e.g. GoDaddy, Bluehost, Squarespace, etc.)
- [ ] Should the site be built on a CMS (e.g. WordPress, Squarespace, Webflow) or as a custom-coded site?
- [ ] Does the site need to integrate with any booking or scheduling tools?
- [ ] Google Analytics or other tracking needed?
- [ ] Google Business Profile is already set up — site URL should be added there once live

---

## Open Questions / TODOs

- [ ] Confirm final email address (owner using a general email — TBD)
- [x] Confirm full list of services — **furniture, appliances, debris, yard waste, general junk (residential & commercial)**
- [ ] Confirm service area (Cecil County only, or neighboring counties too?)
- [x] Confirm pricing strategy — **custom quotes only, no prices shown**
- [x] Confirm visual style / color scheme — **dark/bold, match the logo**
- [x] Structure — **single-page site + separate `/estimate` page for photo/description submissions**
- [ ] Confirm domain name and hosting situation
- [ ] Decide on estimate submission method (form with photo upload vs. prompt to text/email)
- [ ] Gather before/after photos for gallery section
- [ ] Gather any existing customer reviews or testimonials
