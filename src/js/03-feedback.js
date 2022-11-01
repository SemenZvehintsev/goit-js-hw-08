import throttle from 'lodash.throttle';


const form = document.querySelector('form')
form.addEventListener('input', handleSubmit)

const input = document.querySelector('input')
const textarea = document.querySelector('textarea')



function handleSubmit(event) {
    let inputValues = {
        email: '',
        message: ''
    }
  
    if (event.target === input) {
        inputValues = JSON.parse(localStorage.getItem("feedback-form-state"))
        inputEmail = event.target.value;
        inputValues.email = inputEmail;
    } else {
        inputValues = JSON.parse(localStorage.getItem("feedback-form-state"))
        inputMessage = event.target.value;
        inputValues.message = inputMessage;
    }            
        localStorage.setItem("feedback-form-state", JSON.stringify(inputValues));
        console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  }


// class inputForm {

//     form = document.querySelector('form');
//     input = document.querySelector('input');
//     textarea = document.querySelector('textarea');
//     inputValues = {
//         email: '',
//         message: ''
//     }

//     start(){
//         this.inputFull()
//         console.log(this.inputValues)

//     }

//     inputFull() {this.form.addEventListener('input', this.importText)}

//     importText(event) {
//         if (event.target === this.input) {
//             this.inputValues.email = event.target.value
//             console.log(this.inputValues)

//         } if (event.target === this.textarea) {
//             this.inputValues.message = event.target.value
//             console.log(this.inputValues)

//         }
//     }
    
// }

// new inputForm().start()