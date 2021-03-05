// eslint-disable-next-line strict
"use restrict";

/**
 * 4. Write a function to rotate the elements in an array to the right by 1.
 */
/**
 * 
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
const testArray = ["a", "b", "c", "d"];
console.log(rotateRight(testArray));