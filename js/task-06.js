const textInput = document.querySelector('#validation-input');
const dataLength = textInput.getAttribute('data-length');

textInput.addEventListener('blur', () => {
    const inputLength = textInput.value.length;
    console.log(inputLength);

    if (inputLength < dataLength) {
        textInput.setAttribute('class', 'invalid');
        } else {
            textInput.setAttribute('class', 'valid');
        }
    });