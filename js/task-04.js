let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');


decrementButton.addEventListener('click', handleDecrementButtonClick);


incrementButton.addEventListener('click', handleIncrementButtonClick);

function handleDecrementButtonClick() {
    updateDisplay(counterValue -= 1);
    
}

function handleIncrementButtonClick() {
    updateDisplay(counterValue += 1);
    
}

function updateDisplay(value) {
    document.querySelector('#value').innerHTML = value;
}
