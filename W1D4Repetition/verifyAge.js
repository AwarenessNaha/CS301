/**Write a loop that keeps on prompting for age until you enter 
 * age older than 18 Write both while and do while versions. */
"use strict";
let prompt= require('prompt-sync')();
let age = 0;
while( age < 18){
    age = +prompt("enter age ");
    console.log(age);
}

do{ 
    age = +prompt("enter age ");
    console.log(age);
} while(age<18);