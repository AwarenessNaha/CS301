/**
 * 2. Write a function named getMiddle that returns the value of the middle element in an array. 
 * If the array has an even number of elements, then this function must return the average of 
 * the two middle elements.
 */

// eslint-disable-next-line strict
"use restrict";
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
    }
    return middle;
}



