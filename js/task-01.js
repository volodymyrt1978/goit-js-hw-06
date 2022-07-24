const arrayOfItems = document.querySelectorAll(".item ul");
console.log("Number of categories: ", arrayOfItems.length);

arrayOfItems.forEach((item) => {
    const titleOfItem = item.previousElementSibling.textContent;
    const element = item.children;
    const amountOfElements = element.length;
    console.log(`Category: ${titleOfItem}`);
    console.log(`Elements: ${amountOfElements}`);
})




