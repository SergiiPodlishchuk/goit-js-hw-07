const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulIngredients = document.querySelector("#ingredients");
const df = document.createDocumentFragment();

const addIngredient = (arrIngredients) =>
  arrIngredients.forEach((ingredient) => {
    const liVegetable = document.createElement("li");
    liVegetable.textContent = ingredient;
    df.appendChild(liVegetable);
  });

addIngredient(ingredients);

ulIngredients.appendChild(df);
