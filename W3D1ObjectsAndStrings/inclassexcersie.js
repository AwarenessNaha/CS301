// eslint-disable-next-line strict
"use restrict";

/**
 * • Write a program that keeps on asking for user input and prints it, until user types 
 * the word "stop" (without quotes). "Stop" word can be in any case (small, capital or mixed)
• Write a function that takes a comma separated string of words and converts it into an array 
of words and prints in reverse order.
• Write a function to replace the first occurrence of "for" in an input string with 4.
 */

const prompt = require("prompt-sync")();
let input;
do {
    input = prompt("Enter Here: ");
    input = input.toLowerCase();
    console.log()
} while (input !== "stop");
