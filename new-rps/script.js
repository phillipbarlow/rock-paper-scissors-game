//Variables
const rock = 'ROCK!';
const paper = 'PAPER!';
const scissors = 'SCISSORS!';
let userChoice;
let isClicked = true;
let message;
//Random generator
const rps = [rock, paper, scissors];
const randomNumber = Math.floor(Math.random()*rps.length);
const computersChoice = rps[randomNumber];

//Win + loss message;
let userWin = `YOU WIN! Computer chose: ${computersChoice}`;
let computerWin = `Computer wins! Computer chose: ${computersChoice}`;

//addEventListeners for rock, paper, scissors
const btn = document.querySelectorAll('.rps-btns .btn');
btn.forEach((x)=>{
    x.addEventListener('click', (event)=>{
        buttonName = event.target.innerHTML.toLowerCase();
    if(buttonName == 'rock'){
        userChoice = rock
    }
    if(buttonName == 'paper'){
        userChoice = paper
    }
    if(buttonName == 'scissors'){
        userChoice = scissors
    }
    if(isClicked == true){
                isClicked = false;
                compare()
                document.querySelector('.text').innerHTML = message;
            }
    })     
})
 document.querySelector('.play-again').addEventListener('click', ()=>{
    location.reload(); 
})
//compare funtion
function compare(){
if(userChoice == computersChoice){
    // console.log(`UserChoice is ${userChoice}, ComputerChoice is ${computersChoice}, DRAW!`)
    return message = 'Draw!';
}
if(userChoice == rock){
    if(computersChoice == paper){
        // console.log(`Computer wins!`);
        // console.log(`Computer wins! Computer:${computersChoice} User:${userChoice}`);
        return message = computerWin;
    }else if(computersChoice == scissors){
        // console.log(`User wins!`);
        // console.log(`User wins! user: ${userChoice} Computer:${computersChoice}`);
        return message = userWin;
    }
}
if(userChoice == paper){
    if(computersChoice == scissors){
        // console.log(`Computer wins!`);
        // console.log(`Computer wins! Computer:${computersChoice} User:${userChoice}`);
        return message = computerWin;
    }else if(computersChoice == rock){
        // console.log(`User wins!`);
        // console.log(`User wins! user: ${userChoice} Computer:${computersChoice}`);
        return message = userWin;
    }
}
if(userChoice == scissors){
    if(computersChoice == rock){
        // console.log(`Computer wins!`);
        // console.log(`Computer wins! Computer:${computersChoice} User:${userChoice}`);
        return message = computerWin;
    }else if(computersChoice == paper){
        // console.log(`User wins!`);
        // console.log(`User wins! user: ${userChoice} Computer:${computersChoice}`);
        return message = userWin;
    }
}
}