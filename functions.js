//Commenting out alert
//window.onload = function sayHi(){ alert(“Hello World of Javascript!”); } x = “goodbye world”  y=5
//

//change variable and see affects
    var x, y;
x = 5 + 6;
y = x * 10;
document.getElementById("first").innerHTML = y;

function sayHi() {
    var elemRef = document.getElementById("first");
    elemRef.innerHTML = "goodbye";

}

//reveals changes with button selection on my html and css files
function myFunctionreveal() {
        document.getElementById("jsbutton").innerHTML = "Oceanside, Oregon";
}   
    
    function myFunctionlook() {
        document.getElementById("jsbuttonstyle").style.color = "blue";
    }





    