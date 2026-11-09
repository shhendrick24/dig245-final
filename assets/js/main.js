/* javascript */

// Cookies
let startTime = Date.now();
let cookieChoice = "nothing";
let secondsToDecide = 0;
let popup = document.getElementById("cookies");
let acceptButton = document.getElementById("acceptCookies");
let rejectButton = document.getElementById("rejectCookies");

popup.showModal(); // show the pop-up when page opens

acceptButton.onclick = function() {
    cookieChoice = "Accept all";
    secondsToDecide = (Date.now() - startTime) / 1000;
    popup.close();
}

rejectButton.onclick = function() {
  cookieChoice = "Reject all";
  secondsToDecide = (Date.now() - startTime) / 1000;
  popup.close();
};

let products = [
    {name: "Wireless earbuds", price: 49},
    {name: "Phone charger", price: 15},
    {name: "Coffee maker", price: 89},
    {name: "Yoga mat", price: 30}
];

let cart = [];
let productList = document.getElementById("products");

for(let i = 0; i < products.length; i++) {
    let product = products[i];
    let line = document.createElement("p");
    line.textContent = product.name + " - $" + product.price + " ";

    let button = document.createElement("button");
    button.textContent = "Add to cart";
    button.onclick = function() {
        cart.push(product.name);
        document.getElementById("cart").textContent = "In your cart: " + cart.join(", ");
    };
    line.appendChild(button);
    productList.appendChild(line);
}