// { calculate } from './calculator.js';

// TODO: Faire la manipulation du DOM dans ce fichier

var inputUser = document.getElementById('input'), // input/output button
inputValue = inputUser.value, // the current input value
reset = document.getElementById('reset'), // AC button
clear = document.getElementById('clear'), // clear button
plusoumoins = document.getElementById('plusoumoins'), // plusaumoins button
percentage = document.getElementById('percentage'), // percentage button
divideby = document.getElementById('divideby'), // divideby button
times = document.getElementById('times'), // times button
minus = document.getElementById('minus'), // minus button
plus = document.getElementById('plus'), // plus button
  theNumber = document.querySelectorAll('.numpad'), // number buttons (dot included)
  theDot = document.querySelector('.dot'), // dot buttons 
  equals = document.getElementById('equals'); // equal button

function cliquer(){
    inputValue += theNumber.textContent;
}
theNumber.addEventListener('click',cliquer);

// reset all inputs
function clearAll() {
    inputValue = "";
}
reset.addEventListener('click', clearAll)

// delete last digit
function clearLastDigit() {
    inputValue.slice(-1, 1);
    console.log(inputValue);
}
//clear.addEventListener('click', clearLastDigit)

// cliquer les digits