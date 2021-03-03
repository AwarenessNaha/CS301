/**7. Write a function compute, that takes three parameters. First parameter is a call back function
 *  that does the actual operation, second and third are the operands.
For e.g., compute (add, 2,3) should return 5
- Write compute function as a function expression.
- Write add function as a function expression and call compute passing add as a callback.
o Refactor to pass add logic as an anonymous function. (Make a copy first)
o Refactor to pass add logic as an arrow function. (Make a copy first) */

function add(x,y){
    return x+y;
}

let add1 = function(x,y){
    return x+y;
}

let add2 = (x,y) => {return x+y};
 
let sum = function(arg1, arg2,arg3){
    return arg1(arg2,arg3);
}

let sum1 = (arg1,arg2,arg3) => {return arg1(arg2,arg3)};

console.log(sum(add, 2, 3)); 
console.log(sum(add1, 12, 53)); 
console.log(sum(add2, 18, 53)); 
console.log(sum1(add, 2, 3)); 
console.log(sum1(add1, 12, 53)); 
console.log(sum1(add2, 18, 53)); 
