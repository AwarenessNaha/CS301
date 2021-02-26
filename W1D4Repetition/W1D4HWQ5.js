/**5. Write a JavaScript program to compute sum of all the digits in a given integer number.
Input
Output
123
6
102
3
8
8 */

"use strict";
let prompt= require('prompt-sync')();
let number = prompt("enter integer number  ");
const n = number.length;
number = Number(number);
let sum=0;
for(let i = n; i>=0;i--){
    sum = sum + Math.floor(number/Math.pow(10, i));
    number = number%(Math.pow(10, i));
}
console.log(sum);