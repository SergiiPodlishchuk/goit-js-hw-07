"use strict";
const divBoxes = document.querySelector("#boxes");
const buttonRender = document.querySelector("button[data-action = render]");
const buttonDestroy = document.querySelector("button[data-action = destroy]");
const input = document.querySelector("#controls > input");
const documentFragment = document.createDocumentFragment();

input.addEventListener("input", () => {
  console.log(input.valueAsNumber);
});

buttonRender.addEventListener("click", createBoxes);
buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes() {
  // for (let i = 0; i < input.valueAsNumber; i++) {
  //   const div = document.createElement("div");
  //   documentFragment.appendChild(div);
  //   div.classList.add(`main`);
  //   div.style.width = `${30 + i * 10}px`;
  //   div.style.height = `${30 + i * 10}px`;
  //   const r = Math.floor(Math.random() * 256);
  //   const g = Math.floor(Math.random() * 256);
  //   const b = Math.floor(Math.random() * 256);
  //   div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  // }

  Array(input.valueAsNumber)
    .fill("")
    .map((e, i) => {
      const div = document.createElement("div");
      documentFragment.appendChild(div);
      div.classList.add(`main`);
      div.style.width = `${30 + i * 10}px`;
      div.style.height = `${30 + i * 10}px`;
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });

  divBoxes.appendChild(documentFragment);
}

function destroyBoxes() {
  input.value = "";
  divBoxes.innerHTML = "";
}
