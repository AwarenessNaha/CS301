// eslint-disable-next-line strict
/* // eslint-disable */
"use strict";

/**
 * Write a function that accepts a two-dimensional array of numbers 
 * and return sum of all the elements in the array.
 */
/**
 * 
 * @param {array} arr1 a given array
 * @param {array} arr2 a given array
 * @returns {array} a new array
 */
function addTwoArrayElements(arr1, arr2) {
    let newArray = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[1]; j++) {
            newArray[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return newArray;
}