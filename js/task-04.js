let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

const decrementValue = decrementButton.textContent;
const incrementValue = incrementButton.textContent;

decrementButton.addEventListener('click', handleDecrementButtonClick);

incrementButton.addEventListener('click', handleIncrementButtonClick);

function handleDecrementButtonClick() {
    updateDisplay(counterValue += Number(decrementValue));
    
}

function handleIncrementButtonClick() {
    updateDisplay(counterValue += Number(incrementValue));
    
}

function updateDisplay(value) {
    document.querySelector('#value').textContent = value;
}

