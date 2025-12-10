# Favicon Creation Guide

Your portfolio needs a favicon with just "MM" text.

## Quick Creation Methods:

### Option 1: Using Figma/Canva (Recommended)
1. Create a 512x512px square canvas
2. Set background to your green (#123513)
3. Add "MM" text in white or neon green (#39ff14)
4. Use bold font (Inter or similar)
5. Export as PNG
6. Save as `favicon.png` in the `assets/` folder

### Option 2: Using Online Tools
- **Favicon.io**: https://favicon.io/favicon-generator/
  - Text: MM
  - Background: #123513
  - Font: Bold
  - Color: #39ff14
  - Shape: Square
  - Download and rename to `favicon.png`

- **RealFaviconGenerator**: https://realfavicongenerator.net/
  - Upload any image with MM
  - Generate all sizes

### Option 3: Using Photoshop/GIMP
1. New file: 512x512px
2. Fill with #123513 (dark green)
3. Add text "MM" in #39ff14 (neon green)
4. Font: Bold, 200-250pt
5. Center the text
6. Export as PNG

### Option 4: Simple HTML/Canvas (Quick Placeholder)

Create a simple HTML file and open it in browser:

```html
<!DOCTYPE html>
<html>
<head><title>MM Favicon Generator</title></head>
<body>
    <canvas id="canvas" width="512" height="512"></canvas>
    <script>
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        
        // Background
        ctx.fillStyle = '#123513';
        ctx.fillRect(0, 0, 512, 512);
        
        // Text
        ctx.fillStyle = '#39ff14';
        ctx.font = 'bold 250px Inter, Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('MM', 256, 256);
        
        // Right-click the canvas and "Save image as..." → favicon.png
    </script>
</body>
</html>
```

## Recommended Specifications:

- **Main Favicon**: 512x512px PNG
- **Background Color**: #123513 (dark green)
- **Text Color**: #39ff14 (neon green) or #f5f5f0 (white)
- **Font**: Inter Bold or similar sans-serif
- **Format**: PNG with transparency or solid background

## File Structure:

```
assets/
├── favicon.png (512x512px - main favicon)
└── FAVICON_GUIDE.md (this file)
```

## Testing:

After adding the favicon:
1. Clear browser cache (Ctrl + F5)
2. Reload your page
3. Check the browser tab - you should see "MM"

## Multiple Sizes (Optional):

For better compatibility, you can create multiple sizes:
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon-96x96.png`
- `favicon-512x512.png`

Then update HTML:
```html
<link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="assets/favicon-96x96.png">
```

## Quick Placeholder:

If you need a temporary favicon, use this URL temporarily:
```
https://via.placeholder.com/512x512/123513/39ff14?text=MM
```

Download it and save as `assets/favicon.png`

---

**Status**: ✅ Favicon link added to all HTML files
**Next Step**: Create favicon.png with "MM" text and place in assets/ folder

