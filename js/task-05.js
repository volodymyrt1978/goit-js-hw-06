const nameInput = document.querySelector('#name-input');
const nameOnDisplay = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) => {
    
    if (event.currentTarget.value === "") { nameOnDisplay.textContent = "Anonymous" }
        else { nameOnDisplay.textContent = event.currentTarget.value };
});