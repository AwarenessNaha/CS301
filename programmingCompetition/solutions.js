// eslint-disable-next-line strict
"use restrict";

exports.divisibleSumPairs = divisibleSumPairs;
exports.findMinDistance = findMinDistance;
exports.indPorcupineNumber = indPorcupineNumber;

/**
 * Q1, Naha
 * 
 * @param {array} arr a given array
 * @param {number} kkk a number
 * @returns {unmber} a num
 */
function divisibleSumPairs(arr, kkk) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let num1 = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if ((num1 + arr[j]) % kkk === 0) {
                count++;
            }
        }
    }
    return count;
}

console.log(divisibleSumPairs([1, 2, 3, 4, 5, 6], 5));

//Q2 MK  Melkamu Kumalo


function findPorcupineNumber(num) {
    if (num <= 138) {
        return139;
    }
    letporcupine;
    letfirst = Math.floor(num / 10) * 10 + 19;
    letsecond = first + 10;
    letnextPrime = findNextPrime(first, second);
    while (!(isPrime(first) && nextPrime % 10 === 9)) {
        first = first + 10;
        second = first + 10;
        nextPrime = findNextPrime(first, second);
    }
    porcupine = first;
    returnporcupine;
}

console.log(findPorcupineNumber(140))

//Q4,

function countSocksPairs(arr) {
    let paircount = 0;
    arr.sort();
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i] === arr[i + 1])
            paircount++;
    }
    return paircount;
}
console.log(countSocksPairs([1, 2, 1, 2, 1, 3, 2]));
console.log(countSocksPairs([10, 20, 20, 10, 10, 30, 50, 10, 20]))

//Q4  Getachew Akalu


functioncomputeHeight(height, cycles){
    letgrowth = 1;
    if (cycles === 0) {
        return1;
    } elseif(cycles < 2){
        return2;
    } else if (cycles < 3) {
        return2 * height + 1;
    } else {
        growth = 2 * height + cycles + 1
    }
    return growth;
}


console.log(computeHeight(1, 0));
console.log(computeHeight(1, 1));
console.log(computeHeight(1, 2));
console.log(computeHeight(1, 3));
console.log(computeHeight(1, 4));


//Q6 Daniel
/**
 * 
 * @param {array} arr a given array
 * @returns {number} a number
 */
function findMinDistance(arr) {
    let minDistance = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (num === arr[j]) {
                count++;
                if (minDistance < (j - i)) {
                    minDistance = j - i;
                }
            }

        }
    }
    if (count === 0) {
        return -1;
    } else {
        return minDistance;
    }

}
console.log(findMinDistance([7, 1, 3, 4, 1, 7]));
console.log(findMinDistance([3, 2, 1, 2, 3]));

