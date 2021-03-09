// eslint-disable-next-line strict
"use restrict";


//04
/**
 * 
 * @param {string} str a given string
 * @returns {boolean} true or false
 */
function checkSpam1(str) {
    while (str !== "") {
        let index = str.indexOf(" ");
        let word = str.substr(0, index);
        str = str.substr(index);
        if (word === "lottery" || word === "prize") {
            return true;
        } else {
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

console.log(checkSpam("there is a prize in the lottery"));
console.log(checkSpam("there is a nothing in the fridge"));