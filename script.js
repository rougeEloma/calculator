import { calculate } from "./calculator.js";

// TODO: Faire la manipulation du DOM dans ce fichier

// elements of the DOM HTML
const label = document.querySelector('#calcul'),
currentInput = document.querySelector('#input'),
buttons = document.querySelectorAll()

// containers of each expressions
let expression = ''; // might not need it
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', event => {

    const buttonContent = button.textContent;
    
    if (buttonContent >= '0' && buttonContent <= '9') {

    }
    else if (buttonContent === '.') {

    }
    else {
      switch (buttonContent) {
        case 'AC' :
          label.innerText = "";
          currentInput.value = "";
        case 'C' :
          
      }
    }
    
  })
})