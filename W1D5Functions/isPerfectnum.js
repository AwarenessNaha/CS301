"use strict";
let prompt= require('prompt-sync')();
let number = +prompt("enter number ");
let sum=1;
for(let i=2; i<=number/2; i++){
    if(number%i===0){
        sum = sum +i;
    }
}
if(sum===number){
    console.log("Is perfect number"); 
} else{
    console.log("Is NOT perfect number"); 
}