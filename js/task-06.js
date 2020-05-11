const input = document.querySelector("#validation-input");

input.addEventListener("blur", validInput);

function validInput() {
  const valueLength = input.value.length;
  const dataLength = Number(input.dataset.length);
  if (valueLength === dataLength) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
