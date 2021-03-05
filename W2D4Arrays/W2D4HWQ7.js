// eslint-disable-next-line strict
"use restrict";

/**
 * 7. Write a function filterRange(arr, a, b) that gets an array arr, 
 * looks for elements with values >= a and values<= b and return a result as an array.
 */
/**
 * 
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

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 20, 40];
console.log(filterRange(testArray, 4, 12));