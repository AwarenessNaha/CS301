/**2. Write a Java program to calculate the factorial value of a given number.
 *  E.g., factorial 4 = 4*3*2*1 = 24 */
"use strict";
let prompt= require('prompt-sync')();
let number = +prompt("enter number ");
let factorialValue = 1;
for(let i = number; i>1; i--){
    factorialValue = factorialValue*i;
}
console.log(factorialValue);
