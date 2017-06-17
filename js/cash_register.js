/*jshint esversion: 6 */
(function(){
  let cal = window.calculator;
  //getting buttons to work and show
const display = document.getElementById("display");
const NUMBER = document.querySelectorAll("input");
    NUMBER.forEach(function(num){
      num.addEventListener("click", function(r){
        display.innerHTML += r.target.value;
        console.log(r.target.value);
      });
//gets display to show
function getDisplay(){
  return display.innerHTML;
}
//function updateDisplay(){
  //return dislay.innerHTML = }

function clearAll(){
  document.getElementById("display").value = "0.00";
}
let value = getDisplay();
cal.load(Number(value));

function load(){
let store =0;
}
    });
//adds
const plus = document.getElementById("plus");
function getSum(){
plus.addEventListener();
  cal.add();
  return cal.add();
}
//equals
function equal(){
  cal.equal();
}

//switch case for operators
function operators(op, hi){
  switch(op){
    case "+": cal.add(hi);
      break;
    case "-": cal.subtract(hi);
      break;
    case "x": cal.multiply(hi);
      break;
    case "÷": cal.divide(hi);
  }
}




}());

//1st get load function working to store the memory
//2nd create a new function to start on add
//3rd the add funtion should be an eventlistener
//4th we can use eventlistener to make the + button, store into the load function
//5th possibly by referencing the load function within the add function
//6th the + sign should end the string of numbers
//7th convert strings into numbers via Number(value) or parseInt
//8th Reference calculator.js

/*const DOUBLE = document.getElementById("double");
const ZERO = document.getElementById("zero");
const ONE = document.getElementById("one");
const TWO = document.getElementById("two");
const THREE = document.getElementById("three");
const FOUR = document.getElementById("four");
const FIVE = document.getElementById("five");
const SIX = document.getElementById("six");
const SEVEN = document.getElementById("seven");
const EIGHT = document.getElementById("eight");
const NINE= document.getElementById("nine");
const DECIMAL = document.getElementById("decimal");
const ADD = document.getElementById("plus");
const SUBTRACT = document.getElementById("subtract");
const MULTIPLY = document.getElementById("multiply");
const DIVIDE = document.getElementById("divide");
const EQUAL = document.getElementById("equal");
const CLEAR = document.getElementById("clear");
const BALANCE = document.getElementById("balance");
const WITHDRAW_CASH = document.getElementById("withdraw");
const DEPOSIT_CASH = document.getElementById("deposit");

DOUBLE.addEventListener("click",  function(){
  DISPLAY.innerHTML += "00";
});
ZERO.addEventListener("click", function(){
  DISPLAY.innerHTML += 0;
});
ONE.addEventListener("click", function(){
  DISPLAY.innerHTML += 1;
});
TWO.addEventListener("click", function(){
  DISPLAY.innerHTML += 2;
});
THREE.addEventListener("click", function(){
  DISPLAY.innerHTML += 3;
});
FOUR.addEventListener("click", function(){
  DISPLAY.innerHTML += 4;
});
FIVE.addEventListener("click", function(){
  DISPLAY.innerHTML += 5;
});
SIX.addEventListener("click", function(){
  DISPLAY.innerHTML += 6;
});
SEVEN.addEventListener("click", function(){
  DISPLAY.innerHTML += 7;
});
EIGHT.addEventListener("click", function(){
  DISPLAY.innerHTML += 8;
});
NINE.addEventListener("click", function(){
  DISPLAY.innerHTML += 9;
});
DECIMAL.addEventListener("click", function(){
  DISPLAY.innerHTML += ".";
});
DIVIDE.addEventListener("click", function(){
  DISPLAY.innerHTML = "÷";
});
MULTIPLY.addEventListener("click", function(){
  DISPLAY.innerHTML = "×";
});
SUBTRACT.addEventListener("click", function(){
  DISPLAY.innerHTML = "-";
});
ADD.addEventListener("click", function(){
  DISPLAY.innerHTML = "+";
});
EQUAL.addEventListener("click", function(){
  display.innerHTML = "=";
});
CLEAR.addEventListener("click", function(){
  display.innerHTML = "0.00";
});*/




/*let operations = function(r) {
  switch(experssion){
    case "+":
      cal.add(r);
      break;
    case "-":
      cal.subtract(r);
      break;
    case "÷":
      cal.divide(r);
      break;
    case "×":
      cal.multiply(r);
      break;
  }*/







