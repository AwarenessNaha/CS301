// eslint-disable-next-line strict
"use strict";

exports.findMin = findMin;
exports.sumOddIndicesValues = sumOddIndicesValues;
exports.sumArrays = sumArrays;

/**
 * 
 * @param {array} arr a given array
 * @returns {element} the min element
 */
function findMin(arr) {
    let min = arr[0];
    for (const element of arr) {
        if (min > element) {
            min = element;
        }
    }
    return min;
}
/**
 * 
 * @param {array} arr a given array
 * @returns {number} the sum of odd elements
 */
function sumOddIndicesValues(arr) {
    let sum = 0;
    for (const element of arr) {
        if (element % 2 !== 0) {
            sum += element;
        }
    }
    return sum;
}

/**
 * 
 * @param {array} arr1 a given array
 * @param {array} arr2 a given array
 * @returns {array} a new array
 */
function sumArrays(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr[i] = arr1[i] + arr2[i];
    }
    return newArr;
}