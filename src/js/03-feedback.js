import throttle from 'lodash.throttle';

const form = document.querySelector('form')
const input = document.querySelector('input')
const textarea = document.querySelector('textarea')

const inputValues = {
    email: '',
    message: ''
}

form.addEventListener('submit', clearAll)
input.addEventListener('input', throttle(typeEmail, 500))
textarea.addEventListener('input', throttle(typeMessage, 500))
window.addEventListener('load', pageLoad)

function typeEmail(event) {
    inputValues.email = event.currentTarget.value;
    localStorageRenew()
}

function typeMessage(event) {
    inputValues.message = event.currentTarget.value;
    localStorageRenew()
}

function localStorageRenew() {
    localStorage.setItem("feedback-form-state", JSON.stringify(inputValues));
}

function pageLoad() {
    lastTyped = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (lastTyped !== null) {
        input.value = lastTyped.email;
        textarea.value = lastTyped.message;}   
}

function clearAll(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.removeItem("feedback-form-state");
    event.currentTarget.reset();
}