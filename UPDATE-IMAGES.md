# How to Add Your Photos

## Step 1: Prepare Your Images

Place your photos in the `images/` directory:

```
images/
├── hero/
│   └── hero.jpg              # Main hero image
└── gallery/
    ├── 01-venice-boardwalk.jpg
    ├── 02-santa-monica-pier.jpg
    ├── 03-abbot-kinney.jpg
    ├── 04-ocean-park.jpg
    ├── 05-main-street.jpg
    ├── 06-muscle-beach.jpg
    ├── 07-sunset-junction.jpg
    ├── 08-rose-avenue.jpg
    └── 09-pacific-coast.jpg
```

## Step 2: Update index.html

Search for these lines in `index.html` and replace the SVG placeholders:

### Hero Image (around line 546)
**Find:**
```html
<img src="data:image/svg+xml,..." alt="Street Photography">
```

**Replace with:**
```html
<img src="/images/hero/hero.jpg" alt="Street Photography">
```

### Gallery Images (around lines 557-598)

**Photo 1 - Venice Boardwalk:**
```html
<img src="/images/gallery/01-venice-boardwalk.jpg" alt="Venice Boardwalk">
```

**Photo 2 - Santa Monica Pier:**
```html
<img src="/images/gallery/02-santa-monica-pier.jpg" alt="Santa Monica Pier">
```

**Photo 3 - Abbot Kinney:**
```html
<img src="/images/gallery/03-abbot-kinney.jpg" alt="Abbot Kinney">
```

**Photo 4 - Ocean Park:**
```html
<img src="/images/gallery/04-ocean-park.jpg" alt="Ocean Park">
```

**Photo 5 - Main Street:**
```html
<img src="/images/gallery/05-main-street.jpg" alt="Main Street">
```

**Photo 6 - Muscle Beach:**
```html
<img src="/images/gallery/06-muscle-beach.jpg" alt="Muscle Beach">
```

**Photo 7 - Sunset Junction:**
```html
<img src="/images/gallery/07-sunset-junction.jpg" alt="Sunset Junction">
```

**Photo 8 - Rose Avenue:**
```html
<img src="/images/gallery/08-rose-avenue.jpg" alt="Rose Avenue">
```

**Photo 9 - Pacific Coast:**
```html
<img src="/images/gallery/09-pacific-coast.jpg" alt="Pacific Coast">
```

## Step 3: Test Locally

If you want to test locally:
```bash
npx netlify dev
```

Then visit http://localhost:8888

## Step 4: Commit and Deploy

```bash
git add images/
git add index.html
git commit -m "Add photography images"
git push
```

## Image Protection Features Added

Your images are now protected with:

✅ **Right-click disabled** - Context menu blocked on images
✅ **Drag-and-drop disabled** - Can't drag images to desktop
✅ **CSS pointer protection** - Images not selectable
✅ **Keyboard shortcuts blocked** - Ctrl/Cmd+S disabled on images

### Important Notes on Image Protection

⚠️ **No protection is foolproof** - Determined users can still:
- Take screenshots
- Use browser dev tools
- Use browser extensions
- View page source to find image URLs

**Best practices:**
1. Use **watermarks** on images (subtle, corner placement)
2. Use **lower resolution** for web display (1200-1800px wide max)
3. Keep **high-res originals** offline
4. Consider **image compression** with visible artifacts to deter commercial use
5. Add **copyright notice** in footer (already present)

The protections added will stop 95% of casual users from easily downloading your photos, but they won't stop someone with technical knowledge. This is standard for any image-based website.
