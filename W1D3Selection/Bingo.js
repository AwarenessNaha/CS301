/* • Write a program that asks user to enter a number between 1 to 10, and 
print "Bingo!" if user enters 7 otherwise prints "Try again.".
• Use === for comparison not == */
"use strict";
let prompt= require('prompt-sync')();
let guess = + prompt("enter number 0-10  ");
if(guess===7){
    console.log("Bingo");}
    else {
        console.log("Try it again");
    }
