// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    if (navLinks.style.display === "flex") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "flex";
    }
  });
}

// Shop Products
const clothingProducts = [
  { name: "pryitfwd Oversized Hoodie", price: "R650", img: "https://picsum.photos/id/201/400/300" },
  { name: "Hey Tjommie Signature Tee", price: "R320", img: "https://picsum.photos/id/237/400/300" },
  { name: "pryitfwd Cargo Pants", price: "R550", img: "https://picsum.photos/id/180/400/300" }
];

const perfumeProducts = [
  { name: "Cape Town Nights Perfume", price: "R480", img: "https://picsum.photos/id/870/400/300" },
  { name: "Energy Bloom", price: "R520", img: "https://picsum.photos/id/1015/400/300" },
  { name: "Street Legacy", price: "R450", img: "https://picsum.photos/id/133/400/300" }
];

function loadShop() {
  const clothingGrid = document.getElementById('clothing-grid');
  const perfumeGrid = document.getElementById('perfume-grid');

  if (clothingGrid) {
    clothingGrid.innerHTML = clothingProducts.map(p => `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button class="btn">Add to Cart</button>
      </div>
    `).join('');
  }

  if (perfumeGrid) {
    perfumeGrid.innerHTML = perfumeProducts.map(p => `
      <div class="product-card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <button class="btn">Add to Cart</button>
      </div>
    `).join('');
  }
}

// Blog Posts
const blogPosts = [
  { title: "The Birth of pryitfwd", date: "May 26, 2026", excerpt: "How a simple idea became a movement in Cape Town.", img: "https://picsum.photos/id/201/400/300" },
  { title: "JaBeZ..Music New Single Drop", date: "May 24, 2026", excerpt: "Listen to the latest track from the streets.", img: "https://picsum.photos/id/1015/400/300" },
  { title: "Why We Wear What We Believe", date: "May 20, 2026", excerpt: "The story behind Hey Tjommie clothing.", img: "https://picsum.photos/id/180/400/300" }
];

function loadBlog() {
  const container = document.getElementById('blog-posts');
  if (container) {
    container.innerHTML = blogPosts.map(post => `
      <div class="blog-card">
        <img src="${post.img}" alt="${post.title}">
        <div class="blog-content">
          <small>${post.date}</small>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <button class="btn">Read More</button>
        </div>
      </div>
    `).join('');
  }
}

// Run functions when page loads
document.addEventListener('DOMContentLoaded', () => {
  loadShop();
  loadBlog();
});
// Static Top Tracks for pry it forward
const topTracks = [
  { title: "Tjommie Energy", duration: "3:12", plays: "142K" },
  { title: "Pry It Forward", duration: "2:58", plays: "98K" },
  { title: "Cape Town Nights", duration: "4:05", plays: "87K" },
  { title: "Street Legacy", duration: "3:45", plays: "76K" },
  { title: "Forward Motion", duration: "3:22", plays: "65K" },
  { title: "Good Vibes Only", duration: "2:47", plays: "59K" }
];

function loadTopTracks() {
  const container = document.getElementById('top-tracks');
  if (!container) return;

  container.innerHTML = topTracks.map(track => `
    <div class="track-card">
      <div class="track-info">
        <strong>${track.title}</strong>
        <small>${track.duration} • ${track.plays} plays</small>
      </div>
      <button class="play-btn" onclick="alert('Playing: ${track.title} (Demo)')">▶️</button>
    </div>
  `).join('');
}

// Initialize Top Tracks
document.addEventListener('DOMContentLoaded', () => {
  loadTopTracks();
  // ... your existing code
});
