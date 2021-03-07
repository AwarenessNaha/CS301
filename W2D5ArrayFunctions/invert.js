// eslint-disable-next-line strict
"use restrict";
/**
 * 
 * @param {Array} arr an array
 * @param {String} separator use it as separator
 * @returns {Array}  an array
 * */

function invert(arr, separator) {
    let arr1 = arr.reverse();
    arr2 = arr1.join(separator);
    return arr2;
}

let myArray = ["sam", "am", "I"];

console.log(invert(myArray, "<<>>"));
myArray = ["sam", "am", "I"];
console.log(invert(myArray, " "));