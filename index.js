// ****DETECTING BUTTON PRESS**** 

for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}
function handleClick(){
    // var audio=new Audio("sounds/tom-1.mp3");
    // audio.play();
    // this.style.color="white";
    // console.log(this);
    // console.log(this.innerHTML);
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
}


// *****DETECTING KEYBOARD PRESS*****
 
// when we pass event parameter
document.addEventListener("keypress", function(event) {
    var letter = event.key;
    makeSound(letter);
    buttonAnimation(letter);
});

//when we does not pass event parameter

// document.addEventListener("keypress", function() {
//     var a=window.event;
//     var letter=a.key;
//     makeSound(letter);
// });

// *****FUNCTION TO DETECT SOUND*****

function makeSound(alpha){
    switch(alpha){
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;     
        default:
            console.log(buttonInnerHTML);                        
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200);
}