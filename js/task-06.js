const Input = document.querySelector('#validation-input');
Input.addEventListener('blur', function () {
    const inputValue = Input.value;
    const validLength = Input.getAttribute('[data-length]');
    if (inputValue === validLength) {
        Input.classList.remove('invalid');
        Input.classList.add('valid')
    } else {
        Input.classList.remove('valid');
        Input.classList.add('invalid');
    }
});
