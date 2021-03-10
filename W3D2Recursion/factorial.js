// eslint-disable-next-line strict
"use strict";

/**
 * 
 * @param {number} n is interger
 * @returns {number} the factotial product
 *  */
function factorial(n) {
    if (n === 0) {
        return 1;
    } else return n * factorial(n - 1);
}

console.log(factorial(5));