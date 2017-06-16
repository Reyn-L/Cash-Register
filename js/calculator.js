/*jshint esversion: 6 */
window.Calculator = (function() {
  let total = 0;
  let memory = 0;
  return{
  start : load,
  sum : add,
  difference : subtract,
  product : multiply,
  quotient : divide,
  wipe : clear,
  balance : getBalance,
  deposit : depositCash,
  withdraw : withdrawCash,
  error : error
};

function load(x){
  error(x);
  total = x;
  return total;
}
function add(x){
  error(x);
  total = total + x;
  return total;
}
function subtract(x){
  error(x);
  total = total - x;
  return total;
}
function multiply(x){
  error(x);
  total = total * x;
  return total;
}
function divide(x){
  error(x);
  total = total / x;
  return total;
}
function clear() {
  memory = 0;
  return memory;
}
function getBalance(){
  return total;
}
function depositCash(){
  memory = total;
  return memory;
}
function withdrawCash(){
  return memory;
}
function error(x) {
  if(typeof x !== "number"){
    throw new Error("Error");
  }
  }

})();

