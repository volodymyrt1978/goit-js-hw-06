const variableText = document.querySelector('#text');
const fontSizeControl = document.querySelector('#font-size-control');


fontSizeControl.addEventListener("input", handleInputOnFontSizeControl);

function handleInputOnFontSizeControl(event) {
    variableText.style.fontSize = event.target.value + 'px';
};


