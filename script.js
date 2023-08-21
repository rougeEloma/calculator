
// TODO: Faire la manipulation du DOM dans ce fichier

// elements of the DOM HTML
const label = document.querySelector('#calcul'),
  currentInput = document.querySelector('#input'),
  buttons = document.querySelectorAll('button'),
  form = document.querySelector('form');

// containers of each labels
let expression = ''; // might not need it
let operator = '';
let finalResult = 0;

// blocking the page refrishing
form.addEventListener('submit', event => {
  event.preventDefault();

});

// disable they keyboard
currentInput.disabled = true;

buttons.forEach(button => {
  button.addEventListener('click', (event) => {


    const buttonContent = button.textContent;

    //adding digits in the current input
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

      // the non-digits buttons
      switch (buttonContent) {
        // AC and C
        case 'AC':
          label.innerText = "";
          currentInput.value = "";

          event.preventDefault();
          break;
        case 'C':
          currentInput.value = currentInput.value.slice(0, -1);


          event.preventDefault();
          break;
        // operators
        case '+':
          operator = buttonContent;
          expression = currentInput.value + ' ' + operator + ' ';
          label.innerHTML += expression;
          currentInput.value = "";

          event.preventDefault();
          break;
        case '-':
          operator = buttonContent;
          expression = currentInput.value + ' ' + operator + ' ';
          label.innerHTML += expression;
          currentInput.value = "";

          event.preventDefault();
          break;
        case '×':
          operator = '*';
          expression = currentInput.value + ' ' + operator + ' ';
          label.innerHTML += expression;
          currentInput.value = "";

          event.preventDefault();
          break;
        case '÷':
          operator = '/';
          expression = currentInput.value + ' ' + operator + ' ';
          label.innerHTML += expression;
          currentInput.value = "";

          event.preventDefault();
          break;
        case '+/-':
          // Inverser le signe du nombre dans le champ de saisie
          currentInput.value = -currentInput.value;
          expression = -expression;
          event.preventDefault();
          break;

        //results
        case '%':
          expression = label.innerHTML + currentInput.value;
          finalResult = eval(expression) / 100;
          currentInput.value = finalResult;
          label.innerHTML = expression + ' % ' + finalResult;
          console.log(finalResult);

          event.preventDefault();
          break;
        case '=':
          expression = label.innerHTML + currentInput.value;
          finalResult = eval(expression);
          currentInput.value = finalResult;
          console.log(finalResult);
          label.innerHTML = expression + ' = ' + finalResult;

          event.preventDefault();
          break;
      }
    }

  })
})