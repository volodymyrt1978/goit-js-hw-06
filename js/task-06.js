const textInput = document.querySelector('#validation-input');

const validNumberOfSymbols = textInput.getAttribute('data-length');

textInput.addEventListener("blur", handleOnInputBlur);

function handleOnInputBlur (event) {
       
    if (event.target.value.length === Number(validNumberOfSymbols)) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');        
    }

    else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
}
    
