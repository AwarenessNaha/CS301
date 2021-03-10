// eslint-disable-next-line strict
"use strict";
/**
 * 
 * @param {integer} n a interger
 * @returns {Array} a set of interger
 */
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {

        return 1;
    } else {
        const nextFib = fibonacci(n - 1) + fibonacci(n - 2);
        return nextFib;
    }
}

console.log(fibonacci(4));