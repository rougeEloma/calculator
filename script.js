

const displayCurrentOperation = document.querySelector('#calcul');
const inputElement = document.querySelector('#input');
const resetButton = document.querySelector('#reset');
const clearButton = document.querySelector('#clear');
const minusPlusButton = document.querySelector('#plusoumoins');
const percentageButton = document.querySelector('#percentage');

const divideButton = document.querySelector('#divideby');
const timesButton = document.querySelector('#times');
const minusButton = document.querySelector('#minus');
const plusButton = document.querySelector('#plus');

const equalsButton = document.querySelector('#equals');

const digitButtons = document.querySelectorAll('.digit');

const dotButton = document.querySelector('#dot');

const operatorsArray = [divideButton, timesButton, minusButton, plusButton];


// declaring utility functions
function clearInput() {
  inputElement.value = '';
}

function resetEverything() {
  clearInput();
  displayCurrentOperation.innerHTML = '';
}

function disableKeyboard(event) {
  if (event.key) {
    event.preventDefault();
  }
}

function addElementToInputElement(value) {
  inputElement.value += value
}

function addToDisplayCurrentOperation (toDisplay, operation){
        displayCurrentOperation.textContent = toDisplay + ' ' + operation;
    clearInput()
}

function addInputValueTodisplayCurrentOperation(event) {
  event.preventDefault();

  if (displayCurrentOperation.textContent) {
  const result =  makeCurrentOperation(event)
     addToDisplayCurrentOperation(result,event.target.textContent)
    
  } else {
    addToDisplayCurrentOperation(inputElement.value,event.target.textContent)
  }

}

function makeCurrentOperation(event) {
  event.preventDefault();
  const operationTomake = displayCurrentOperation.textContent + ' ' + inputElement.value

  const result = eval(operationTomake.replace("÷","/").replace('×','*'));
  return result

}




// add event to different elements
clearButton.addEventListener('click', clearInput);
resetButton.addEventListener('click', resetEverything);
inputElement.addEventListener('keypress', disableKeyboard)
digitButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    addElementToInputElement(button.textContent);
  })
})
operatorsArray.forEach(function(operator) {
  operator.addEventListener('click', addInputValueTodisplayCurrentOperation
  )
})
equalsButton.addEventListener('click', makeCurrentOperation)

