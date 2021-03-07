

"use strict";
exports.insertArray = insertArray;
/**
 * 
 * @param {number} index is integer for array index
 * @param {array} target is an array to be spliced
 * @param {array} insert holds elements to splice
 * @returns {array} the spliced array
 */
function insertArray(index, target, insert) {
    target.splice(index, 0, ...insert);
    return target;
}