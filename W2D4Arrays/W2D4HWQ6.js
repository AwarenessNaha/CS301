// eslint-disable-next-line strict
"use restrict";

/**
 * 6. Write a JavaScript program that number input from the user at once as comma separated values
and stores it into an array and do following operations
a. Filters out negative values
b. Maps the filtered elements to sum of its digits (optional)
c. Reduce to get sum of all the elements (optional)
 */
/**
 * @returns {array} an array with number 0 and above
 */
function filterNegative() {
    let prompt = require("prompt-sync")();
    let input = prompt("Enter a number here or stop to exit ");
    let arr = [];
    let index = 0;
    while (input != "stop") {
        input = Number(input);
        if (input >= 0) {
            arr[index] = input;
            index++;
        }
        input = prompt("Enter a number here  ");
    }
    return arr;
}

console.log(filterNegative());

