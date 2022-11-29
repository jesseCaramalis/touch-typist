import { wordLib } from "./assets/wordLib.js"
import { fiveWordLib } from "./assets/5wordLib.js"

/*-------Word Randomizer--------*/
function getWord() {
    if(document.querySelector('#wordLength').checked){
        document.getElementById('wordToType').innerText = fiveWordLib[Math.floor(Math.random() * fiveWordLib.length)]
    }
    else{
        document.getElementById('wordToType').innerText = wordLib[Math.floor(Math.random() * wordLib.length)]
    }
}

/*-------Input and Check--------*/

function checkWord(){
    if(document.getElementById('typeInput').value.toUpperCase() == document.getElementById('wordToType').innerText){
        document.getElementById('result').innerText = 'Correct'
        addScore()
    }
    else{
        document.getElementById('result').innerText = 'Try again'
        breakStreak()
        // updateStreak()
    }
    document.getElementById('typeInput').value = '';
    getWord()
}
// function flashGreen(){
//     let flashClass = 'flash'
//     document.querySelector('.inputArea').classList.add(flashClass);
//     document.querySelector('.inputArea').addEventListener('animationend', function() {
//         this.classList.remove(flashClass);
//     })
// }

document.querySelector('#submit').addEventListener('click',checkWord)

document.getElementById('typeInput').addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        document.getElementById('submit').click();
    }
})

/*--------Scoring--------*/
let score = 0
let streak = 0
function addScore(){
    score ++
    streak ++
    document.getElementById('score').innerText = score
    document.getElementById('streak').innerText = streak
}

function breakStreak(){
    streak = 0
    document.getElementById('streak').innerText = streak
}
/*-------Words Per Min-------*/



/*-------On Load-------*/
document.onkeydown = function(){
    document.getElementById('typeInput').focus()
}
document.getElementById('typeInput').value = '' 
getWord()