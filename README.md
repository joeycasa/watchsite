# Timepiece Gallery - Watch Collection Website

A luxury watch gallery website designed for GitHub Pages. Features a responsive grid layout with image carousels and a lightbox viewer.

## Features

- 📱 **Responsive Design** - Works beautifully on desktop, tablet, and mobile
- 🖼️ **Image Carousel** - Navigate through multiple angles of each watch
- 🔍 **Lightbox Viewer** - Click any watch to view in full-screen detail
- ⌨️ **Keyboard Navigation** - Use arrow keys to navigate in lightbox mode
- 🎨 **Luxury Aesthetics** - Dark theme with elegant typography and smooth animations
- 🚀 **No Backend Required** - Pure HTML/CSS/JavaScript for easy GitHub Pages hosting

## Setup Instructions

### 1. Clone or Download

Clone this repository or download the files to your local machine.

### 2. Folder Structure

Organize your files as follows:

```
your-repo/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/
    ├── watch1-1.jpg
    ├── watch1-2.jpg
    ├── watch1-3.jpg
    ├── watch2-1.jpg
    └── ... (your watch images)
```

### 3. Add Your Watch Images

1. Create an `images` folder in the root directory
2. Add your watch photos to this folder
3. Name them descriptively (e.g., `watch1-1.jpg`, `watch1-2.jpg`, etc.)
   - First number = watch ID
   - Second number = image angle/view

**Image Recommendations:**
- **Format:** JPG or PNG
- **Size:** 1000-2000px width recommended
- **Aspect Ratio:** Square (1:1) works best for the grid layout
- **Angles:** Front view, side view, clasp, dial close-up, etc.

### 4. Update Watch Data

Edit the `script.js` file to add your watches. Find the `watches` array and modify it:

```javascript
const watches = [
    {
        id: 1,
        title: "Your Watch Name",
        description: "Detailed description of the watch, features, specifications.",
        price: "$X,XXX",
        images: [
            "images/yourwatch-1.jpg",
            "images/yourwatch-2.jpg",
            "images/yourwatch-3.jpg"
        ]
    },
    // Add more watches...
];
```

**Fields:**
- `id`: Unique number for each watch (1, 2, 3, etc.)
- `title`: Name/model of the watch
- `description`: Brief description, features, specs
- `price`: Display price (can be text like "POA" or "$X,XXX")
- `images`: Array of image paths (minimum 1, no maximum)

### 5. Deploy to GitHub Pages

#### Option A: Using GitHub Website

1. Create a new repository on GitHub
2. Upload all files (index.html, styles.css, script.js, images folder)
3. Go to **Settings** → **Pages**
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be live at `https://yourusername.github.io/repo-name`

#### Option B: Using Git Command Line

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## Customization

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-bg: #0a0a0a;           /* Background color */
    --color-surface: #1a1a1a;      /* Card background */
    --color-text: #e8e8e8;         /* Main text */
    --color-accent: #d4af37;       /* Gold accent */
    /* ... */
}
```

### Change Fonts

The site uses Google Fonts (Cormorant Garamond and Montserrat). To change:

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Replace the font links in `index.html`
4. Update CSS variables in `styles.css`

### Modify Layout

- **Grid columns:** Edit `.gallery-grid` in `styles.css`
- **Spacing:** Modify CSS variables like `--spacing-md`
- **Card size:** Change `minmax(350px, 1fr)` in grid template

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Tips

1. **Image Optimization:** Compress images before uploading to improve load times
2. **Consistent Naming:** Use a clear naming convention for images
3. **Alt Text:** Images automatically use watch titles as alt text for accessibility
4. **Testing:** Test locally by opening `index.html` in a browser before deploying

## Troubleshooting

**Images not showing?**
- Check that image paths in `script.js` match actual file locations
- Ensure `images` folder is in the root directory
- Verify image file names are spelled correctly (case-sensitive)

**Site not deploying?**
- Ensure `index.html` is in the root directory
- Check that GitHub Pages is enabled in repository settings
- Wait a few minutes after pushing changes

**Layout issues?**
- Clear browser cache
- Check browser console for errors (F12)
- Ensure all CSS and JS files are properly linked

## License

Free to use and modify for personal or commercial projects.

## Credits

Built with vanilla HTML, CSS, and JavaScript. No frameworks or dependencies required.

---

Enjoy showcasing your watch collection! 🕰️
