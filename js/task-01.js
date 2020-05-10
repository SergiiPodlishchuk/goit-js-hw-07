const ulCategories = document.querySelectorAll(".item");
const liItemsLenght = ulCategories.length;
console.log(`В списке ${liItemsLenght} категории`);

function categories(items) {
  const titleCategories = ulCategories[items].children[0].textContent;
  const numbersItem = ulCategories[items].children[1].children.length;

  console.log(`Категория: ${titleCategories}`);
  console.log(`Количество элементов: ${numbersItem} `);
}

categories(0);
categories(1);
categories(2);
