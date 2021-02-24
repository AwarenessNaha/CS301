/* 4. Write JavaScript program to compute the mileage of a vehicle. 
Your program should allow the user to enter the beginning and ending 
odometer readings and the number of gallons of gas used and should 
output the mileage in miles per gallon. */
"use strict"; 
let prompt = require('prompt-sync')();
const  begingOdometer= prompt('Enter beging Odomete here: ');
const  endingOdometer= prompt('Enter ending Odomete here: ');
const  numberOfGallonsOfGasUsed= prompt('Enter the number of gallons of gas used here: ');
const mileagePerGallon = (endingOdometer-begingOdometer)/numberOfGallonsOfGasUsed;
console.log(mileagePerGallon); 