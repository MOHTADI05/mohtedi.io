# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes!

## ⚡ Super Fast Setup

### Step 1: Setup Asset Directories (1 minute)

The directories are already created:
```
✓ assets/
✓ assets/blog/
✓ css/
✓ js/
```

### Step 2: Get Placeholder Images (2 minutes)

Open `setup-placeholders.html` in your browser and download all placeholder images, OR use this PowerShell command:

```powershell
# Download placeholder images automatically
$webclient = New-Object System.Net.WebClient

# Profile picture
$webclient.DownloadFile("https://via.placeholder.com/500x500/123513/39ff14?text=MM", "assets\profile.jpg")

# Blog images
$blogImages = @(
    @{name="ai-fintech.jpg"; text="AI+FinTech"},
    @{name="data-pipeline.jpg"; text="Data+Pipeline"},
    @{name="devops.jpg"; text="DevOps"},
    @{name="studies.jpg"; text="Studies"},
    @{name="internship.jpg"; text="Internship"},
    @{name="neural-networks.jpg"; text="Neural+Networks"}
)

foreach ($img in $blogImages) {
    $url = "https://via.placeholder.com/800x400/123513/39ff14?text=$($img.text)"
    $webclient.DownloadFile($url, "assets\blog\$($img.name)")
}

Write-Host "✓ All placeholders downloaded!" -ForegroundColor Green
```

### Step 3: Add Your CV (30 seconds)

Place your CV/Resume as:
```
assets/Mohtadi_Marmouri_CV.pdf
```

Or create a placeholder:
```powershell
# Create empty PDF placeholder
"" | Out-File -FilePath "assets\Mohtadi_Marmouri_CV.pdf"
```

### Step 4: Open in Browser (30 seconds)

Double-click `index.html` OR run a local server:

```powershell
# Option 1: Simple Python server
python -m http.server 8000

# Option 2: Node.js http-server (if installed)
npx http-server -p 8000

# Option 3: PHP server
php -S localhost:8000
```

Then visit: **http://localhost:8000**

### Step 5: Customize (1 minute)

Open `index.html` and search for:
- Your name
- Email address
- Phone number
- Social media URLs

---

## ✅ Complete Checklist

### Must Do (Before Going Live)
- [ ] Replace placeholder images with real photos
- [ ] Update CV/Resume PDF
- [ ] Change email to your actual email
- [ ] Update phone number
- [ ] Update social media links (GitHub, LinkedIn)
- [ ] Test contact form
- [ ] Verify map location is correct

### Should Do (For Best Results)
- [ ] Add your actual profile picture
- [ ] Replace blog images with relevant graphics
- [ ] Update project descriptions with your projects
- [ ] Customize color theme if desired
- [ ] Add your actual blog posts or remove section
- [ ] Test on mobile devices
- [ ] Run through all navigation links

### Optional (For Advanced Users)
- [ ] Minify CSS and JS files
- [ ] Optimize all images
- [ ] Set up Google Analytics
- [ ] Add custom domain
- [ ] Integrate contact form with backend
- [ ] Add more projects
- [ ] Create actual blog posts
- [ ] Add testimonials

---

## 🎨 Quick Customizations

### Change Color Theme

Edit `css/style.css` (lines 9-20):

```css
:root {
    --primary-green: #123513;  /* Change this! */
    --neon-green: #39ff14;     /* And this! */
    /* ... more colors ... */
}
```

### Change Your Info

Edit `index.html`:

1. **Name** (line ~76):
```html
<h1 class="hero-name" data-aos="fade-up" data-aos-delay="100">
    Mohtadi Marmouri  <!-- Change here -->
</h1>
```

2. **Email** (line ~580):
```html
<a href="mailto:mohtadimarmouri@gmail.com" class="info-value">
    mohtadimarmouri@gmail.com  <!-- Change here -->
</a>
```

3. **Social Links** (lines ~89-97):
```html
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">
```

### Update Projects

Edit `index.html` starting at line ~350. Each project is in a `.project-card` div:

```html
<div class="project-card glass-card">
    <div class="project-icon">
        <i class="fas fa-YOUR-ICON"></i>  <!-- Change icon -->
    </div>
    <div class="project-content">
        <h3 class="project-title">YOUR PROJECT NAME</h3>
        <p class="project-description">YOUR DESCRIPTION</p>
        <!-- Update tags -->
    </div>
</div>
```

---

## 🐛 Troubleshooting

### Problem: Images Not Showing
**Solution**: Check that files exist and paths are correct (case-sensitive)

### Problem: Animations Not Working
**Solution**: Make sure you're using a web server (not just opening the HTML file)

### Problem: Particles Not Appearing
**Solution**: Check internet connection (Particles.js loads from CDN)

### Problem: Contact Form Not Working
**Solution**: Normal! It needs backend integration (see DEPLOYMENT.md)

---

## 📚 Next Steps

Once everything looks good:

1. **Test Everything**
   - Click all navigation links
   - Test on mobile (responsive design)
   - Check all images load
   - Verify all info is correct

2. **Deploy** (see DEPLOYMENT.md)
   - GitHub Pages (easiest)
   - Netlify (recommended)
   - Vercel
   - Your own hosting

3. **Share**
   - Add to LinkedIn profile
   - GitHub README
   - Email signature
   - Social media

---

## 🆘 Need Help?

- **Full Documentation**: See `README.md`
- **Deployment Help**: See `DEPLOYMENT.md`
- **Asset Setup**: See `ASSETS_GUIDE.md`
- **Placeholder Images**: Open `setup-placeholders.html`

**Contact**: mohtadimarmouri@gmail.com

---

## ⚡ One-Command Setup (PowerShell)

Copy and paste this entire block to set everything up:

```powershell
# Quick Setup Script
Write-Host "🚀 Setting up Mohtadi's Portfolio..." -ForegroundColor Cyan

# Create directories
Write-Host "📁 Creating directories..." -ForegroundColor Yellow
New-Item -ItemType Directory -Force -Path "assets\blog" | Out-Null

# Download placeholder images
Write-Host "🖼️  Downloading placeholders..." -ForegroundColor Yellow
$wc = New-Object System.Net.WebClient

try {
    $wc.DownloadFile("https://via.placeholder.com/500x500/123513/39ff14?text=MM", "assets\profile.jpg")
    
    $blogImgs = @("AI+FinTech", "Data+Pipeline", "DevOps", "Studies", "Internship", "Neural+Networks")
    $blogFiles = @("ai-fintech.jpg", "data-pipeline.jpg", "devops.jpg", "studies.jpg", "internship.jpg", "neural-networks.jpg")
    
    for ($i = 0; $i -lt $blogImgs.Length; $i++) {
        $url = "https://via.placeholder.com/800x400/123513/39ff14?text=$($blogImgs[$i])"
        $wc.DownloadFile($url, "assets\blog\$($blogFiles[$i])")
    }
    
    Write-Host "✅ Setup complete!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Next steps:" -ForegroundColor Cyan
    Write-Host "   1. Open index.html in your browser"
    Write-Host "   2. Replace placeholder images"
    Write-Host "   3. Update your personal info"
    Write-Host "   4. Deploy when ready!"
    Write-Host ""
} catch {
    Write-Host "⚠️  Internet connection required for placeholders" -ForegroundColor Red
    Write-Host "   Open setup-placeholders.html instead" -ForegroundColor Yellow
}

# Open the website
Write-Host "🌐 Opening portfolio..." -ForegroundColor Cyan
Start-Process "index.html"
```

---

**Ready to Launch! 🚀**

