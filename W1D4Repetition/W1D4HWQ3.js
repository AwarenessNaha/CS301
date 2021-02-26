/**3. Write a JavaScript program that gives the user three tries to guess 
 * the correct pin of the account. You set the pin as a constant. When 
 * correct display “Correct, welcome back.” When incorrect display “Incorrect, try again.”. 
 * When run out of tries display “Sorry but you have been locked out.” */

"use strict";
let prompt= require('prompt-sync')();
let guessPin = prompt("enter pin ");
const PIN = "431273";
let tryCount=1;
for(let i=0; i<2; i++){
    if(guessPin===PIN){
        console.log('Correct welcome back.');
    }else{ 
        console.log('Incorrect, try again.'); 
        guessPin = prompt("enter pin ");
    }
    tryCount++;
    }

    if(tryCount===3){
        console.log("Sorry but you have been locked out.");
    }
