// eslint-disable-next-line strict
"use restrict";

/*
 * Write a function, isPersonEqual(obj1, obj2) that checks equality for person objects
• assume that the only properties it needs to check are name and age •
 Call it with sam1 and sam2 and verify it returns true
• Call with sam1 and john and verify false
 */

let sam1 = {
    name: "sam",
    age: 10,
}

let sam2 = {
    name: "sam",
    age: 10,
}

let john = {
    name: "john",
    age: 10,
}
/**
 * 
 * @param {object} obj1 an object
 * @param {object} obj2 an object
 * @returns {boolean} true or false.
 */
function isPersonEqual(obj1, obj2) {
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return true;
    } else {
        return false;
    }
}

console.log(isPersonEqual(sam1, sam2));
console.log(isPersonEqual(sam1, john));
