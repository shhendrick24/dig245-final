/* javascript */

// Comments are AI created code is a mix of AI and myself.

// [AI-Assisted: Copilot SDK in VS Code | 2026-11-09]
// Intent: Track the user's cookie choice and timing while the popup is open.
// This script handles the cookie consent modal and builds a simple product list with add-to-cart buttons.

// Cookies
let startTime = Date.now();
let cookieChoice = "nothing";
let secondsToDecide = 0;
let popup = document.getElementById("cookies");
let acceptButton = document.getElementById("acceptCookies");
let rejectButton = document.getElementById("rejectCookies");

popup.showModal(); // show the pop-up when page opens

acceptButton.onclick = function () {
    cookieChoice = "Accept all";
    secondsToDecide = (Date.now() - startTime) / 1000;
    popup.close();
}

rejectButton.onclick = function () {
    cookieChoice = "Reject all";
    secondsToDecide = (Date.now() - startTime) / 1000;
    popup.close();
};

// [AI-Assisted: Claude Opus | 2026-11-10] this whole chunk that creates the stop page was made in collaboration with AI
// grab the button and the screens
let placeOrderButton = document.getElementById("placeOrder");
let store = document.getElementById("store");
let stopScreen = document.getElementById("stopScreen");
let dataScreen = document.getElementById("dataScreen");

let timer;

function showDataScreen() {
    clearTimeout(timer);
    stopScreen.hidden = true;
    dataScreen.hidden = false;
}

// when they click Place order
placeOrderButton.onclick = function (event) {
    event.stopPropagation();  

    store.hidden = true;
    stopScreen.hidden = false;

    timer = setTimeout(showDataScreen, 20000);
};

// when they click anywhere on the page
document.onclick = function () {
    // only flip if the stop screen is showing right now
    if (stopScreen.hidden == false) {
        showDataScreen();
    }
};

// [AI-Assisted: Copilot SDK in VS Code | 2026-11-09]
// Intent: Create the catalog data and render each item with a button that adds it to the cart.
// The product array defines the available items, and each product is displayed as a text line with an action button.
let products = [
    { name: "Wireless earbuds", price: 49 },
    { name: "Phone charger", price: 15 },
    { name: "Coffee maker", price: 89 },
    { name: "Yoga mat", price: 30 }
];

let cart = [];
let productList = document.getElementById("products");

for (let i = 0; i < products.length; i++) {
    let product = products[i];
    let line = document.createElement("p");
    line.textContent = product.name + " - $" + product.price + " ";

    let button = document.createElement("button");
    button.textContent = "Add to cart";
    button.onclick = function () {
        cart.push(product.name);
        document.getElementById("cart").textContent = "In your cart: " + cart.join(", ");
    };
    line.appendChild(button);
    productList.appendChild(line);
}