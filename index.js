//Detecting bottom press 
var numberOfDrumBottons=document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumBottons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var bottonInnerHTML=this.innerHTML;
       makeSound(bottonInnerHTML);
       buttonAimation(bottonInnerHTML);
    });
}

//Detecting key board press
document.addEventListener("keydown", function(event){
        makeSound(event.key);
        buttonAimation(bottonInnerHTML);
});

function makeSound(key){
        switch (key){
            case "w": 
            var audio=new Audio("public/sounds/tom-1.mp3");
            audio.play();
            break;
            
            case "a": 
            var audio=new Audio("public/sounds/tom-2.mp3");
            audio.play();
            break;

            case "s": 
            var audio=new Audio("public/sounds/tom-3.mp3");
            audio.play();
            break;

            case "d": 
            var audio=new Audio("public/sounds/tom-4.mp3");
            audio.play();
            break;

            case "j": 
            var audio=new Audio("public/sounds/snare.mp3");
            audio.play();
            break;

            case "k": 
            var audio=new Audio("public/sounds/crash.mp3");
            audio.play();
            break;

            case "l": 
            var audio=new Audio("public/sounds/kick-bass.mp3");
            audio.play();
            break;

        default: console.log(bottonInnerHTML);
       }
    }

function buttonAimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
//    Add pressed class to the botton
    activeButton.classList.add("pressed");
// Set a time function to wait before it goes back to its previous state 
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

