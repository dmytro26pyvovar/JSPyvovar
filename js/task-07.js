const Input = document.querySelector('#font-size-control');
const Span = document.querySelector('#text');
Input.addEventListener('input', function () {
    Span.style.fontSize = Input.value + 'px';
});