const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll(".item");
const numbersOfCategories = categoriesItems.length;

console.log(`Number of categories: ${numbersOfCategories}`);

categoriesItems.forEach((categoriesItem) => {
  const categoryTitle = categoriesItem.querySelector("h2").textContent;
  const categoryItemsAmount = categoriesItem.querySelectorAll("ul > li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsAmount}`);
});
