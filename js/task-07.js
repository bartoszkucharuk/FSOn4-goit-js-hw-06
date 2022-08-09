const rangeSlider = document.querySelector('#font-size-control');
const textFont = document.querySelector('#text');

rangeSlider.addEventListener('input', event => {
  textFont.style.fontSize = `${event.currentTarget.value}px`;
});