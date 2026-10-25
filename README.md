# Clove Dental - Root Canal Treatment (RCT) Responsive Landing Page

A responsive, high-converting dental healthcare landing page created based on the Figma design specifications.

Built strictly using **HTML5**, **CSS3 (Vanilla CSS)**, and **JavaScript (Vanilla JS)** without any external frameworks or libraries as required by the assignment guidelines.

---

## 🚀 Live Demo & Deployment

This project is 100% static and ready to be deployed instantly on any of the following platforms:

### Option 1: GitHub Pages (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/clove-dental-landing-page.git
   git branch -M main
   git push -u origin main
   ```
2. Go to **Repository Settings** > **Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch**, choose `main` and `/ (root)`, then click **Save**.
4. Your site will be live at `https://YOUR_USERNAME.github.io/clove-dental-landing-page/`.

### Option 2: Netlify (Drag & Drop or CLI)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop this folder (`task1`) directly into the browser.
3. Your live URL will be generated in under 10 seconds!

### Option 3: Vercel
1. Run `npx vercel` in the project directory, or import your GitHub repository into [Vercel](https://vercel.com).
2. Choose default settings and click **Deploy**.

---

## 🛠️ Technology Stack

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<section>`, `<main>`, `<footer>`, `<dialog>`, form inputs with validation).
- **CSS3**: Custom design tokens, Flexbox, CSS Grid, smooth transitions, mobile-first responsive media queries, glassmorphism effects, and accessible color contrast.
- **JavaScript (Vanilla JS)**: Pure DOM manipulation, event delegation, dynamic captcha generation, modal state handling, accordion toggles, and toast alerts.

---

## 📋 Sections Implemented from Figma

The assignment requires selecting **any 6 sections**. This project implements **all major sections** for complete visual and functional fidelity:

1. **Top Announcement Ribbon**: 14th Anniversary special offer notice with direct link.
2. **Sticky Header & Navigation**: Clove Dental branding, navigation links, call button, and mobile hamburger drawer.
3. **Hero Section & Consultation Card**: Value proposition, certified endodontist highlight, and lead capture form with live input validation and dynamic captcha.
4. **Key Stats & Trust Bar**: 600+ Modern Clinics, 1,200+ Dentists, 30L+ Happy Patients, 99.2% RCT Success Rate, 50,000+ Implants.
5. **Types of Root Canal Treatments**: Side-by-side cards for *Root Canal Treatment* and *Re-Root Canal Treatment*, featuring anatomical 3D illustrations, treatment subtypes, starting prices, and direct consultation CTAs.
6. **Real Smiles, Real Transformations**: Before/After patient treatment results (Sagar Mehta, Kavita Sharma, Sneha Joshi, Viren Dayal) with case study viewer.
7. **Why Choose Clove Dental ?**: Interactive accordion showcasing *DORI A.I. Chair*, *10x Safety & 4-Step Sterilization*, *Certified Endodontists*, *World-Class Equipment*, and *Rigid Audits*, accompanied by clinic staff imagery.
8. **What Our Patients Say (Patient Stories)**: Patient cards with video/story preview modal.
9. **Inline Quick Appointment Strip**: Rapid booking form with mobile and captcha support.
10. **Safety, Precision, and Innovation**: Cards highlighting sterile protocols, AI dental chairs, and AIPS technology with "Learn More" dialog triggers.
11. **Google Reviews**: 4.9-star rating summary (1.6 Lakh+ reviews) and verified patient testimonial cards.
12. **Find Us Across India**: Interactive city selector (Delhi NCR, Bangalore, Mumbai, Chennai, Hyderabad, Punjab, Pune, Ahmedabad) that updates clinic counts and displays clinic storefronts.
13. **14th Anniversary Dental Wellness Plan (₹399)**: High-contrast promotional offer with benefits checklist and instant coupon activation.
14. **Frequently Asked Questions (FAQs)**: Collapsible accordion answering top patient queries regarding pain, doctors, crowns, and timings.
15. **Site Footer**: Helpline callout, treatment links, city directories, and legal/privacy links.
16. **Mobile Sticky Action Bar**: Bottom-docked quick call and booking bar for high conversion on mobile devices.

---

## 🎯 Interactivity Features

- **Interactive Booking Modal**: Any "Book Appointment", "Get Free Consultation", or service card automatically launches the booking modal with the relevant service pre-selected and default appointment date set to tomorrow.
- **Booking Confirmation Flow**: Submitting the form generates a unique reference ID (e.g. `CLV-39530`) and shows an appointment confirmation screen.
- **Dynamic Captcha**: Randomized 4-digit security code with one-click refresh and input validation.
- **Smooth Mobile Drawer**: Sliding drawer navigation with overlay dismiss.
- **Interactive City Selector**: Instant filtering and clinic count updates for top Indian metropolitan cities.
- **Accordion Toggle Behavior**: Clean, single-open accordion behavior for both "Why Choose Clove" and FAQ sections.
- **Toast Notifications**: Floating feedback alerts on interactive actions.

---

## 📱 Mobile Responsiveness

- Breakpoints configured for mobile devices (`<640px`), tablets (`768px - 1024px`), and desktops (`>1024px`).
- Flexible touch targets (minimum 44px x 44px) for all buttons and interactive controls.
- Fast loading with local image assets and zero external framework overhead.
