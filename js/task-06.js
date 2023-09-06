const Input = document.querySelector('#validation-input');

    function onValidationInput (event) {
    
    if (event.currentTarget.value.length === Number(Input.dataset.length)) {
        Input.classList.remove('invalid');
        Input.classList.add('valid')
    } else {
        Input.classList.remove('valid');
        Input.classList.add('invalid');
    }
};

Input.addEventListener('blur', onValidationInput)

