function addToCart(name,price){
  alert(name+" added to cart 🛒");
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
}

window.onload = updateCartCount;
window.onload = function() {
  document.getElementById("loader").style.display = "none";
};
