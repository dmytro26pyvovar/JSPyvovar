const loginForm = document.querySelector('.login-form');

const formData = {};

function onFormSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
         alert('Всі поля мають бути заповнені!!!')
        event.currentTarget.reset();
    } else {
        formData.email = event.currentTarget.elements.email.value;
        formData.password = event.currentTarget.elements.password.value;
        event.currentTarget.reset();
    }
}