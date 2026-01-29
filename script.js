// ================= HEADER SCROLL FIX =================

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('header-top', window.scrollY < 40);
});

// ================= WATCH DATA =================

const watches = [
    {
        id: 1,
        title: "Classic Diver",
        description: "Automatic movement with 200m water resistance.",
        price: "$2,850",
        images: ["images/watch1-1.jpg"]
    },
    {
        id: 2,
        title: "Vintage Chronograph",
        description: "Manual-wind chronograph, panda dial.",
        price: "$4,200",
        images: ["images/watch2-1.jpg"]
    }
];

function initGallery() {
    const grid = document.getElementById('galleryGrid');

    watches.forEach(watch => {
        const card = document.createElement('div');
        card.className = 'watch-card';

        card.innerHTML = `
            <div class="watch-image-container">
                <img class="watch-image" src="${watch.images[0]}" alt="${watch.title}">
            </div>
            <div class="watch-info">
                <h3 class="watch-title">${watch.title}</h3>
                <p class="watch-description">${watch.description}</p>
                <p class="watch-price">${watch.price}</p>
            </div>
        `;

        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initGallery);