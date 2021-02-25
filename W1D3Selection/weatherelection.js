
 /* Write a program that asks user to enter weather
 for today and print "Get an umbrella" if weather is rainy.*/

"use strict";
let prompt= require('prompt-sync')();
const weather = prompt('What is weather today?  ') ;
const activity1 = "let\'s go to swiming";
const activity2 = "Get an umbrella";
if(weather === "rainy"){
    console.log(activity2);
}
else {
    console.log(activity1);
}