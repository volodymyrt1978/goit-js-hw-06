const categoryItems = document.querySelectorAll(".item");
console.log("Number of categories: ", categoryItems.length);

const categories = document.querySelector("#categories");

const firstBlock = categories.firstElementChild;
const secondBlock = firstBlock.nextElementSibling;
const thirdBlock = categories.lastElementChild;


const titleOfFirstBlock = firstBlock.firstElementChild.textContent;
const numberOfFirstBlock = firstBlock.lastElementChild.children.length;
console.log("Category: ", titleOfFirstBlock);
console.log("Elements: ", numberOfFirstBlock);

const titleOfSeccondBlock = secondBlock.firstElementChild.textContent;
const numberOfSeccondBlock = secondBlock.lastElementChild.children.length;
console.log("Category: ", titleOfSeccondBlock);
console.log("Elements: ", numberOfSeccondBlock);

const titleOfThirdBlock = thirdBlock.firstElementChild.textContent;
const numberOfThirdBlock = thirdBlock.lastElementChild.children.length;
console.log("Category: ", titleOfThirdBlock);
console.log("Elements: ", numberOfThirdBlock);


