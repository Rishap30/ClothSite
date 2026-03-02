const products = [
  {
    id: 1,
    title: "Premium T-Shirt",
    description: "Comfortable cotton t-shirt for daily wear.",
    price: 499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id: 2,
    title: "Stylish Hoodie",
    description: "Warm hoodie perfect for winter season.",
    price: 999,
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2"
  },
  {
    id: 3,
    title: "Casual Jeans",
    description: "Best Slim fit jeans with stretch fabric.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d"
  },
  {
    id: 4,
    title: "Formal Shirt",
    description: "Elegant formal shirt for business meetings.",
    price: 1599,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
  }
];

// Select container
const container = document.getElementById("productContainer");

// products
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "bg-white shadow-md rounded-lg overflow-hidden";

  card.innerHTML = `
    <img src="${product.image}" 
       alt="${product.title}" 
       class="w-full h-56 object-cover">

    <div class="p-4">
      <h3 class="text-lg font-semibold mb-2">${product.title}</h3>
      <p class="text-gray-700 text-md mb-3">${product.description}</p>
      <p class="text-purple-600 font-bold mb-4">₹${product.price}</p>

      <div class="flex gap-3">
        <button class="flex-1 px-2 py-2 text-sm bg-purple-500 text-white rounded hover:bg-purple-600 transition">
          Shop Now
        </button>
        <button class="flex-1 px-3 py-2 text-sm border border-gray-400 text-gray-600 rounded hover:bg-gray-100 transition">
          Add To Cart
        </button>
      </div>
    </div>
  `;

  container.appendChild(card);
});