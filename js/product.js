const products = [
  {
    id: 1,
    title: "Premium T-Shirt",
    description: "Comfortable cotton t-shirt for daily wear.",
    price: 499,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    brand: "Urban Wear",
    color: "White",
    size: "Medium",
    quantity: 10
  },
  {
    id: 2,
    title: "Slim Fit Jeans",
    description: "Stretchable slim fit denim jeans.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    brand: "Denim Co",
    color: "Blue",
    size: "32",
    quantity: 15
  },
  {
    id: 3,
    title: "Casual Hoodie",
    description: "Warm and stylish hoodie for winter.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    brand: "Street Style",
    color: "Black",
    size: "Large",
    quantity: 8
  },

  // ---- More Products ----

  {
    id: 6,
    title: "Printed Shirt",
    description: "Trendy printed shirt for casual outings.",
    price: 899,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    brand: "Urban Wear",
    color: "Red",
    size: "Medium",
    quantity: 20
  },
  {
    id: 8,
    title: "Sports Cap",
    description: "Adjustable sports cap.",
    price: 399,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    brand: "Active Pro",
    color: "Black",
    size: "Free Size",
    quantity: 30
  },
  {
    id: 9,
    title: "Formal Shirt",
    description: "Slim fit formal shirt.",
    price: 1199,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    brand: "Office Wear",
    color: "Sky Blue",
    size: "Medium",
    quantity: 14
  },
  {
    id: 10,
    title: "Denim Jacket",
    description: "Classic blue denim jacket.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
    brand: "Denim Co",
    color: "Blue",
    size: "Large",
    quantity: 6
  },
{
  id: 13,
  title: "Summer Shorts",
  description: "Lightweight cotton shorts for summer.",
  price: 599,
  image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
  brand: "Street Style",
  color: "Gray",
  size: "Medium",
  quantity: 25
},
{
  id: 15,
  title: "Casual Blazer",
  description: "Slim fit casual blazer for formal occasions.",
  price: 2999,
  image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
  brand: "Office Wear",
  color: "Charcoal",
  size: "Large",
  quantity: 7
},
{
  id: 16,
  title: "Winter Sweater",
  description: "Soft wool sweater for cold weather.",
  price: 1499,
  image: "https://images.unsplash.com/photo-1544441893-675973e31985",
  brand: "WarmCo",
  color: "Maroon",
  size: "Medium",
  quantity: 12
},
{
  id: 17,
  title: "Printed Hoodie",
  description: "Stylish printed hoodie for everyday wear.",
  price: 1399,
  image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  brand: "Street Style",
  color: "White",
  size: "Large",
  quantity: 14
},
{
  id: 19,
  title: "Sports Jacket",
  description: "Lightweight sports jacket for running.",
  price: 2199,
  image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
  brand: "Active Pro",
  color: "Black",
  size: "Medium",
  quantity: 11
},
];

// Select container
const container = document.getElementById("productContainer");

if (container) {
  products.forEach(product => {
    const card = document.createElement("div");
card.className = "bg-white shadow-md rounded-lg overflow-hidden flex flex-col";

card.innerHTML = `
  <a href="./Product.html?id=${product.id}">
    <img src="${product.image}" 
         alt="${product.title}" 
         class="w-full h-56 object-cover hover:scale-105 transition duration-300">
  </a>

  <div class="p-4 flex flex-col flex-grow">
    
    <div>
      <h3 class="text-lg font-semibold mb-2">${product.title}</h3>
      <p class="text-gray-700 text-md mb-3">${product.description}</p>
      <p class="text-purple-600 font-bold mb-4">₹${product.price}</p>
    </div>

    <!-- Buttons pushed to bottom -->
    <div class="flex gap-3 mt-auto">
      
      <a href="./Product.html?id=${product.id}"
         class="flex-1 text-center py-2 text-sm font-medium bg-purple-500 text-white rounded hover:bg-purple-600 transition">
         Shop Now
      </a>

      <button onclick="addToCart(${product.id})"
        class="flex-1 text-center py-2 text-sm font-medium border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition">
         Add To Cart
      </button>

    </div>
  </div>
`;
    container.appendChild(card);
  });
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