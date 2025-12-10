# 🚀 Deployment Guide

Complete guide for deploying your portfolio website to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All images are optimized and in place
- [ ] CV/Resume PDF is uploaded
- [ ] Personal information is updated in HTML
- [ ] Social media links are correct
- [ ] Contact email is updated
- [ ] Google Maps location is correct
- [ ] All placeholder content is replaced
- [ ] Website tested on mobile and desktop
- [ ] All links are working
- [ ] No console errors in browser

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

#### Steps:

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mohtedi.io.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Select `main` branch
   - Folder: Select `/ (root)`
   - Click "Save"

3. **Custom Domain (Optional)**
   - Add `CNAME` file with your domain
   - Configure DNS settings with your domain provider
   - Add domain in GitHub Pages settings

4. **Access Your Site**
   - URL: `https://YOUR_USERNAME.github.io/mohtedi.io`
   - Custom domain: `https://your-domain.com`

**Pros**: Free, easy, good for static sites, HTTPS included
**Cons**: Public repository required (for free tier)

---

### Option 2: Netlify (Recommended for Beginners)

#### Steps:

1. **Sign Up** at [netlify.com](https://netlify.com)

2. **Deploy via Git**
   - Click "Add new site" > "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `/`
   - Click "Deploy site"

3. **Or Deploy via Drag & Drop**
   - Drag your project folder to Netlify
   - Instant deployment!

4. **Custom Domain**
   - Go to Site settings > Domain management
   - Add custom domain
   - Follow DNS configuration instructions

**Pros**: Auto SSL, continuous deployment, free tier generous, easy rollbacks
**Cons**: None for static sites

---

### Option 3: Vercel

#### Steps:

1. **Sign Up** at [vercel.com](https://vercel.com)

2. **Deploy**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

3. **Or Use GitHub Integration**
   - Import your repository
   - Select framework preset: Other
   - Deploy!

**Pros**: Fast, great performance, free tier, automatic HTTPS
**Cons**: None significant

---

### Option 4: Traditional Web Hosting

For shared hosting (GoDaddy, Hostinger, Bluehost, etc.):

1. **Upload via FTP**
   - Use FileZilla or similar FTP client
   - Connect to your hosting server
   - Upload all files to `public_html` or `www` directory

2. **File Structure on Server**
   ```
   public_html/
   ├── index.html
   ├── css/
   ├── js/
   ├── assets/
   ├── README.md
   └── ...
   ```

3. **Access Your Site**
   - URL: `https://your-domain.com`

**Pros**: Full control, can add backend later
**Cons**: Costs money, requires FTP setup

---

### Option 5: Cloudflare Pages

#### Steps:

1. **Sign Up** at [pages.cloudflare.com](https://pages.cloudflare.com)

2. **Create Project**
   - Connect Git repository
   - Build settings:
     - Framework preset: None
     - Build command: (empty)
     - Build output directory: `/`
   - Deploy!

**Pros**: Excellent performance, free, global CDN
**Cons**: Requires Cloudflare account

---

## ⚙️ Optimization Before Deployment

### 1. Minify CSS and JavaScript

**Using Online Tools**:
- [CSS Minifier](https://cssminifier.com/)
- [JavaScript Minifier](https://javascript-minifier.com/)

**Using Build Tools**:
```bash
# Install minify tools
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o css/style.min.css css/style.css

# Minify JS
uglifyjs js/main.js -o js/main.min.js -c -m
```

Then update HTML to use minified versions:
```html
<link rel="stylesheet" href="css/style.min.css">
<script src="js/main.min.js"></script>
```

### 2. Optimize Images

```bash
# Using ImageMagick
for img in assets/blog/*.jpg; do
    convert "$img" -quality 85 -strip "${img%.jpg}_optimized.jpg"
done
```

Or use online tools:
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)

### 3. Enable Compression

Create `.htaccess` file (for Apache servers):

```apache
# Enable Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE text/javascript
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 4. Add robots.txt

Create `robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://your-domain.com/sitemap.xml
```

### 5. Create sitemap.xml

Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://your-domain.com/</loc>
        <lastmod>2025-12-08</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
    <!-- Add more pages if you have them -->
</urlset>
```

---

## 🔒 Security Headers

Add to your hosting configuration or use meta tags:

### For Netlify/Vercel

Create `netlify.toml` or `vercel.json`:

**netlify.toml**:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
```

**vercel.json**:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 📊 Analytics Setup

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add before `</head>` in HTML:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🧪 Testing After Deployment

### Performance Testing
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### SEO Testing
- [Google Search Console](https://search.google.com/search-console)
- [Bing Webmaster Tools](https://www.bing.com/webmasters)

### Mobile Testing
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- Test on real devices

### Accessibility
- [WAVE](https://wave.webaim.org/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

---

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths are correct (case-sensitive on Linux)
- Verify images are uploaded
- Check browser console for 404 errors

### CSS/JS Not Loading
- Clear browser cache (Ctrl+F5)
- Check file paths
- Verify CDN links are accessible

### Particles Not Working
- Check internet connection (uses CDN)
- Verify Particles.js script is loaded
- Check browser console for errors

### Map Not Showing
- May need Google Maps API key for production
- Check iframe src is correct
- Verify location coordinates

---

## 🔄 Continuous Deployment

### Automatic Deployments with Git

Once set up with Netlify/Vercel/GitHub Pages:

```bash
# Make changes
git add .
git commit -m "Update portfolio content"
git push

# Site automatically rebuilds and deploys!
```

---

## 📈 Post-Deployment

1. **Submit to Search Engines**
   - [Google Search Console](https://search.google.com/search-console)
   - [Bing Webmaster Tools](https://www.bing.com/webmasters)

2. **Share Your Portfolio**
   - LinkedIn
   - Twitter
   - GitHub README
   - Email signature

3. **Monitor**
   - Check analytics regularly
   - Monitor for errors
   - Update content periodically

---

## 🆘 Need Help?

- Check deployment platform documentation
- Review browser console for errors
- Contact: mohtadimarmouri@gmail.com

---

**Good luck with your deployment! 🚀**

