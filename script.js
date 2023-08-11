// { calculate } import './calculator';

// TODO: Faire la manipulation du DOM dans ce fichier

var inputUser = document.getElementById('input'), // input/output button
reset = document.getElementById('reset'), // AC button
clear = document.getElementById('clear'), // clear button
plusoumoins = document.getElementById('plusoumoins'), // plusaumoins button
percentage = document.getElementById('percentage'), // percentage button
divideby = document.getElementById('divideby'), // divideby button
times = document.getElementById('times'), // times button
minus = document.getElementById('minus'), // minus button
plus = document.getElementById('plus'), // plus button
  theNumber = document.querySelectorAll('.numpad'), // number buttons (dot included)
  theDot = document.querySelectorAll('.dot'), // dot buttons 
  equals = document.getElementById('equals'); // equal button
