// eslint-disable-next-line strict
"use restrict";
exports.matrixAddition = matrixAddition;

/**
* 9. Do matrix addition and print result on matrix format for following:
*/

let matrix11 = [[0, 1, 2], [6, 5, 4]];
let matrix22 = [[9, 8, 7], [3, 4, 5]];
/**
 * 
 * @param {array} matrix1 a given matrix
 * @param {array} matrix2 a given matrix
 * @returns {array} a new matrix after addition 
 */
function matrixAddition(matrix1, matrix2) {
    let matrix = [[], []];
    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[i].length; j++) {
            matrix[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    console.log(matrix);
    return matrix;
}

console.log(matrixAddition(matrix11, matrix22));