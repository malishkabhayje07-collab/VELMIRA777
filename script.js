function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

  let popup = document.createElement("div");
  popup.innerText = "Added to cart 💖";
  popup.className = "popup";
  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 2000);
}
function wishlist(){
  alert("Added to wishlist 💖");
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert("Added to cart 🛒💖");
}

function wishlist() {
  alert("Added to wishlist 💖");
}

function updateCartCount() {
  let count = document.getElementById("cartCount");
  if (count) {
    count.innerText = cart.length;
  }
window.onload = function() {
  updateCartCount();

  let loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
};
