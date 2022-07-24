const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");

const firstEl = document.createElement("li");
firstEl.textContent = ingredients[0];
firstEl.classList.add("item");

const secondEl = document.createElement("li");
secondEl.textContent = ingredients[1];
secondEl.classList.add("item");

const thirdEl = document.createElement("li");
thirdEl.textContent = ingredients[2];
thirdEl.classList.add("item");

const forthEl = document.createElement("li");
forthEl.textContent = ingredients[3];
forthEl.classList.add("item");

const fifthEl = document.createElement("li");
fifthEl.textContent = ingredients[4];
fifthEl.classList.add("item");

const sixthEl = document.createElement("li");
sixthEl.textContent = ingredients[5];
sixthEl.classList.add("item");


list.after(firstEl, secondEl, thirdEl, forthEl, fifthEl, sixthEl);

