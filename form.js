var form  = document.getElementsByTagName('form')[0];
var phoneNumber = document.getElementById('phone');
var error = document.querySelector('.error');

phoneNumber.addEventListener("input", function (event) {
    if (phoneNumber.validity.valid) {
        error.innerHTML = "";
        error.className = "error";
    }
}, false);

form.addEventListener("submit", function (event) {
    if (!phoneNumber.validity.valid) {
        error.innerHTML = "I expect an e-mail, darling!";
        error.className = "error active";
        event.preventDefault();
    }
}, false);