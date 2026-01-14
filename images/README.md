# Image Directory Guide

## Structure

```
images/
├── hero/          # Hero section image (1 image)
└── gallery/       # Gallery photos (9 images)
```

## Photo Requirements

### File Format
- **Format**: JPEG or WebP (recommended for web)
- **Color**: Black & white (as styled in CSS with `grayscale(1)`)
- **Quality**: High quality, but optimized for web (aim for 150-300KB per image)

### Dimensions

#### Hero Image (`images/hero/hero.jpg`)
- Recommended: 1600×1200px or larger
- Aspect ratio: Flexible (will crop to container)

#### Gallery Images (`images/gallery/01.jpg` through `09.jpg`)
**Photo 1 - Venice Boardwalk** (Landscape 3:2)
- Dimensions: 1800×1200px
- Orientation: Horizontal

**Photo 2 - Santa Monica Pier** (Portrait 2:3)
- Dimensions: 1200×1800px
- Orientation: Vertical

**Photo 3 - Abbot Kinney** (Portrait 4:5)
- Dimensions: 1200×1500px
- Orientation: Vertical

**Photo 4 - Ocean Park** (Square 1:1)
- Dimensions: 1500×1500px
- Orientation: Square

**Photo 5 - Main Street** (Landscape 16:9)
- Dimensions: 1920×1080px
- Orientation: Wide horizontal

**Photo 6 - Muscle Beach** (Landscape 3:2)
- Dimensions: 1800×1200px
- Orientation: Horizontal

**Photo 7 - Sunset Junction** (Landscape 3:2)
- Dimensions: 1800×1200px
- Orientation: Horizontal

**Photo 8 - Rose Avenue** (Portrait 2:3)
- Dimensions: 1200×1800px
- Orientation: Vertical

**Photo 9 - Pacific Coast** (Landscape 16:9)
- Dimensions: 1920×1080px
- Orientation: Wide horizontal

## File Naming

Use simple numeric names for gallery images:
```
images/gallery/01.jpg
images/gallery/02.jpg
images/gallery/03.jpg
...
images/gallery/09.jpg
```

Or use descriptive names (you'll need to update index.html):
```
images/gallery/venice-boardwalk.jpg
images/gallery/santa-monica-pier.jpg
...
```

## Image Optimization Tips

1. **Compress before upload**: Use tools like:
   - [TinyPNG](https://tinypng.com)
   - [Squoosh](https://squoosh.app)
   - ImageOptim (Mac)

2. **Target file sizes**:
   - Gallery images: 150-300KB each
   - Hero image: 300-500KB

3. **Export settings**:
   - Quality: 80-85%
   - Progressive JPEG
   - Strip metadata

## After Adding Photos

Update `index.html` to reference your actual images instead of the SVG placeholders.
