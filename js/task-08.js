const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const userData = {};
    const formData = new FormData(loginForm);

     formData.forEach(function(value, key) {
                userData[key] = value;
     });
    if (Object.values(userData).every(value => value)) {
        console.log(userData);
        
    } else {
            alert('Всі поля повинні бути заповнені.');
        }
loginForm.reset();

})