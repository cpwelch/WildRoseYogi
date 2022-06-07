const contactForm = document.querySelector(".contact-form");
const alertBox = document.querySelector(".alert");
const closeAlertBox = document.querySelector(".gohomebtn");
const submit = document.querySelector(".submit");

let fullName = document.querySelector("#name");
let email = document.querySelector("#email");
let contactNo = document.querySelector("#contactNo");
let locations = document.querySelector("#location");
let yogaClass = document.querySelector("#yogaClass");
let yogaStyle = document.querySelector("#yogaStyle");
let message = document.querySelector("#message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    name: fullName.value,
    email: email.value,
    contact: contactNo.value,
    location: locations.value,
    yogaClass: yogaClass.value,
    yogaStyle: yogaStyle.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/contactme");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText !== "Error") {
      fullName.value = "";
      email.value = "";
      locations.value = "";
      contactNo.value = "";
      message.value = "";
    } else {
      alert("Something went wrong!");
    }
  };

  xhr.send(JSON.stringify(formData));
});

submit.addEventListener("click", function () {
  setTimeout(function () {
    document.querySelector(".alert").style.display = "flex";
  }, 1500);
});

closeAlertBox.addEventListener("click", function () {
  document.querySelector(".alert").style.display = "none";
});
