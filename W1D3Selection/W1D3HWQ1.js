/* 1. Write a program that helps a user choose the correct footwear for the day’s
 weather based on the table shown below. If the user enters any other weather type,
  your program should output “sneakers” Weather Footwear
hot sandals
rain galoshes
snow boots */
  
  "use strict";
let prompt= require('prompt-sync')();
let weatherType = prompt("Enter weather type: ");
weatherType = weatherType.toLowerCase();
if(weatherType==="hot"){
    console.log("Suggested Weather Footwear is sandals");
} else if(weatherType==="rain"){
    console.log("Suggested Weather Footwear is galoshes");
    }else if(weatherType==="snow"){
        console.log("Suggested Weather Footwear is boots");}
        else {
            console.log("It is a rare weather, re-enter.")
        }