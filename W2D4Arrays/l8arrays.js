/*1. Write a function addend(arr) that accepts an array of numbers as parameters
 and returns the sum of first and last elements of the array.*/
// eslint-disable-next-line strict
"use restrict";
exports.addends = addends;
exports.getMiddle = getMiddle;
exports.rotateLeft = rotateLeft;
exports.rotateRight = rotateRight;
exports.rotateNRight = rotateNRight;
exports.filterNegtive = filterNegtive;
exports.filterRange = filterRange;
exports.filterPalindromes = filterPalindromes;
exports.matrixAddition = matrixAddition;
/**
 * 
 * @param {array} arr an array of numbers
 * @returns {number} sum
 */
function addends(arr) {
    const first = arr[0];
    const last = arr[arr.length - 1];
    return first + last;
}

const arr1 = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(addends(arr1));

exports.getMiddle = getMiddle;

/**
 * 
 * @param {array} arr a array of numbers
 * @returns {number}a number 
 */
function getMiddle(arr) {
    let middle = 0;
    if (arr.length % 2 == 0) {
        const length = arr.length;
        let index = Math.floor(length);
        middle = (arr[index] + arr[index + 1]) / 2;
    } else {
        middle = arr[arr.length / 2];
    }

    return middle;
}

/**
 * 
 * @param {array} arr an array of any;
 * @returns {array} a new array after rotate;
 */
function rotateLeft(arr) {
    let current = arr[0];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = current;
    return arr;
}

/**
 * Q4
 * @param {array} arr an array of any
 * @return {array} a new array after rotate right
 */
function rotateRight(arr) {
    let right = arr[arr.length - 1];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = right;
    return arr;
}

/**
 * Q5
 * @param {array} arr an array of any
 * @param {number} rNum a number
 * @returns {array} a new array after roatation
 *  */
function rotateNRight(arr, rNum) {
    for (let j = 0; j < rNum; j++) {
        let right = arr[arr.length - 1];
        for (let i = arr.length - 1; i >= 0; i--) {
            arr[i] = arr[i - 1];
        }
        arr[0] = right;
    }
    return arr;
}

/**
 * Q6
 * @returns {array} an array with number 0 and above
 */
function filterNegtive() {
    let prompt = require("prompt-sync")();
    let input = prompt("Enter a number here or stop to exit ");
    let arr = [];
    let index = 0;
    while (input != "stop") {
        input = Number(input);
        if (input >= 0) {
            arr[index] = input;
            index++;
        }
        input = prompt("Enter a number here  ");
    }
    return arr;
}

/**
 * Q7
 * @param {array} arr an array
 * @param {number} low an number
 * @param {number} high an number
 * @returns {array} an array after filtered
 */
function filterRange(arr, low, high) {
    let arr1 = [];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= low && arr[i] <= high) {
            arr1[index] = arr[i];
            index++;
        }
    }
    return arr1;
}

/**
 * Q8
 * @param {String} string any string
 * @return{boolean} true or false for palindrome
 */
function isPalindrome(string) {

    const len = string.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
/**
 * 
 * @param {array} arr an array of string;
 * @returns{array} an array after filtered
 *  */
function filterPalindromes(arr) {
    let index = 0;
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            arr1[index] = arr[i];
            index++;
        }
    }
    return arr1;
}