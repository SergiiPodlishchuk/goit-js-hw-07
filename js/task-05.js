const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", changeName);

function changeName(event) {
  const input = event.currentTarget;

  if (input.value === "") {
    span.textContent = "незнакомец";
  } else {
    span.textContent = input.value;
  }
}
