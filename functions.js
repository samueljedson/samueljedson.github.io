//first attempt to alter pages via javascript using different parameters, variables and functions

//window.onload = function sayHi() {
    // 
    // alert(“Hello World of Javascript!”); 
 //}

 //JS Entry or button
    var x, y;
x = 5 + 6;
y = x * 10;
document.getElementById("first").innerHTML = y;

function sayHi() {
    var elemRef = document.getElementById("first");
    elemRef.innerHTML = "goodbye";

}
//adding a function to my index.html to reveal an answer

function myFunctionreveal() {
    document.getElementById("jsbutton").innerHTML = "Milan, Italy";
  }

  function myFunctionlook() {
    document.getElementById("jsbuttonstyle").style.color = "blue";
  }