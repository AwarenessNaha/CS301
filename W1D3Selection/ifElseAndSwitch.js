/* • Write a program that asks user to enter number between 1 to 5 
and prints out how the number is spelled.
• First, write using else if
• Then, refactor it to use switch */
"use strict";
let prompt= require('prompt-sync')();
let number = +prompt("Enter a number between 1 to 5 here: ");
if(number===1){
    console.log("one");
} else if(number===2){
    console.log("two");
} else if(number===3){
    console.log("three");
}else if(number===4){
    console.log("four");
}
else {
    console.log("five");
}

switch(number){
    case 1:
    console.log("ONE");
    break;
    case 2:
    console.log("TWO");
    break;
    case 3:
    console.log("THREE");
    break;
    case 4:
    console.log("FOUR");
    break;
    case 5:
    console.log("FIVE");
    break;
}
