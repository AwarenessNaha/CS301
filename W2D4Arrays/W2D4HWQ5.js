// eslint-disable-next-line strict
"use restrict";

/**
 * 5. Modify rotate functions to rotate array by n times where, n is the second parameter 
 * passed in the function (optional).
 */
/**
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

const testArray = ["a", "b", "c", "d"];
console.log(rotateNRight(testArray, 2));