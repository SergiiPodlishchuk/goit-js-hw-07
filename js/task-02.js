const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulIngredients = document.querySelector("#ingredients");

const addIngredient = (arrIngredients) =>
  arrIngredients.forEach((ingredient) => {
    const liVegetable = document.createElement("li");
    liVegetable.textContent = ingredient;
    ulIngredients.appendChild(liVegetable);
  });
console.log(ulIngredients);

addIngredient(ingredients);
