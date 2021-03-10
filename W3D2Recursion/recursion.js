// eslint-disable-next-line strict
"use strict";

exports.power = power;
exports.countDigits = countDigits;
exports.reverse = reverse;

/**
 * Write recursive functions to
• calculate the power of any base
• count the digits of a given number
• reverse a given string.
Write your own recursive logic for above problems. Do not use existing methods like reverse 
or length property.
 */

//Q1 Write recursive functions tocalculate the power of any base

/**
 * Defining Table:
 * input: two numbers of base and power
 * output: a number as result of base power n
 * processing: 
 * - base case: when power is 1, return base;
 * - recursive: base*fun(n-1)
 * @param {number} base any given number
 * @param {number} pow any given integer
 * @returns {number} the result of function
 */
function power(base, pow) {
    if (pow === 1) {
        return base;
    } else {
        return base * power(base, pow - 1);
    }
}

//Q2 Write recursive functions to count the digits of a given number
/**
 * Definning Table
 * input: a number
 * output: a number the count of digit of the given number
 * processing: 
 * - base case: Math.floor(number / 10) === 0, return 1
 * - recursive processing: call fun (Math.floor(number / 10))
 * @param {number} num a given number
 * @returns {number} is the digit count
 *
 */
function countDigits(num) {
    if (Math.floor(num / 10) === 0) {
        return 1;
    } else {
        return 1 + countDigits(Math.floor(num / 10));
    }
}

//Q3 Write recursive functions to reverse a given string
/**
 * Defining table
 * input: a string
 * output: a reversed string
 * processing:
 * - base case: string ==="", return "".
 * -recursive processing: return fun((str.substr(1)) + str[0])
 * @param {String} str one any given string
 * @returns {number} s reversed string
 */
function reverse(str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str[0];
    }
}