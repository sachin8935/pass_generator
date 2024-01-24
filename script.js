var slider = document.getElementById("myRange");
var output = document.getElementById("numb");
output.innerHTML = slider.value;
slider.oninput = function () {
  output.innerHTML = this.value;
};
var result = "";
var upperStr = "";
var lowerStr = "";
var symbolStr = "";
var numStr = "";
let light = 0;
function check() {
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = "0123456789";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  let symbol = "!@#$%^&*";
  var upperChecked = document.getElementById("alpha");
  if (upperChecked.checked) {
    upperStr = uppercase;
    light++;
  } else {
    upperStr = "";
    light--;
  }
  var numChecked = document.getElementById("num");
  if (numChecked.checked) {
    numStr = number;
    light++;
  } else {
    numStr = "";
    light--;
  }
  var lowerChecked = document.getElementById("s_alpha");
  if (lowerChecked.checked) {
    lowerStr = lowercase;
    light++;
  } else {
    lowerStr = "";
    light--;
  }
  var symbolChecked = document.getElementById("symbol");
  if (symbolChecked.checked) {
    symbolStr = symbol;
    light++;
  } else {
    symbolStr = "";
    light--;
  }
  result = upperStr + lowerStr + symbolStr + numStr;
}
var capital = document.querySelector("#alpha");
capital.addEventListener("click", function () {
  check();
  generateRandomValue();
});
var Num = document.querySelector("#num");
Num.addEventListener("click", function () {
  check();
  generateRandomValue();
});
var Small = document.querySelector("#s_alpha");
Small.addEventListener("click", function () {
  check();
  generateRandomValue();
});
var Symbol = document.querySelector("#symbol");
Symbol.addEventListener("click", function () {
  check();
  generateRandomValue();
});
function generateRandomValue() {
  const randomValue = generateRandomString(slider.value, result);
  return randomValue;
}
function generateRandomString(length, characters) {
  let randomString = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
}
let genreate = document.querySelector(".btn");
genreate.addEventListener("click", function () {
  const ans = generateRandomValue();
  let display = document.querySelector("#display");
  display.textContent = ans;
  let neon_light = document.querySelector(".cl");
  if (light >= 3 && slider.value > 10) {
    neon_light.classList.remove("wh");
    neon_light.classList.remove("re");
    neon_light.classList.add("gr");
  } else {
    neon_light.classList.remove("wh");
    neon_light.classList.remove("gr");
    neon_light.classList.add("re");
  }
});
function clipboard() {
  var copied_text = document.getElementById("display");
  copied_text.select();
  copied_text.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copied_text.value);
  alert("Text Copied to clipboard " + copied_text.value);
}
var clip_text = document.querySelector(".clip");
clip_text.addEventListener("click", function () {
  clipboard();
});
