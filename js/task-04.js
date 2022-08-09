const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const counter = document.querySelector('#value');

let counterValue = (counter.textContent = 0);

decrementButton.addEventListener('click', () => {
  counter.innerText = counterValue -= 1;
});

incrementButton.addEventListener('click', () => {
  counter.innerText = counterValue += 1;
});