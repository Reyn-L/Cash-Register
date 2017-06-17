/*jshint esversion: 6 */
(function(){
  let cal = window.calculator;
const display = document.getElementById("display");
const NUMBER = document.querySelectorAll("input");
    NUMBER.forEach(function(num){
      num.addEventListener("click", function(r){
        display.innerHTML += r.target.value;
        console.log(r.target.value);
      });

function getDisplay(){
  return display.innerHTML;
}
let value = getDisplay();
cal.load(Number(value));
    });
function getSum(){
  cal.add();
  return cal.add();
}




}());


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







