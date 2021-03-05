// eslint-disable-next-line strict
"use restrict";
/**
 * Exercise
• Write code to create an array named scores and fill it with 5 test scores 10, 20, 30, 40 and 50.
• Now write a function named findAverage, that takes an array as an argument and return average of the array values.
• Call findAverage function passing array you created in step1 and save the return result in a variable, average.
• Print the average, it should be 30 for this example.
• Create a second array filled with 10 random values between 0 to 10
and find the average of the array values.
• Make sure your program computes correct average for an array of any size.
 */
let scores = [];
for (let i = 1; i <= 5; i++) {
    scores[i - 1] = i * 10;
}
/**
 * 
 * @param {Array} arr array of number;
 * @returns {number} arr
 */
function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    let average = sum / arr.length;
    return average;
}

console.log(findAverage(scores));

let randomArray = [];
for (let i = 0; i < 10; i++) {
    randomArray[i] = Math.ceil(Math.random() * 10);
}

console.log(findAverage(randomArray));
