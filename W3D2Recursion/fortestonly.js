// eslint-disable-next-line strict
"use strict";
//Q3 Write recursive functions to reverse a given string
/**
 * 
 * @param {String} str one any given string
 * @returns {number} s reversed string
 */
function reverse(str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str[0];
    }
}
console.log(reverse("abcdefghijk"));