# Aero Sign & Print - Futuristic Website

A modern, responsive, and visually stunning website for Aero Sign & Print - a professional signage and printing services company.

![Aero Sign & Print](./public/logo.svg)

## 🚀 Features

### Design & UI/UX
- **Futuristic Modern Design** with gradient accents and smooth animations
- **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- **Brand Colors**: Pink (#d91277), Yellow (#f9c411), Blue (#2492d1)
- **Smooth Animations** with hover effects and transitions
- **Custom Scrollbar** with gradient colors
- **Interactive Elements** throughout the site

### Pages & Sections

#### Homepage Includes:
1. **Navigation Bar** - Sticky nav with dropdown menus and mobile hamburger
2. **Hero Section** - Animated headline with gradient text and CTAs
3. **Why Choose Us** - 6 feature cards with icons and stats
4. **Services Section** - 6 main service categories with links to detail pages
5. **CTA Sections** - Two variations (gradient and light)
6. **Stats Section** - Key business metrics with animations
7. **Testimonials** - Interactive carousel with client reviews
8. **Contact Section** - Form with contact cards and map placeholder
9. **Footer** - Complete footer with links and social media

#### Service Detail Pages
- Dynamic routing for all 6 service categories
- Detailed breakdown of each service
- Features and benefits lists
- Related services suggestions
- Contact CTAs

### All Services Covered

1. **Business Signs**: 3D Lettering, Light Boxes, Pylon Signs, Pole Signs, Mobile Signs, Interior Signage
2. **Large Format Printing**: Lawn Signs, Sandwich Boards, Parking Signs, Vinyl Lettering, Flags, Posters, Decals
3. **Digital Signs**: LED Signs, Media Trucks, Interactive Kiosks
4. **Commercial Printing**: Business Cards, Brochures, Calendars, Menus, T-Shirts, and more
5. **Vehicle Wraps**: Car, Truck & Van Wraps
6. **Website Design**: Custom Web Development

## 🛠️ Technologies

- **Next.js 16.0.0** (App Router)
- **Tailwind CSS 4.0** (Inline theme)
- **Lucide React** (Icons)
- **Framer Motion** (Ready for advanced animations)
- **Geist Font** (Google Fonts)

## 📁 Project Structure

```
aerosign/
├── public/
│   ├── logo.svg
│   └── images/
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   └── services/[category]/page.js
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── WhyChooseUs.js
│   │   ├── Services.js
│   │   ├── CTASection.js
│   │   ├── Stats.js
│   │   ├── Testimonials.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   └── Button.js
│   └── data/
│       └── services.js
```

## 🚀 Getting Started

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization Guide

### 1. Update Logo
Replace `public/logo.svg` with your actual company logo. The current logo is a placeholder.

### 2. Modify Colors
Edit `src/app/globals.css`:
```css
:root {
  --primary-pink: #d91277;
  --primary-yellow: #f9c411;
  --primary-blue: #2492d1;
}
```

### 3. Update Contact Info
Edit contact details in:
- `src/components/Contact.js`
- `src/components/Footer.js`

### 4. Add Services
Modify or add services in `src/data/services.js`

### 5. Connect Contact Form
The contact form in `src/components/Contact.js` currently shows a success message. To make it functional:
- Add a backend API endpoint
- Integrate with email services (SendGrid, Mailgun, EmailJS)
- Or connect to a form service (Formspree, Netlify Forms)

### 6. Add Google Maps
Replace the map placeholder in `src/components/Contact.js` with:
```jsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="400"
  style={{border:0}}
  allowFullScreen
  loading="lazy"
/>
```

### 7. Update Social Media
Add your social media URLs in `src/components/Footer.js`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px

## ⚡ Performance Features

- Next.js Image optimization
- Static page generation
- CSS optimization with Tailwind
- Smooth scroll behavior
- Lazy loading ready
- Optimized animations

## 📝 Production Checklist

- [ ] Replace logo with actual company logo
- [ ] Add real service images to `public/images/`
- [ ] Configure contact form backend
- [ ] Add Google Maps integration
- [ ] Update all social media links
- [ ] Add Google Analytics
- [ ] Update meta descriptions for SEO
- [ ] Test all forms and interactions
- [ ] Configure domain and hosting
- [ ] Add SSL certificate
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Test on all devices and browsers

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Deploy to Other Platforms

- Netlify
- AWS Amplify
- Digital Ocean
- Or any Node.js hosting

## 📄 License

© 2024 Aero Sign & Print. All rights reserved.

---

**Built with ❤️ using Next.js and Tailwind CSS**
