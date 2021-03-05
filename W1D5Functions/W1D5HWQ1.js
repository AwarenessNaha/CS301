"use strict"

/**1. checkPrime
a. Write a function named checkPrime that accepts a parameter and returns true if the
argument is a prime number otherwise returns false.
b. Now write a program that prompts user to input a number and calls the function
checkPrime to see if the entered number is a prime number or not. */
/**
 * 
 * @param {*} num 
 * @ returns{}
 */
function checkPrime(num) {
    let factorsCount = 0;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) {
            factorsCount++;
        }
        if (factorsCount === 0) {
            return true;
        } else {
            return false;
        }
    }
}

let prompt = require("prompt-sync")();
let number = +prompt("enter number ");
let result = checkPrime(number);
console.log(result);