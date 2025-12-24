let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = item.name + " - ₹" + item.price + 
    ` <button onclick="removeItem(${index})">X</button>`;
    list.appendChild(li);
  });

  document.getElementById("total").innerText = total;
  document.getElementById("cartCount").innerText = cart.length;
}

function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index,1);
  updateCart();
}
