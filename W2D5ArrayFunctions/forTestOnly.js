// eslint-disable-next-line strict
"use restrict";

//Q5 solution1
/**
 * 
 * @param {array} arr a given array
 * @returns {array} a reversed array
 */
function ssReverse(arr) {
    let reversedArr = arr.slice();
    console.log(reversedArr);
    let index = 0;
    const len = arr.length - 1;
    for (let i = len; i >= 0; i--) {
        const element = arr.splice(i, 1);
        let element1 = element[0];
        reversedArr.splice(index, 1, element1);
        index++;
    }
    return reversedArr;
}

console.log(ssReverse([1, 2, 3, 4]));
console.log();
