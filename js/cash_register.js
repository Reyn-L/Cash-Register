/*jshint esversion: 6 */
(function(window){
  let cal = window.calculator;
  //getting buttons to work and show
const key1 = document.getElementById("one");
const keyDecimal = document.getElementById("decimal");
const operatorEqual = document.getElementById("equal");
const operatorPlus = document.getElementById("plus");
const display = document.getElementById("display");
const NUMBER = document.querySelectorAll("input");


let operator = null;
let input = "";

//gets buttons to display
NUMBER.forEach(function(num){
/*num.addEventListener("click", function(r){
  display.innerHTML += r.target.value;
  });*/
//funtion to debugg
function debugAll(){
  console.log({
    action:action,
    input:input,
    operator:operator
});}
function keyPressed(event){
setInput += event.target.dataset.value;
renderDisplay();
}
key1.addEventListener("click", keyPressed);

function renderDisplay(){
display.innertext = input;
}
//sets new input
function setInput(newInputValue){
input = newInputValue;
}
//clears the input
function clearInput(){
input = " ";
}
//working on decimal
keyDecimal.addEventListener("click", function(event){
  if(input.indexOf(" .") < 0){
    keyPressed(event);
}
 });
});
//adds
operatorPlus.addEventListener("click",function(event){
  if(operator !== null){
    executeOperation();
  }
      operator = "ADD";
        cal.load(parseFloat(input));
          clearInput();
});
//working on equal sign to operate operators
operatorEqual.addEventListener("click", function(event){
switch(operator){
  case "ADD":
    cal.add(parseFloat(input) );
    break;
  default:
  //throw new Error("operation $[operator] is not supported yet");
}
setInput(cal.getTotal());
renderDisplay();
});






}(window));

//gets display to show
/*function getDisplay(){
  return display.innerHTML;
}
//function updateDisplay(){
  //return dislay.innerHTML = }

function clearAll(){
  document.getElementById("display").value = "0.00";
}*/
/*let value = getDisplay();
cal.load(Number(value));*/

//equals
/*function equal(){
  let op = operator;
  let n = Number(display.innerHTML);
  if(op === "&plus;"){
    let ad = cal.add(n);
    display.innerHTML = ad;
  }*/
//}

//1st get load function working to store the memory
//2nd create a new function to start on add
//3rd the add funtion should be an eventlistener
//4th we can use eventlistener to make the + button, store into the load function
//5th possibly by referencing the load function within the add function
//6th the + sign should end the string of numbers
//7th convert strings into numbers via Number(value) or parseInt
//8th Reference calculator.js








