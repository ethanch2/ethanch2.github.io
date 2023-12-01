/*function progressBarFailing() {
    var element = document.getElementById("fillProgressBarFailure");
    var z = 1;
    var id = setInterval(inner, 10);
    function inner(){
        while (z < 45) {
            z++;
            element.style.width = z +'%';
        }
    }
}*/




function inner(){
    var element = document.getElementById("fillProgressBarFailure");
    var z = 1;
    while (z < 45) {
        z++;
        element.style.width = z +'%';

    }
    element.style.backgroundColor = "red";

    var theimage = document.getElementById("failureImage");

    theimage.style.animation = "scaleAndCircle 4s ease-in-out forwards";
}

function fixInner(){
    return setInterval(inner(), 10);
    
}