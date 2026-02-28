// Product Data (same as listing page)
const products = [
  {
    id: 1,
    title: "Premium T-Shirt",
    description: "Comfortable cotton t-shirt for daily wear.",
    price: 499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",    
    brand: "Urban Wear",
    color: "white",
    size: "Medium",
    quantity: 4
  },
  {
    id: 2,
    title: "Stylish Hoodie",
    description: "Warm hoodie perfect for winter season.",
    price: 999,
    image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2",
    brand: "Urban Wear",
    color: "Orange",
    size: "Medium",
    quantity: 4
  },
  {
    id: 3,
    title: "Casual Jeans",
    description: "Best Slim fit jeans with stretch fabric.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    brand: "Urban Wear",
    color: "Black",
    size: "Large",
    quantity: 6
  },
  {
    id: 4,
    title: "Formal Shirt",
    description: "Elegant formal shirt for business meetings.",
    price: 1599,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    brand: "Urban Wear",
    color: "wine",
    size: "Medium",
    quantity: 4
  }
];

// Get ID from URL
// Get ID from URL
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// Find product
const product = products.find(p => p.id === productId);

const container = document.getElementById("singleProduct");

if (product) {
  container.innerHTML = `
  <div class="lg:w-4/5 mx-auto flex flex-wrap py-10">

    <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">

      <h2 class="text-sm text-gray-500 tracking-widest">${product.brand}</h2>

      <h1 class="text-gray-900 text-3xl font-medium mb-4">
        ${product.title}
      </h1>

      <p class="leading-relaxed mb-4">
        ${product.description}
      </p>

      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Color</span>
        <span class="ml-auto text-gray-900">${product.color}</span>
      </div>

      <div class="flex border-t border-gray-200 py-2">
        <span class="text-gray-500">Size</span>
        <span class="ml-auto text-gray-900">${product.size}</span>
      </div>

      <div class="flex border-t border-b mb-6 border-gray-200 py-2">
        <span class="text-gray-500">Quantity</span>
        <span class="ml-auto text-gray-900">${product.quantity}</span>
      </div>

      <div class="flex items-center">
        <span class="title-font font-medium text-2xl text-gray-900 mr-4">
          ₹${product.price}
        </span>

        <button onclick="addToCart(${product.id})"
        class="text-white bg-indigo-500 py-2 px-6 rounded hover:bg-indigo-600 transition">
          Add to Cart
        </button>
      </div>

    </div>

    <img class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
         src="${product.image}"
         alt="${product.title}">
  </div>
  `;
} else {
  container.innerHTML = `
    <h2 class="text-center text-2xl text-red-500 py-20">
      Product Not Found
    </h2>
  `;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  window.location.href = "cart.html";
}