import { calculate } from "./calculator.js";

// TODO: Faire la manipulation du DOM dans ce fichier

// elements of the DOM HTML
const label = document.querySelector('#calcul'),
currentInput = document.querySelector('#input'),
buttons = document.querySelectorAll('button');

// const inputValue = currentInput.value;

// containers of each labels
let expression = ''; // might not need it
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', (event) => {

    const buttonContent = button.textContent;
    
    if (buttonContent >= '0' && buttonContent <= '9') {
      if (buttonContent === '0') {
        if (currentInput.value.length === 1 && currentInput.value === '0') {
          currentInput.value += '';
        } 
        else {
          currentInput.value += buttonContent;
        }
      }
      else {
        currentInput.value += buttonContent;
      }
    }
    else if (buttonContent === '.') {
      if (currentInput.value.length === 0) {
        currentInput.value += '';
      }
      else if (currentInput.value.includes(buttonContent)) {
        currentInput.value += '';
      }
      else {
        currentInput.value += buttonContent;
      }
    }
    else {
      switch (buttonContent) {
        case 'AC' :
          label.innerText = "";
          currentInput.value = "";

          event.preventDefault();
          break;
        case 'C' :
          currentInput.value = currentInput.value.slice(0, -1);
          label = label.slice(0, -1);
          
          event.preventDefault();
          break;
      }
    }
    
  })
})