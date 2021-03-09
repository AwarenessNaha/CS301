// eslint-disable-next-line strict
"use strict";

exports.isPersonEqual = isPersonEqual;
exports.countProperties = countProperties;
exports.checkSpam = checkSpam;
exports.suffix = suffix;
exports.titleCase = titleCase;
exports.getAverageAge = getAverageAge;
exports.sumFirst = sumFirst;



// Q2
/**
 * 
 * @param {object} obj1 a given object
 * @param {object} obj2 a given object
 * @returns {boolean} true or false
 */
function isPersonEqual(obj1, obj2) {
    if (obj1.name === obj2.name && obj1.age === obj2.age) {
        return true;
    } else {
        return false;
    }
}

//Q3
/**
 * 
 * @param {object} obj a given object
 * @returns {number} a total number of properties
 */
function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    return count;
}

//04
/**
 * 
 * @param {string} str a given string
 * @returns {boolean} true or false
 */
function checkSpam1(str) {
    for (let key in str) {
        if (str[key] === "lottery" || str[key] === "prize") {
            return true;
        } else if (str[key] !== "lottery" && str[key] !== "prize") {
            return false;
        }
    }
}
/**
 * 
 * @param {string} str a
 * @returns {boolean} true or false
 */
function checkSpam(str) {
    const wordArray = str.split(" ");
    for (const word of wordArray) {
        if (word === "lottery" || word === "prize") {
            return true;
        } else {
            return false;
        }
    }
}
//05
/**
 * 
 * @param {string} str1 a given string
 * @param {string} str2 a given string
 * @returns {string} a new string
 */
function suffix(str1, str2) {
    const minLength = Math.min(str1, str2);
    let charCount = 0;
    for (let i = 0; i < minLength; i++) {
        if (str1[str1.length - 1 - i] === str2[str2.length - 1 - i]) {
            charCount++;
        } else {
            break;
        }
    }
    return str1.substring(str1.length - charCount);
}


//Q6 
/**
 * 
 * @param {string} name a given string
 * @returns {string} an uppercase first char name
 */
function titleCase(name) {
    let fChar = name[0];
    fChar = fChar.toUpperCase();
    let namedS = fChar + name.substr(1, name.length - 1);
    return namedS;
}
//Q7
/**
 * 
 * @param {array} users a given array of objects
 * @returns {number} a average age
 */
function getAverageAge(users) {
    let sumAge = 0;
    let userCount = 0;
    for (let user of users) {
        sumAge = sumAge + user.age
        userCount++;
    }
    return sumAge / userCount;
}

//Q8
/**
 * 
 * @param {array} arr a given array of objects
 * @returns {number} a sumof first elements
 */
function sumFirst(arr) {
    let sumOfFirst = 0;
    for (let element of arr) {
        sumOfFirst += element[0];
    }
    return sumOfFirst;
}