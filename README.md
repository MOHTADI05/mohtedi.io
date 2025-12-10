# Mohtadi Marmouri - Portfolio Website

A modern, responsive portfolio website with stunning parallax animations and dark theme design.

## 🌟 Features

- **Smooth Parallax Animations** - Multi-layer parallax effects throughout the site
- **Dark Theme Design** - Deep green (#123513) accents with cloud-white/beige highlights
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Glass Morphism UI** - Modern soft-glass cards with subtle shadows
- **Particle Background** - Interactive particle system using Particles.js
- **Smooth Scrolling** - Elegant navigation with section transitions
- **Interactive Blog** - Filterable blog section with category sorting
- **Contact Form** - Functional contact form with validation
- **SEO Optimized** - Meta tags and semantic HTML structure

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
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles and animations
├── js/
│   └── main.js            # JavaScript functionality
├── assets/
│   ├── profile.jpg        # Profile picture
│   ├── Mohtadi_Marmouri_CV.pdf  # CV/Resume
│   └── blog/              # Blog post images
│       ├── ai-fintech.jpg
│       ├── data-pipeline.jpg
│       ├── devops.jpg
│       ├── studies.jpg
│       ├── internship.jpg
│       └── neural-networks.jpg
└── README.md              # This file
```

## 🖼️ Assets Setup

### Required Images

Place the following images in the specified directories:

1. **Profile Picture** - `assets/profile.jpg` (recommended: 500x500px, square)
2. **Blog Images** - `assets/blog/` directory (recommended: 800x400px each)
   - ai-fintech.jpg
   - data-pipeline.jpg
   - devops.jpg
   - studies.jpg
   - internship.jpg
   - neural-networks.jpg
3. **CV/Resume** - `assets/Mohtadi_Marmouri_CV.pdf`

### Placeholder Images

If you don't have images yet, you can use placeholder services:
- https://via.placeholder.com/500x500 (for profile)
- https://via.placeholder.com/800x400 (for blog images)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox & Grid
- **JavaScript (ES6+)** - Interactive functionality
- **Particles.js** - Particle background effects
- **AOS (Animate On Scroll)** - Scroll animations
- **Font Awesome** - Icon library
- **Google Fonts** - Inter & JetBrains Mono fonts

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🎯 Sections

1. **Hero Section** - Name, tagline, CTA buttons, floating code snippets
2. **About Me** - Biography, academic journey timeline
3. **Projects** - Showcase of major projects with detailed descriptions
4. **Skills & Services** - Technical expertise and services offered
5. **Blog** - Articles on AI/ML, Data Engineering, DevOps, etc.
6. **Contact** - Contact form, info, and interactive map
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

The contact form is currently set up to display success messages. To integrate with a backend:

1. Update the form submission in `js/main.js`
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

## 🚀 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select branch and root folder
4. Your site will be live at `https://yourusername.github.io/mohtedi.io`

### Netlify

1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/`
4. Deploy!

### Vercel

1. Import your GitHub repository
2. Framework Preset: Other
3. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Mohtadi Marmouri**
- Email: mohtadimarmouri@gmail.com
- Phone: +49 15510 553818
- Location: Offenbach am Main, Germany
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

- Map may require Google Maps API key for production
- Blog images are placeholders and need to be replaced
- Contact form needs backend integration for email sending

## 🔮 Future Enhancements

- [ ] Dark/Light mode toggle
- [ ] Multi-language support
- [ ] Blog CMS integration
- [ ] Project case studies with full pages
- [ ] Testimonials section
- [ ] Downloadable resources
- [ ] Newsletter subscription
- [ ] Search functionality

---

**Built with ❤️ by Mohtadi Marmouri | 2025**

