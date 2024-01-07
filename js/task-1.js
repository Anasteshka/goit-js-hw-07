const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll(".item");
const numbersOfCategories = categoriesItems.length;

console.log(`Number of categories: ${numbersOfCategories}`);

categoriesItems.forEach((categoriesItem) => {
  const categoryTitle = categoriesItem.firstElementChild.textContent;
  const categoryItemsAmount = categoriesItem.lastElementChild.children.length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsAmount}`);
});
