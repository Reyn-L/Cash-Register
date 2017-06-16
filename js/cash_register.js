/*jshint esversion: 6 */
const display = document.getElementById("display");
const double = document.getElementById("double");
const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const decimal = document.getElementById("decimal");
const add = document.getElementById("plus");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const balance = document.getElementById("balance");
const withdrawCash = document.getElementById("withdraw");
const depositCash = document.getElementById("deposit");

double.addEventListener("click",  function(){
  display.innerHTML += "00";});
zero.addEventListener("click", function(){
  display.innerHTML += 0;});
one.addEventListener("click", function(){
  display.innerHTML += 1;});
two.addEventListener("click", function(){
  display.innerHTML += 2;});
three.addEventListener("click", function(){
  display.innerHTML += 3;});
four.addEventListener("click", function(){
  display.innerHTML += 4;});
five.addEventListener("click", function(){
  display.innerHTML += 5;});
six.addEventListener("click", function(){
  display.innerHTML += 6;});
seven.addEventListener("click", function(){
  display.innerHTML += 7;});
eight.addEventListener("click", function(){
  display.innerHTML += 8;});
nine.addEventListener("click", function(){
  display.innerHTML += 9;});
decimal.addEventListener("click", function(){
  display.innerHTML += ".";});
divide.addEventListener("click", function(){
  display.innerHTML += "÷";});
multiply.addEventListener("click", function(){
  display.innerHTML += "×";});
subtract.addEventListener("click", function(){
  display.innerHTML += "-";});
add.addEventListener("click", function(){
  display.innerHTML += "+";
equal.addEventListener("click", function(){
  display.innerHTML += "=";});
/*clear.addEventListener("click", function(){
  display.innerHTML = " ";});*/
clear.addEventListener("click", function (){
  display.innerHTML = calc.wipe;});
const cal = window.Calculator;
console.log(cal.add);

});

