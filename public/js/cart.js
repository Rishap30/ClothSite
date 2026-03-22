
const container = document.getElementById("cartContainer");
const totalPriceEl = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  container.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    container.innerHTML += `
      <div class="bg-white p-4 rounded shadow flex items-center justify-between">
        <div class="flex items-center gap-4">
          <img src="${item.image}" class="w-20 h-20 object-cover rounded">
          <div>
            <h3 class="font-semibold">${item.title}</h3>
            <p>₹${item.price}</p>
            <div class="flex items-center gap-2 mt-2">
              <button onclick="changeQty(${index}, -1)" class="px-2 bg-gray-200 rounded">-</button>
              <span>${item.quantity}</span>
              <button onclick="changeQty(${index}, 1)" class="px-2 bg-gray-200 rounded">+</button>
            </div>
          </div>
        </div>

        <button onclick="removeItem(${index})"
          class="text-red-500 font-semibold">
          Remove
        </button>
      </div>
    `;
  });

  totalPriceEl.textContent = total;
  localStorage.setItem("cart", JSON.stringify(cart));
}

function changeQty(index, amount) {
  cart[index].quantity += amount;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

renderCart();

function goBack() {
  window.history.back();
}