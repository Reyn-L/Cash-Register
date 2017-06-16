/*jshint esversion: 6 */
var button7 = document.getelementById("seven").addEventListener("click", number7);
var screen = document.getelementById("display");
number7.addEventListener("click", test);
function test(){
  screen.innerHTML +=7;

}