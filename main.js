const form = document.querySelector(".form");
const input = document.querySelector(".email");
const error = document.querySelector(".error");
const errorTxt = document.querySelector(".error-txt");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateEmail(input)) {
    error.style.opacity = 0;
    errorTxt.style.opacity = 0;
    alert("Thank You for Subscribing!");
    input.value = "";
  } else {
    error.style.opacity = 1;
    errorTxt.style.opacity = 1;
  }
});

const validateEmail = (inputText) => {
  var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return inputText.value.match(mailFormat);
};
