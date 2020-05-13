const input = document.querySelector("#validation-input");

input.addEventListener("blur", validInput);

function validInput() {
  const valueLength = input.value.length;
  const dataLength = Number(input.dataset.length);
  if (valueLength === dataLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
