# Assets Setup Guide

This guide will help you set up all the required assets for your portfolio website.

## 📋 Required Assets Checklist

### 1. Profile Picture
- **Location**: `assets/profile.jpg`
- **Recommended Size**: 500x500px (square)
- **Format**: JPG, PNG, or WebP
- **Requirements**: 
  - Professional photo
  - Clear face
  - Good lighting
  - Neutral or professional background

### 2. CV/Resume
- **Location**: `assets/Mohtadi_Marmouri_CV.pdf`
- **Format**: PDF
- **Requirements**:
  - Up-to-date information
  - Professional formatting
  - File size < 2MB

### 3. Blog Post Images
Location: `assets/blog/`

All images should be:
- **Size**: 800x400px (2:1 aspect ratio)
- **Format**: JPG or WebP
- **Quality**: High quality, well-lit

Required images:

1. **ai-fintech.jpg**
   - Topic: AI and Machine Learning in FinTech
   - Suggested: Tech imagery, neural networks, financial graphs

2. **data-pipeline.jpg**
   - Topic: Data Engineering and ETL Pipelines
   - Suggested: Data flow diagrams, pipelines, servers

3. **devops.jpg**
   - Topic: DevOps and CI/CD
   - Suggested: Infrastructure, deployment, automation

4. **studies.jpg**
   - Topic: Academic Journey
   - Suggested: University, books, graduation, studying

5. **internship.jpg**
   - Topic: Internship Experiences
   - Suggested: Office environment, teamwork, coding

6. **neural-networks.jpg**
   - Topic: Deep Learning and AI
   - Suggested: Neural network visualization, AI concepts

## 🎨 Where to Get Images

### Free Stock Photo Resources

1. **Unsplash** (https://unsplash.com)
   - Search terms: "technology", "coding", "ai", "data science"
   - High-quality, free to use
   
2. **Pexels** (https://pexels.com)
   - Great tech and professional images
   - No attribution required

3. **Pixabay** (https://pixabay.com)
   - Large selection of tech images
   - Free for commercial use

4. **Freepik** (https://freepik.com)
   - Tech illustrations and photos
   - Free with attribution

### AI-Generated Images

1. **DALL-E 2** (https://openai.com/dall-e-2)
2. **Midjourney** (https://midjourney.com)
3. **Stable Diffusion** (https://stability.ai)

## 🛠️ Image Optimization

### Recommended Tools

1. **Online Tools**:
   - **TinyPNG** (https://tinypng.com) - Compress images
   - **Squoosh** (https://squoosh.app) - Google's image optimizer
   - **Cloudinary** (https://cloudinary.com) - Full image optimization

2. **Command Line**:
   ```bash
   # Using ImageMagick
   convert input.jpg -resize 800x400^ -gravity center -extent 800x400 output.jpg
   
   # Optimize with compression
   convert input.jpg -quality 85 -strip output.jpg
   ```

3. **Photoshop/GIMP**:
   - Export for Web
   - Quality: 80-85%
   - Progressive JPEG

## 📐 Image Dimensions Reference

| Asset Type | Dimensions | Aspect Ratio | Format |
|------------|------------|--------------|--------|
| Profile Picture | 500x500px | 1:1 | JPG/PNG |
| Blog Header | 800x400px | 2:1 | JPG/WebP |
| CV Document | - | - | PDF |

## 🚀 Quick Setup with Placeholders

If you want to test the site before adding real images, use these placeholders:

### Create placeholder script

Create `setup-placeholders.ps1` (PowerShell):

```powershell
# Create assets directories
New-Item -ItemType Directory -Force -Path "assets\blog"

# Download placeholders (requires internet)
$profileUrl = "https://via.placeholder.com/500x500/123513/39ff14?text=MM"
$blogUrl = "https://via.placeholder.com/800x400/123513/39ff14?text="

# Download profile picture
Invoke-WebRequest -Uri $profileUrl -OutFile "assets\profile.jpg"

# Download blog images
$blogImages = @("AI+FinTech", "Data+Pipeline", "DevOps", "Studies", "Internship", "Neural+Networks")
$blogFiles = @("ai-fintech.jpg", "data-pipeline.jpg", "devops.jpg", "studies.jpg", "internship.jpg", "neural-networks.jpg")

for ($i = 0; $i -lt $blogImages.Length; $i++) {
    $url = $blogUrl + $blogImages[$i]
    Invoke-WebRequest -Uri $url -OutFile "assets\blog\$($blogFiles[$i])"
}

Write-Host "Placeholders created successfully!"
```

Or use this simple HTML method - add to a temporary HTML file:

```html
<!DOCTYPE html>
<html>
<body>
<h2>Right-click and save each image:</h2>
<img src="https://via.placeholder.com/500x500/123513/39ff14?text=Profile" alt="Profile"><br>
<img src="https://via.placeholder.com/800x400/123513/39ff14?text=AI+FinTech" alt="Blog 1"><br>
<img src="https://via.placeholder.com/800x400/123513/39ff14?text=Data+Pipeline" alt="Blog 2"><br>
<img src="https://via.placeholder.com/800x400/123513/39ff14?text=DevOps" alt="Blog 3"><br>
<img src="https://via.placeholder.com/800x400/123513/39ff14?text=Studies" alt="Blog 4"><br>
<img src="https://via.placeholder.com/800x400/123513/39ff14?text=Internship" alt="Blog 5"><br>
<img src="https://via.placeholder.com/800x400/123513/39ff14?text=Neural+Networks" alt="Blog 6">
</body>
</html>
```

## ✅ Verification

After adding all assets, verify your directory structure:

```
assets/
├── profile.jpg (✓)
├── Mohtadi_Marmouri_CV.pdf (✓)
└── blog/
    ├── ai-fintech.jpg (✓)
    ├── data-pipeline.jpg (✓)
    ├── devops.jpg (✓)
    ├── studies.jpg (✓)
    ├── internship.jpg (✓)
    └── neural-networks.jpg (✓)
```

## 🎯 Best Practices

1. **File Naming**: Use lowercase, hyphens for spaces
2. **File Size**: Keep images under 500KB each
3. **Format**: Use WebP for better compression (with JPG fallback)
4. **Optimization**: Always optimize images before uploading
5. **Backup**: Keep original high-res versions elsewhere
6. **Alt Text**: Already included in HTML for accessibility

## 📱 Responsive Images (Advanced)

For better performance, you can create multiple sizes:

```
assets/
└── blog/
    ├── ai-fintech.jpg (800x400 - desktop)
    ├── ai-fintech-tablet.jpg (600x300 - tablet)
    └── ai-fintech-mobile.jpg (400x200 - mobile)
```

Then update HTML:

```html
<img 
    src="assets/blog/ai-fintech.jpg"
    srcset="assets/blog/ai-fintech-mobile.jpg 400w,
            assets/blog/ai-fintech-tablet.jpg 600w,
            assets/blog/ai-fintech.jpg 800w"
    sizes="(max-width: 480px) 400px,
           (max-width: 768px) 600px,
           800px"
    alt="AI in FinTech">
```

## 🔄 Updating Assets

To update an asset:
1. Replace the file in the appropriate directory
2. Keep the same filename
3. Clear browser cache (Ctrl+F5)
4. Verify the update

---

Need help? Check the README.md or contact: mohtadimarmouri@gmail.com

