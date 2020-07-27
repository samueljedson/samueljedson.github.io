function myFunctionGo() {
    document.getElementById("catfish").innerHTML = "Thelma and Louise";
}
//dunno why this failed so many times some browsers may not support?
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
//attempt at uploading images for random selection when I ran it and inspected it the error read Failed to load resource: the server responded with a status of 404 ()
//
var imagesArray = ["horse.jpg","zebra.jpg","bird.jpg"];
function displayImage(){
    var num = Math.floor(Math.random() * 4); 
    document.canvas.src = imagesArray[num];
}


