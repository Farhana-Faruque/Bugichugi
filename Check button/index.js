
const myCheckbox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const payPalBtn = document.getElementById("payPalBtn");

const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function(){

    if (myCheckbox.checked) {
        subResult.textContent = "You are subscribed.";
    } else {
        subResult.textContent = "You are NOT subscribed.";
    }

    if (visaBtn.checked) {
        payResult.textContent = "You are paying with Visa.";
    } else if (mastercardBtn.checked) {
        payResult.textContent = "You are paying with MasterCard.";
    } else if (payPalBtn.checked) {
        payResult.textContent = "You are paying with PayPal.";
    } else {
        payResult.textContent = "You must select a payment type.";
    }
};
