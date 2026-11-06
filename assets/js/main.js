/* javascript */

// Cookies
let startTime = Date.now();
let cookieChoice = "nothing";
let secondsToDecide = 0;
let popup = document.getElementById("cookies");
let acceptButton = document.getElementById("acceptButton");
let rejectButton = document.getElementById("rejectButton");

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