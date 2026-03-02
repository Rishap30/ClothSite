const comboProducts = [
  {
    id: 101,
    title: "T-Shirt + Jeans Combo",
    description: "Stylish cotton t-shirt paired with slim fit denim jeans.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    brand: "Urban Wear",
    color: "Black & Blue",
    size: "Medium",
    quantity: 2,
    comboItems: [
      { name: "Cotton T-Shirt", price: 499 },
      { name: "Slim Fit Jeans", price: 1199 }
    ],
    discount: 199
  },
  {
    id: 102,
    title: "Hoodie + Jogger Combo",
    description: "Warm fleece hoodie with comfortable jogger pants.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    brand: "Street Style",
    color: "Grey",
    size: "Large",
    quantity: 3,
    comboItems: [
      { name: "Fleece Hoodie", price: 1299 },
      { name: "Jogger Pants", price: 999 }
    ],
    discount: 299
  },
  {
    id: 103,
    title: "Casual Shirt + Trouser Combo",
    description: "Formal casual shirt paired with slim fit trousers.",
    price: 1799,
    image: "https://images.unsplash.com/photo-1593032465171-8d3f33f14f1e",
    brand: "Classic Line",
    color: "White & Black",
    size: "Medium",
    quantity: 5,
    comboItems: [
      { name: "Casual Shirt", price: 899 },
      { name: "Slim Fit Trouser", price: 1299 }
    ],
    discount: 399
  },
  {
    id: 104,
    title: "Kurta + Pajama Combo",
    description: "Traditional cotton kurta with matching pajama.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1602810319428-019690571b5b",
    brand: "Ethnic Hub",
    color: "Cream",
    size: "Large",
    quantity: 4,
    comboItems: [
      { name: "Cotton Kurta", price: 799 },
      { name: "White Pajama", price: 599 }
    ],
    discount: 99
  },
  {
    id: 105,
    title: "Shirt + Tie Combo",
    description: "Office wear formal shirt with stylish tie.",
    price: 999,
    image: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47",
    brand: "Office Look",
    color: "Blue",
    size: "Medium",
    quantity: 6,
    comboItems: [
      { name: "Formal Shirt", price: 799 },
      { name: "Silk Tie", price: 299 }
    ],
    discount: 99
  },
  {
    id: 106,
    title: "Sweater + Scarf Combo",
    description: "Winter warm sweater with matching scarf.",
    price: 1699,
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27",
    brand: "Winter Style",
    color: "Brown",
    size: "Large",
    quantity: 3,
    comboItems: [
      { name: "Wool Sweater", price: 1199 },
      { name: "Warm Scarf", price: 599 }
    ],
    discount: 99
  },
  {
    id: 107,
    title: "Cap + Sunglasses Combo",
    description: "Cool summer cap with UV-protected sunglasses.",
    price: 799,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    brand: "Cool Vibes",
    color: "Black",
    size: "Free Size",
    quantity: 8,
    comboItems: [
      { name: "Baseball Cap", price: 399 },
      { name: "UV Sunglasses", price: 499 }
    ],
    discount: 99
  },
  {
    id: 108,
    title: "Jacket + T-Shirt Combo",
    description: "Trendy jacket paired with graphic t-shirt.",
    price: 1899,
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
    brand: "Street King",
    color: "Green",
    size: "Medium",
    quantity: 2,
    comboItems: [
      { name: "Casual Jacket", price: 1399 },
      { name: "Graphic T-Shirt", price: 599 }
    ],
    discount: 99
  },
  {
    id: 109,
    title: "Tracksuit Combo",
    description: "Comfortable tracksuit for gym and running.",
    price: 1599,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
    brand: "Fit Wear",
    color: "Navy Blue",
    size: "Large",
    quantity: 4,
    comboItems: [
      { name: "Track Jacket", price: 999 },
      { name: "Track Pants", price: 899 }
    ],
    discount: 299
  },
  {
    id: 110,
    title: "Denim Jacket + T-Shirt Combo",
    description: "Classic denim jacket with white cotton t-shirt.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1495121605193-b116b5b09a4d",
    brand: "Denim Club",
    color: "Blue & White",
    size: "Medium",
    quantity: 3,
    comboItems: [
      { name: "Denim Jacket", price: 1499 },
      { name: "Cotton T-Shirt", price: 499 }
    ],
    discount: 199
  }
];
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id"));

// Find product
const product = comboProducts.find(p => p.id === productId);

const container = document.getElementById("comboProducts");

if (container) {
  comboProducts.forEach(product => {
    const card = document.createElement("div");
card.className = "bg-white shadow-md rounded-lg overflow-hidden flex flex-col";

card.innerHTML = `
  <a href="./season.html?id=${product.id}">
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
     class="flex-1 text-center py-2 text-sm font-medium bg-purple-500 text-white rounded hover:bg-purple-600 transition focus:outline-none focus:ring-0">
     Shop Now
  </a>
      
  <button onclick="addToCart(${product.id})"
    class="flex-1 text-center py-2 text-sm font-medium border border-gray-400 text-gray-700 rounded hover:bg-gray-100 transition focus:outline-none focus:ring-0">
     Add To Cart
  </button>

</div>
  </div>
`;
    container.appendChild(card);
  });
}

function addToCart(id) {
  const product = comboProducts.find(p => p.id === id);

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