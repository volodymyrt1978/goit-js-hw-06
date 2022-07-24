const textInput = document.querySelector('#validation-input');

textInput.addEventListener("blur", onInputBlur);

function onInputBlur() {
    console.log("Инпут потерял фокус");
}

textInput.addEventListener("change", onInputChange);

function onInputChange(event) {
console.log(event.currentTarget.value);
}