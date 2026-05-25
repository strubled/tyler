# Chesapeake Junk and Hauling, LLC — Website Requirements

> **Status:** Draft — in progress. Review and update before any development begins.

---

## Business Overview

- **Business name:** Chesapeake Junk and Hauling, LLC
- **Google Business listing:** Chesapeake Junk and Hauling LLC
- **Type:** Local junk removal and hauling service
- **Primary service area:** Cecil County, MD and Harford County, MD (confirm if others should be listed)
- **Owner/operator:** Tyler

---

## Contact Information

- **Phone:** (443) 945-5258
- **Email:** chesapeakejunk@gmail.com
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

## Customer Reviews

All reviews are 5-star. 10 reviews total. Key themes to highlight on the site:
- **Fast response** — often same-day or next-day
- **Fair / affordable pricing**
- **Friendly, professional, and easy to work with**
- **Quick and efficient**

### Review text (for testimonials section):

> "Tyler was so quick to respond! I had very little time (less than 24hrs) to get some junk out of the house I sold. He got right back to me, got the job done timely. Very nice to work with, he made my worries go away! Highly recommend, only sorry I can't give more than 5 stars!"
> — Alex B.

> "Great customer service and fair pricing for junk removal in Cecil County or Harford County. Definitely would recommend!"
> — Lee S.

> "Highly recommend this company for many reasons. Came out in a reasonable time to remove a build up of items we had thrown behind our shed. Prices were very affordable and made us not have to stress on getting it taken care of with our busy [schedules]."
> — Jonathan H.

> "Above and beyond service, fair prices, and friendly staff. Punctual and efficient, wouldn't use anybody else."
> — Kevin S.

> "Very professional, polite, and gets the job done right! Highly recommend to anyone needing their junk removed!"
> — Allen G.

> "Outstanding service. Was able to pick up next day at a great price. Job was completed quickly!"
> — Ron S.

> "I found Tyler's information this morning and in less than 45 minutes of texting him he was at my property getting right to work! He's a wholesome family man who was professional, timely, courteous and kind!"
> — IAH

> "I highly recommend Chesapeake junk and hauling. Fairly priced and hard working."
> — Daniel M.

> "Tyler is the man!! I can't say enough good things about him and his work ethic! I needed stuff gone fast, and he obviously came through!"
> — Seth P.

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
