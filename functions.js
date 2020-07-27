function myFunctionGo() {
    document.getElementById("catfish").innerHTML = "Thelma and Louise";
}

function myFunctionlook() {
    document.getElementById("style").style.color = "purple";
}

function myFunction() {
    var x = Math.floor((Math.random() * 100) + 0);
    document.getElementById("demo").innerHTML = x;
}

function myform() {
    alert("Here's a hint for mine. I like salt and butter on it!");
  }

var imagesArray = ["horse.jpg","zebra.jpg","bird.jpg"];
function displayImage(){
    var num = Math.floor(Math.random() * 4); 
    document.canvas.src = imagesArray[num];
}


