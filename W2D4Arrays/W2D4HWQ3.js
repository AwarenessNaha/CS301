// eslint-disable-next-line strict
"use restrict";

/**
 * 3. Write a function to rotate the elements in an array to the left by 1.
 */

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

const testArray = ["a", "b", "c", "d"];
console.log(rotateLeft(testArray));
