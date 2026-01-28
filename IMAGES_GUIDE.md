# Images Folder Structure Guide

Create an `images` folder in your project root and add your watch photos.

## Recommended Folder Structure:

```
images/
├── watch1-1.jpg    (First watch, angle 1 - front view)
├── watch1-2.jpg    (First watch, angle 2 - side view)
├── watch1-3.jpg    (First watch, angle 3 - clasp detail)
├── watch1-4.jpg    (First watch, angle 4 - dial close-up)
├── watch2-1.jpg    (Second watch, angle 1)
├── watch2-2.jpg    (Second watch, angle 2)
├── watch2-3.jpg    (Second watch, angle 3)
└── ...
```

## Naming Convention:

- Format: `watch[ID]-[NUMBER].jpg`
- ID: Unique identifier for each watch (1, 2, 3, etc.)
- NUMBER: Image sequence for that watch (1, 2, 3, etc.)

## Image Specifications:

### Optimal Settings:
- **Dimensions:** 1200x1200px to 2000x2000px
- **Aspect Ratio:** 1:1 (square) preferred
- **Format:** JPG (for photos) or PNG (if transparency needed)
- **File Size:** 200KB - 800KB (compress for web)
- **Color Space:** sRGB

### Photography Tips:
1. **Lighting:** Use soft, diffused lighting to avoid harsh reflections
2. **Background:** Clean, neutral background (white, gray, or black)
3. **Angles to capture:**
   - Front face (dial clearly visible)
   - Side profile (showing case thickness)
   - Caseback (if interesting)
   - Clasp/buckle detail
   - Dial macro (showing finishing details)
   - Wrist shot (optional, on wrist or strap)

### Tools for Image Optimization:
- TinyPNG (https://tinypng.com) - Compress images
- Squoosh (https://squoosh.app) - Google's image optimizer
- ImageOptim (Mac) - Desktop compression tool
- GIMP or Photoshop - For resizing and editing

## Quick Start:

1. Create the `images` folder: `mkdir images`
2. Add your photos to this folder
3. Rename them according to the convention
4. Update the paths in `script.js`

## Example Watch Data (in script.js):

```javascript
{
    id: 1,
    title: "Rolex Submariner",
    description: "Automatic diving watch with 300m water resistance.",
    price: "$12,500",
    images: [
        "images/watch1-1.jpg",  // Front view
        "images/watch1-2.jpg",  // Side view
        "images/watch1-3.jpg",  // Clasp
        "images/watch1-4.jpg"   // Dial detail
    ]
}
```

Remember: You can have anywhere from 1 to unlimited images per watch!
