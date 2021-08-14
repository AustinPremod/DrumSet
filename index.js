
document.addEventListener('keydown',function(event){          //USING KEYBORD
    var keyBoardInput= event.key;
    sound(keyBoardInput);
    buttonAnimation( keyBoardInput);
    });

    
var num= document.querySelectorAll(".drum").length;
for( var i=0;i<=num;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}

function handleclick() {
    var buttonInnerHtml=this.innerHTML;   //USING MOUSE
    sound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);

}


function sound(currentKey){


    switch (currentKey) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default:
            break;
    }

    
}
function buttonAnimation(currentKey){
    var activeButton=document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    
    setTimeout(function() { activeButton.classList.remove("pressed"); } , 100);
    

}
