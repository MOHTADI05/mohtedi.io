# Mohtadi Marmouri - Portfolio Website

A modern, responsive portfolio website with stunning parallax animations, dark theme design, and multi-language support. Features 9 showcased projects including live Streamlit applications for financial modeling and risk analysis.

## 🌟 Features

- **Smooth Parallax Animations** - Multi-layer parallax effects throughout the site
- **Dark Theme Design** - Deep green (#123513) accents with cloud-white/beige highlights
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Glass Morphism UI** - Modern soft-glass cards with liquid glass navbar effect
- **Multi-Language Support** - Full translation support for English, Deutsch, Français, and العربية (Arabic) with RTL support
- **Particle Background** - Interactive particle system using Particles.js
- **Smooth Scrolling** - Elegant navigation with section transitions
- **Interactive Blog** - Filterable blog section with category sorting
- **Contact Form** - Functional contact form with validation
- **Project Detail Pages** - Individual pages for each major project with slideshow effects
- **Interactive Demos** - Banking flip cards and crypto risk prediction cards
- **AI Thinking Loader** - Custom animated loader on page load
- **SEO Optimized** - Meta tags and semantic HTML structure
- **Accessibility** - ARIA labels, keyboard navigation, and screen reader support

## 🎨 Color Palette

- **Primary Green**: #123513
- **Deep Green**: #0a1f0b
- **Accent Green**: #1a4d1b
- **Neon Green**: #39ff14
- **Cloud White**: #f5f5f0
- **Beige**: #e8e4d9
- **Dark Background**: #0a0e0d

## 🚀 Quick Start

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local development server (optional, for testing)

### Installation

1. Clone or download this repository

```bash
git clonehttps://github.com/MOHTADI0505/mohtedi.io.git
cd mohtedi.io
```

2. Open `index.html` in your web browser, or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js with http-server
npx http-server

# Using PHP
php -S localhost:8000
```

3. Visit `http://localhost:8000` in your browser

## 📁 Project Structure

```
mohtedi.io/
├── index.html                    # Main HTML file
├── project-talan.html           # Data Science Intern - Talan project page
├── project-library.html          # National Library project page
├── project-dyslexia.html         # Adaptive Learning Platform project page
├── project-securassur.html       # SecurAssur Insurance Platform project page
├── project-erp.html              # ERP Modules project page
├── project-agents.html           # Multi-Agent Systems project page
├── css/
│   ├── style.css                 # Main styles and animations
│   ├── language-switcher.css    # Language switcher styles
│   ├── project-detail.css        # Project detail page styles
│   └── interactive-cards.css     # Interactive demo card styles
├── js/
│   ├── main.js                   # Main JavaScript functionality
│   ├── translations.js           # Multi-language translation system
│   └── project-slideshow.js      # Project slideshow functionality
├── assets/
│   ├── image/
│   │   ├── logo.png              # Favicon/logo
│   │   └── selfie.png            # Profile picture
│   ├── projects/                 # Project images directory
│   ├── blog/                     # Blog post images
│   │   ├── ai-fintech.jpg
│   │   ├── data-pipeline.jpg
│   │   ├── devops.jpg
│   │   ├── studies.jpg
│   │   ├── internship.jpg
│   │   └── neural-networks.jpg
│   └── Mohtadi_Marmouri_CV.pdf   # CV/Resume
└── README.md                     # This file
```

## 🖼️ Assets Setup

### Required Images

Place the following images in the specified directories:

1. **Profile Picture** - `assets/image/selfie.png` (recommended: 500x500px, square)
2. **Logo/Favicon** - `assets/image/logo.png` (recommended: 32x32px or 64x64px)
3. **Blog Images** - `assets/blog/` directory (recommended: 800x400px each)
   - ai-fintech.jpg
   - data-pipeline.jpg
   - devops.jpg
   - studies.jpg
   - internship.jpg
   - neural-networks.jpg
4. **Project Images** - `assets/projects/` directory (for project detail pages)
5. **CV/Resume** - `assets/Mohtadi_Marmouri_CV.pdf`

### Placeholder Images

If you don't have images yet, you can use placeholder services:
- https://via.placeholder.com/500x500 (for profile)
- https://via.placeholder.com/800x400 (for blog images)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Modern styling with Flexbox, Grid, and CSS Variables
- **JavaScript (ES6+)** - Interactive functionality and language switching
- **Particles.js** - Particle background effects
- **AOS (Animate On Scroll)** - Scroll animations
- **Font Awesome** - Icon library
- **Google Fonts** - Inter & JetBrains Mono fonts
- **Google Maps API** - Interactive location map
- **LocalStorage** - Language preference persistence

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎯 Sections

1. **Hero Section** - Name, tagline, CTA buttons, floating code snippets, social links
2. **About Me** - Biography, academic journey timeline, languages, location
3. **Projects** - Showcase of 9 major projects including:
   - Data Science Intern - Talan (Banking Data Analysis)
   - National Library of Tunisia Platform
   - Adaptive Learning Platform for Dyslexia
   - SecurAssur - Insurance Platform
   - ERP Modules & FinTech Dashboards
   - Multi-Agent Systems & AI Innovation
   - **Black-Scholes Options Pricing Model** (Live Streamlit App)
   - **Catastrophe Risk Pool Optimizer** (Live Streamlit App)
   - **Portfolio Optimizer MVP** (Live Streamlit App)
4. **Skills & Services** - Technical expertise and services offered with security highlights
5. **Blog** - Articles on AI/ML, Data Engineering, DevOps, etc.
6. **Contact** - Contact form, info, and interactive map (München, Germany)
7. **Footer** - Links and social media

## ⚙️ Customization

### Update Personal Information

Edit `index.html` and replace:
- Name and contact details
- Project descriptions
- Skills and services
- Social media links (GitHub, LinkedIn)

### Change Color Theme

Edit `css/style.css` root variables:

```css
:root {
    --primary-green: #123513;
    --neon-green: #39ff14;
    /* Add your custom colors */
}
```

### Modify Animations

Adjust parallax speed in `js/main.js`:

```javascript
const speed = (index + 1) * 0.15; // Modify multiplier
```

## 🌐 Multi-Language Support

The website supports 4 languages with full RTL support for Arabic:

- **English** (en) - Default
- **Deutsch** (de) - German
- **Français** (fr) - French
- **العربية** (ar) - Arabic (with RTL layout)

### Language Switcher

- Fixed position button in top-right corner (shows "LANG" or language code)
- Dropdown menu for language selection
- Language preference saved in localStorage
- Automatic RTL layout switching for Arabic
- All pages support language switching

### Adding Translations

Edit `js/translations.js` to add or modify translations. The translation system uses `data-i18n` attributes in HTML elements. All project pages also support translations.

## 🔒 Security Features Implemented

- JWT + Refresh Tokens
- MFA Email/App support ready
- Strong password policy guidelines
- RBAC (Role-Based Access Control) ready
- AES-256 Encryption standard
- HTTPS enforcement
- HttpOnly cookie tokens
- XSS protection headers
- WSS (WebSocket Secure) ready

## 📧 Contact Form Integration

The contact form is currently set up to display success messages with multi-language support. To integrate with a backend:

1. Update the form submission in `js/main.js` (function `setupContactForm()`)
2. Add your backend API endpoint
3. Configure email service (SendGrid, Mailgun, etc.)

Example:

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

The form automatically shows translated success messages based on the current language.

## 🚀 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select branch and root folder
4. Your site will be live at `https://yourusername.github.io/mohtedi.io`

**Note**: Make sure all file paths are relative (not absolute) for GitHub Pages to work correctly.

### Netlify

1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/`
4. Deploy!

### Vercel

1. Import your GitHub repository
2. Framework Preset: Other
3. Deploy!

### Custom Domain

After deployment, you can add a custom domain in your hosting provider's settings. Update the `base` tag in HTML if needed.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mohtadi Marmouri**
- Email: mohtadimarmouri@gmail.com
- Phone: +49 15510 553818
- Location: München, Germany
- LinkedIn: [linkedin.com/in/mohtadi-marmouri](https://linkedin.com/in/mohtadi-marmouri)
- GitHub: [github.com/mohtadi](https://github.com/MOHTADI05)

## 🙏 Acknowledgments

- Particles.js for the beautiful particle effects
- AOS library for smooth scroll animations
- Font Awesome for comprehensive icons
- Google Fonts for typography

## 📈 Performance Tips

- Optimize images (use WebP format when possible)
- Minify CSS and JavaScript for production
- Enable GZIP compression on server
- Use CDN for external libraries
- Implement lazy loading for images

## 🐛 Known Issues

- Map may require Google Maps API key for production (currently using embed)
- Blog images are placeholders and need to be replaced
- Contact form needs backend integration for email sending
- Some browser extensions may show console errors (filtered in code)

## 🔮 Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Blog CMS integration
- [ ] Testimonials section
- [ ] Downloadable resources
- [ ] Newsletter subscription
- [ ] Search functionality
- [ ] More interactive project demos
- [ ] Blog post detail pages

---

**Built with ❤️ by Mohtadi Marmouri | 2025**

