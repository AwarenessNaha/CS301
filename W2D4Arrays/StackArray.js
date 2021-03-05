
// eslint-disable-next-line strict
"use restrict";
/**
 * Exercises
Given an expression array exp, write a program to examine whether the pairs 
and the orders of “{“, “}”, “(“, “)”, “[“, “]” are correct in exp.
Example:
Input: exp = ["(", ")", "[", "{", "}", "]"]
Output: Balanced
Input: exp = ["[", "(", "]", ")"] Output: Not Balanced
 */

let testArray = ["(", ")", "[", "{", "}", "]"];
let exp = ["[", "(", "]", ")"];
let testArray1 = ["(", ")", "[", "{", "}", "]", "}", "}"];
let testArray2 = ["{", "}", "[", "}", "}"];
/**
 * 
 * @param {array} arr a given array
 * @returns {boolean} wheather it is balanced
 */
function checkBalance(arr) {
    let arr1 = [];
    while (arr.length > 0) {
        let element = arr.pop();
        if (element === "}" || element === "{" || element === "(" || element === ")") {
            arr1.push(element);
        }
    }
    if (arr1.length % 2 !== 0) {
        return false;
    }
    let open = "{";
    let close = "}";
    let open1 = "(";
    let close1 = ")";


    for (let i = 0; i < arr1.length; i++) {
        if ((arr1[i] === open && arr1[arr1.length - 1 - i] === close) || (arr1[i] === open1 && arr1[arr1.length - 1 - i] === close1)) {
            return true;
        }
    }
    return false;
}

console.log(checkBalance(testArray));
console.log(checkBalance(exp));
console.log(checkBalance(testArray1));
console.log(checkBalance(testArray2));

