let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

/* 🛒 CART */
function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  showPopup(name + " added to cart 💖");
}

/* ❤️ WISHLIST */
function addToWishlist(name) {
  wishlist.push(name);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  updateWishlist();
  showPopup(name + " added to wishlist ❤️");
}

/* 🧾 CART UPDATE */
function updateCart() {
  let count = document.getElementById("cartCount");
  if (count) count.innerText = cart.length;

  let list = document.getElementById("cartItems");
  let total = 0;

  if (list) {
    list.innerHTML = "";
    cart.forEach(item => {
      let li = document.createElement("li");
      li.innerText = item.name + " - ₹" + item.price;
      list.appendChild(li);
      total += item.price;
    });
  }

  let t = document.getElementById("total");
  if (t) t.innerText = total;
}

/* ❤️ WISHLIST UPDATE */
function updateWishlist() {
  let wl = document.getElementById("wishlistCount");
  if (wl) wl.innerText = wishlist.length;
}

/* 💖 POPUP */
function showPopup(msg) {
  let popup = document.createElement("div");
  popup.className = "popup";
  popup.innerText = msg;

  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 2000);
}

/* 💌 FEEDBACK */
function saveFeedback() {
  let text = document.getElementById("fb").value;
  let list = JSON.parse(localStorage.getItem("fb")) || [];
  list.push(text);
  localStorage.setItem("fb", JSON.stringify(list));
  showFeedback();
}

function showFeedback() {
  let list = JSON.parse(localStorage.getItem("fb")) || [];
  let ul = document.getElementById("fbList");

  if (ul) {
    ul.innerHTML = "";
    list.forEach(f => {
      let li = document.createElement("li");
      li.innerText = "💬 " + f;
      ul.appendChild(li);
    });
  }
}

window.onload = function () {
  updateCart();
  updateWishlist();
  showFeedback();
};
