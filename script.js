const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";

const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[] ></-=";

const allChars = upperCase + LowerCase + number + symbol;

const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
};

const button = document.getElementById("btn");
button.addEventListener("click", () => {
  createPassword();
});

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
