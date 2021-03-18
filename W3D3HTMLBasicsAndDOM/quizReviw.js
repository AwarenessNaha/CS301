// eslint-disable-next-line strict
"use strict";
exports.negativExponent = negativExponent;

/**
 * 
 * @param {number} base a number
 * @param {number} pow  a number
 * @returns {number} result
 *  */
function negativExponent(base, pow) {
    if (pow < 0) {
        pow = Math.abs(pow);
        if (pow === 1) {
            return 1 / base;
        } else {
            return (1 / base) * negativExponent(base, pow - 1);
        }
    } else {
        if (pow === 1) {
            return base;
        } else return negativExponent(base, pow - 1);
    }
}

console.log(negativExponent(5, -3));

function