const changeColorButton = document.querySelector('.change-color');
console.log(changeColorButton);

const valueOfColor = document.querySelector('.color');
console.log(valueOfColor.textContent);

changeColorButton.addEventListener("click", handleClickOnChangeColorButton);

function handleClickOnChangeColorButton(event) {
  const currentColor = getRandomHexColor()
  document.body.style.backgroundColor = currentColor;
  valueOfColor.textContent = currentColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
