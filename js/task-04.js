const decrementButton = document.querySelector('[data-action = "decrement"]');
console.dir(decrementButton);
const incrementButton = document.querySelector('[data-action = "increment"]');

const value = document.querySelector('#value')
console.log(value)

let counterValue = 0;

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});
