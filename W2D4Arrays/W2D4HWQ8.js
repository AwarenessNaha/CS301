
// eslint-disable-next-line strict
"use restrict";
/**
 * 8. Write a function that takes an array of strings and returns array of palindrome strings only.
 */
/**
 * 
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
let testArray = ["abced", "abcba", "ghjkl", "lkjhjkl"];
console.log(filterPalindromes(testArray));
console.log(isPalindrome("abcba"));
console.log(isPalindrome("abcbakm"));