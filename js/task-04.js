let counterValue = 0;

const spanCounter = document.querySelector("#value");
const buttonDecrement = document.querySelector("[data-action = decrement]");
const buttonIncrement = document.querySelector("[data-action = increment]");

buttonIncrement.addEventListener("click", increment);
buttonDecrement.addEventListener("click", decrement);

function increment() {
  counterValue++;
  spanCounter.textContent = counterValue;
}

function decrement() {
  counterValue--;
  spanCounter.textContent = counterValue;
}
