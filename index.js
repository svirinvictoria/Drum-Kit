//detecting button press
const buttonsDrum = document.getElementsByClassName("drum");
for (let i = 0; i < buttonsDrum.length; i++) {
    if (document.addEventListener) {
        buttonsDrum[i].addEventListener("click", function () {
            let buttonInnerHTML = this.innerHTML;

            makeSound(buttonInnerHTML);
        });
    }
}

//detecting keyboard press
document.addEventListener("keypress", function (event) {
    makeSound(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            const tom1 = new Audio(src = "sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            const tom2 = new Audio(src = "sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            const tom3 = new Audio(src = "sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            const tom4 = new Audio(src = "sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            const snare = new Audio(src = "sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            const crash = new Audio(src = "sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            const kick = new Audio(src = "sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);
            console.log(key);
            break;
    }
}
