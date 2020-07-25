//Commenting out alert
//window.onload = function sayHi(){ alert(“Hello World of Javascript!”); } x = “goodbye world”  y=5
//

    var x, y;
x = 5 + 6;
y = x * 10;
document.getElementById("first").innerHTML = y;

function sayHi() {
    var elemRef = document.getElementById("first");
    elemRef.innerHTML = "goodbye";