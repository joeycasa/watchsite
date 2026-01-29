// Watch data - Add your watch information here
const watches = [
    {
        id: 1,
        title: "Classic Diver",
        description: "Automatic movement with 200m water resistance. Sapphire crystal and ceramic bezel.",
        price: "$2,850",
        images: [
            "images/watch1-1.jpg",
            "images/watch1-2.jpg",
            "images/watch1-3.jpg",
            "images/watch1-4.jpg"
        ]
    },
    {
        id: 2,
        title: "Vintage Chronograph",
        description: "Manual-wind chronograph with panda dial. Limited edition of 500 pieces.",
        price: "$4,200",
        images: [
            "images/watch2-1.jpg",
            "images/watch2-2.jpg",
            "images/watch2-3.jpg"
        ]
    },
    {
        id: 3,
        title: "Modern Dress Watch",
        description: "Ultra-thin automatic movement. Rose gold case with alligator leather strap.",
        price: "$6,750",
        images: [
            "images/watch3-1.jpg",
            "images/watch3-2.jpg",
            "images/watch3-3.jpg",
            "images/watch3-4.jpg",
            "images/watch3-5.jpg"
        ]
    },
    {
        id: 4,
        title: "Sport GMT",
        description: "Dual time zone functionality. Robust stainless steel construction.",
        price: "$3,450",
        images: [
            "images/watch4-1.jpg",
            "images/watch4-2.jpg",
            "images/watch4-3.jpg"
        ]
    }
    // Add more watches as needed
];

let currentImageIndices = {};
let lightboxCurrentWatch = null;
let lightboxCurrentImageIndex = 0;

// Initialize the gallery
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    
    watches.forEach(watch => {
        currentImageIndices[watch.id] = 0;
        const card = createWatchCard(watch);
        galleryGrid.appendChild(card);
    });
    
    initLightbox();
}

// Create watch card element
function createWatchCard(watch) {
    const card = document.createElement('div');
    card.className = 'watch-card';
    card.setAttribute('data-watch-id', watch.id);
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'watch-image-container';
    
    const img = document.createElement('img');
    img.src = watch.images[0];
    img.alt = watch.title;
    img.className = 'watch-image';
    img.setAttribute('data-watch-id', watch.id);
    
    // Navigation arrows (only show if multiple images)
    if (watch.images.length > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'watch-nav watch-prev';
        prevBtn.innerHTML = '‹';
        prevBtn.onclick = (e) => {
            e.stopPropagation();
            changeImage(watch.id, -1);
        };
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'watch-nav watch-next';
        nextBtn.innerHTML = '›';
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            changeImage(watch.id, 1);
        };
        
        imageContainer.appendChild(prevBtn);
        imageContainer.appendChild(nextBtn);
        
        // Image indicators
        const indicators = document.createElement('div');
        indicators.className = 'image-indicator';
        watch.images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `indicator-dot ${index === 0 ? 'active' : ''}`;
            dot.setAttribute('data-watch-id', watch.id);
            dot.setAttribute('data-index', index);
            indicators.appendChild(dot);
        });
        imageContainer.appendChild(indicators);
    }
    
    imageContainer.appendChild(img);
    
    const info = document.createElement('div');
    info.className = 'watch-info';
    info.innerHTML = `
        <h3 class="watch-title">${watch.title}</h3>
        <p class="watch-description">${watch.description}</p>
        <p class="watch-price">${watch.price}</p>
    `;
    
    card.appendChild(imageContainer);
    card.appendChild(info);
    
    // Click on card opens lightbox
    card.addEventListener('click', (e) => {
        if (!e.target.classList.contains('watch-nav')) {
            openLightbox(watch.id, currentImageIndices[watch.id]);
        }
    });
    
    return card;
}

// Change image in card carousel
function changeImage(watchId, direction) {
    const watch = watches.find(w => w.id === watchId);
    if (!watch) return;
    
    currentImageIndices[watchId] = (currentImageIndices[watchId] + direction + watch.images.length) % watch.images.length;
    
    const img = document.querySelector(`.watch-image[data-watch-id="${watchId}"]`);
    img.src = watch.images[currentImageIndices[watchId]];
    
    // Update indicators
    const indicators = document.querySelectorAll(`.indicator-dot[data-watch-id="${watchId}"]`);
    indicators.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentImageIndices[watchId]);
    });
}

// Lightbox functionality
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('prevImage');
    const nextBtn = document.getElementById('nextImage');
    
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', () => changeLightboxImage(-1));
    nextBtn.addEventListener('click', () => changeLightboxImage(1));
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') changeLightboxImage(-1);
        if (e.key === 'ArrowRight') changeLightboxImage(1);
    });
}

function openLightbox(watchId, imageIndex = 0) {
    const watch = watches.find(w => w.id === watchId);
    if (!watch) return;
    
    lightboxCurrentWatch = watch;
    lightboxCurrentImageIndex = imageIndex;
    
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImage');
    const title = document.getElementById('lightboxTitle');
    const description = document.getElementById('lightboxDescription');
    const price = document.getElementById('lightboxPrice');
    const thumbnails = document.getElementById('lightboxThumbnails');
    
    img.src = watch.images[imageIndex];
    img.alt = watch.title;
    title.textContent = watch.title;
    description.textContent = watch.description;
    price.textContent = watch.price;
    
    // Create thumbnails
    thumbnails.innerHTML = '';
    watch.images.forEach((imageSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imageSrc;
        thumb.alt = `${watch.title} - Image ${index + 1}`;
        thumb.className = `lightbox-thumbnail ${index === imageIndex ? 'active' : ''}`;
        thumb.addEventListener('click', () => {
            lightboxCurrentImageIndex = index;
            updateLightboxImage();
        });
        thumbnails.appendChild(thumb);
    });
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function changeLightboxImage(direction) {
    if (!lightboxCurrentWatch) return;
    
    lightboxCurrentImageIndex = (lightboxCurrentImageIndex + direction + lightboxCurrentWatch.images.length) % lightboxCurrentWatch.images.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const img = document.getElementById('lightboxImage');
    img.src = lightboxCurrentWatch.images[lightboxCurrentImageIndex];
    
    // Update active thumbnail
    const thumbnails = document.querySelectorAll('.lightbox-thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === lightboxCurrentImageIndex);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initGallery);

// ───────────────────────────────────────────────
// Header snap — Desktop snaps, Mobile free-scroll
// ───────────────────────────────────────────────

const header = document.querySelector('.header');
const gallery = document.querySelector('.gallery-container');

let lastScrollY = window.scrollY || 0;
let isSnapping = false;

// Detect mobile devices
const isMobile = /iP(ad|hone|ipod)|Android/i.test(navigator.userAgent);

function getGalleryTop() {
  return gallery ? gallery.getBoundingClientRect().top + window.scrollY : 0;
}

function updateHeader() {
  const scrollY = window.scrollY;
  const headerHeight = header.offsetHeight;
  const galleryTop = getGalleryTop();
  const threshold = galleryTop - headerHeight;

  const headerOpen = header.classList.contains('header-top');
  const shouldBeOpen = scrollY < threshold;

  if (isMobile) {
    // ── MOBILE: just toggle classes, no snapping ──
    if (shouldBeOpen) {
      header.classList.add('header-top');
      header.classList.remove('header-collapsed');
    } else {
      header.classList.remove('header-top');
      header.classList.add('header-collapsed');
    }
  } else {
    // ── DESKTOP: snapping behavior ──
    if (shouldBeOpen !== headerOpen && !isSnapping) {
      isSnapping = true;
      header.classList.add('header-transitioning');

      if (shouldBeOpen) {
        header.classList.add('header-top');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        header.classList.remove('header-top');
        const target = galleryTop - header.offsetHeight;
        window.scrollTo({ top: target, behavior: 'smooth' });
      }

      setTimeout(() => {
        header.classList.remove('header-transitioning');
        isSnapping = false;
      }, 400); // match your CSS transition duration
    }
  }

  lastScrollY = scrollY;
}

// Scroll handler
window.addEventListener('scroll', () => {
  requestAnimationFrame(updateHeader);
});

// Resize handler
window.addEventListener('resize', () => {
  requestAnimationFrame(updateHeader);
});
