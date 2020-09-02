const sliderValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
var output = document.getElementById("demo");
output.innerHTML = 15 - inputSlider.value;
inputSlider.oninput = (() => {
  let value = inputSlider.value;
  sliderValue.textContent = "$" + value;
  sliderValue.style.left = (value*5.47) + "%"; 
  output.innerHTML = 15 - value;
})
