// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked!");
// }

// document.querySelect("button").addEventListener("click",function () {
//     alert("I got clicked!");
// }
//  );

 const buttonsDrum = document.getElementsByClassName("drum");
 for(let i=0; i<buttonsDrum.length; i++){
     if(document.addEventListener){
         buttonsDrum[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;

         switch (buttonInnerHTML) {
             case "w":
                const tom1 = new Audio(src = "sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                const tom2 = new Audio(src="sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                const tom3 = new Audio(src="sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                const tom4 = new Audio(src="sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                const snare = new Audio(src="sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                const crash = new Audio(src="sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                const kick = new Audio(src="sounds/kick-bass.mp3");
                kick.play();
                break;
         
             default: 
             console.log(buttonInnerHTML);
                 break;
         }
         });
     } 
 }

//  const audio = new Audio(src = "sounds/tom-1.mp3");
//  audio.play();

 //higher order functions

//  function add(num1, num2) {
//      return num1 + num2;
//  }

//  function multiply(num1, num2){
//      return num1*num2;
//  }
//  function substract (num1, num2){
//          return num1-num2;
//  }

//  function divide(num1, num2){
//      if(num2 != 0){
//          return num1 / num2
//      }
//      else {
//          return `Impossible`
//      }
//  }

//  function calculator(num1, num2, operator){
//      return operator(num1, num2)
//  }
//  console.log(calculator(55, 3, multiply));

//OBJECTS
// const houseKeeper1 = {
//     name: "Lisa",
//     age: 18,
//     yearsExperience: 1,
//     allergies: false,
//     langs: ['English', 'German']
// }
// console.log(houseKeeper1.langs);

function HouseKeeper(name, age, yearsExperience, allergies, languages){
    this.name = name;
    this.age = age;
    this.yearsExperience = yearsExperience;
    this.allergies = allergies;
    this.languages = languages;
    this.clean = function(){
        alert("cleaning in progress!");
    }
}

// const houseKeeper2 = new HouseKeeper("Jane", 25, 6, true, ["English", "Russian"]);
// console.log(houseKeeper2);
const houseKeeper3 = new HouseKeeper("Miri", 20, 2, true, ["English", "Russian"]);
console.log(houseKeeper3.clean());


// function BellBoy(name, age, hasWorkPermit, languages) {
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
//     this.moveSuitcase = function() {
//         alert("May I take your suitcase?");
//         pickUpSuitcase();
//         move();
//     }
// }


// const bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
// console.log(bellBoy1);

// //Object's methods
// const houseKeeper1 = {
//     name: "Lisa",
//     age: 18,
//     yearsExperience: 1,
//     allergies: false,
//     langs: ['English', 'German'],
//     cleanRoom: function() {
//         alert("May I clean this room?");
//         cleanRoom();
//         moveBy();
//     }
// }
//         console.log(houseKeeper1.cleanRoom());


