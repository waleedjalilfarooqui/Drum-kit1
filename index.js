


a = document.querySelectorAll(".drum")

for (var i = 0; i < a.length; i++) {

    a[i].addEventListener("click", function () {

        var innerHtml = this.innerHTML;
        playSound(innerHtml);
        animation(innerHtml);


        
} )

        document.addEventListener("keypress", function(event){

            playSound(event.key);
            animation(event.key);


        })


   

}

function playSound(key){
switch (key) {
    case "w":
        var sound0 = new Audio("sound0.mp3")
        sound0.play();
        break;

    case "a":
        var sound1 = new Audio("sound1.mp3")
        sound1.play();
        break;
    case "s":
        var sound2 = new Audio("sound2.mp3")
        sound2.play();
        break;
    case "d":
        var sound3 = new Audio("sound3.mp3")
        sound3.play();
        break;
    case "j":
        var sound4 = new Audio("sound4.mp3")
        sound4.play();
        break;
    case "k":
        var sound5 = new Audio("sound5.mp3")
        sound5.play();
        break;
    case "l":
        var sound6 = new Audio("sound6.mp3")
        sound6.play();
        break;


    default:
        break; }

}

function animation(key){

document.querySelector("."+key).classList.add("pressed");

setTimeout(function(){
    document.querySelector("."+key).classList.remove("pressed") 
} , 100);

}