// Sample Products (Easy to edit)
const clothing = [
  { name: "pryitfwd Hoodie", price: "R650", img: "https://picsum.photos/id/201/400/300" },
  { name: "Hey Tjommie Classic Tee", price: "R320", img: "https://picsum.photos/id/237/400/300" }
];

const perfumes = [
  { name: "Cape Town Nights", price: "R480", img: "https://picsum.photos/id/870/400/300" },
  { name: "Energy Bloom", price: "R520", img: "https://picsum.photos/id/1015/400/300" }
];

// Load Products
function loadProducts() {
  document.getElementById('clothing-grid').innerHTML = clothing.map(p => `
    <div class="product-card">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <button class="btn">Add to Cart</button>
    </div>
  `).join('');

  document.getElementById('perfume-grid').innerHTML = perfumes.map(p => `
    <div class="product-card">
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <button class="btn">Add to Cart</button>
    </div>
  `).join('');
}

// Sample Blog Posts
const blogPosts = [
  { title: "The Rise of pryitfwd", date: "May 2026", excerpt: "How we built a movement...", img: "https://picsum.photos/id/201/400/300" },
  { title: "JaBeZ New Single Drop", date: "May 2026", excerpt: "Listen to the latest track now.", img: "https://picsum.photos/id/1015/400/300" }
];

function loadBlog() {
  const container = document.getElementById('blog-posts');
  if (container) {
    container.innerHTML = blogPosts.map(post => `
      <div class="blog-card">
        <img src="${post.img}" alt="${post.title}">
        <div style="padding:20px">
          <small>${post.date}</small>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
        </div>
      </div>
    `).join('');
  }
}

// Music Player for JaBeZ
function addMusicPlayer() {
  const player = document.createElement('div');
  player.innerHTML = `
    <h3>JaBeZ..Music - Now Playing</h3>
    <iframe style="border-radius:12px" src="https://open.spotify.com/embed" width="100%" height="152" frameborder="0"></iframe>
  `;
  document.body.appendChild(player);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  loadBlog();
  // addMusicPlayer(); // Uncomment when ready
});
