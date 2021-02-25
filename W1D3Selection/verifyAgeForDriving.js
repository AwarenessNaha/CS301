/* Write a program that accepts user age as input and output following based on the input
• If age <= 0
• print"pleaseentervalidage"
• if age is between 0 and 14 • print"Youcan'tdriveyet."
• if age is between 15 and 18
• print"Youcandriveundersupervision."
• if age is 19 or higher • print"Youcandrive."  */
"use strict";
let prompt= require('prompt-sync')();
const age = +prompt("What is your age?  ");
if(age <= 0){
    console.log("please enter valid age");
} else if(age < 15){
    console.log("You can't drive yet.");
} else if(age < 18){
   console.log("You can drive under supervision.");
} else {
       console.log("You can drive.");
   }
