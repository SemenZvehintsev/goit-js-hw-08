import throttle from 'lodash.throttle';


const form = document.querySelector('form')
form.addEventListener('input', (event) => {console.log(event.target.value)})