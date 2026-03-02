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
  },
  {
  id: 11,
  title: "Oversized T-Shirt",
  description: "Trendy oversized t-shirt for street style look.",
  price: 699,
  image: "https://images.unsplash.com/photo-1520974735194-1f6f6b5e8f7f",
  brand: "Urban Wear",
  color: "Beige",
  size: "Large",
  quantity: 18
},
{
  id: 12,
  title: "Track Pants",
  description: "Comfortable track pants for gym and casual wear.",
  price: 999,
  image: "https://images.unsplash.com/photo-1593032465171-8b63f0c8b2b4",
  brand: "Active Pro",
  color: "Black",
  size: "Medium",
  quantity: 22
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
  id: 14,
  title: "Polo T-Shirt",
  description: "Classic polo t-shirt with premium fabric.",
  price: 899,
  image: "https://images.unsplash.com/photo-1585386959984-a41552262f4d",
  brand: "Elite Wear",
  color: "Navy Blue",
  size: "Large",
  quantity: 16
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
  id: 18,
  title: "Leather Boots",
  description: "Durable leather boots for outdoor use.",
  price: 3999,
  image: "https://images.unsplash.com/photo-1608256246200-53e8b47b0f0d",
  brand: "Rider Pro",
  color: "Brown",
  size: "9",
  quantity: 9
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
{
  id: 20,
  title: "Classic Kurta",
  description: "Traditional cotton kurta for festive wear.",
  price: 1299,
  image: "https://images.unsplash.com/photo-1600180758890-6f5d9c3bcb23",
  brand: "Ethnic Hub",
  color: "White",
  size: "Large",
  quantity: 13
},
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

        <button 
        class="text-white bg-indigo-500 py-2 px-6 rounded hover:bg-indigo-600 transition ">
          BUY NOW
        </button>

        <button onclick="addToCart(${product.id})"
        class="text-white bg-indigo-500 py-2 px-6 rounded hover:bg-indigo-600 transition mx-3">
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