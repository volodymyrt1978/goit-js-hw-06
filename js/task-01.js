const categoryItems = document.querySelectorAll(".item");
console.log("Number of categories: ", categoryItems.length);

const categories = document.querySelector("#categories");

const blockOfAnimals = categories.firstElementChild;
const blockOfProducts = blockOfAnimals.nextElementSibling;
const blockOfTechnologies = categories.lastElementChild;


const titleOfAnimals = blockOfAnimals.firstElementChild.textContent;
const numberOfAnimals = blockOfAnimals.lastElementChild.children.length;
console.log("Category: ", titleOfAnimals);
console.log("Elements: ", numberOfAnimals);

const titleOfProducts = blockOfProducts.firstElementChild.textContent;
const numberOfProducts = blockOfProducts.lastElementChild.children.length;
console.log("Category: ", titleOfProducts);
console.log("Elements: ", numberOfProducts);

const titleOfTechnologies = blockOfTechnologies.firstElementChild.textContent;
const numberOfTechnologies = blockOfTechnologies.lastElementChild.children.length;
console.log("Category: ", titleOfTechnologies);
console.log("Elements: ", numberOfTechnologies);


