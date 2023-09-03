const nameInput = document.querySelector('#name-input');
console.log(nameInput)
const nameOutput = document.querySelector('#name-output');
console.log(nameOutput);

nameInput.addEventListener('input', function () {
    nameOutput.textContent = nameInput.value || "Anonymous"
});