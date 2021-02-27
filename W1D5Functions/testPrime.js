function testPrime( num ){
    for(let i=2; i<num; i++){
        if(num%i===0){
            return false;
        }
        else {
            return true;
        }
    }}
    
let prompt= require('prompt-sync')();
let number = +prompt("enter number ");
console.log(testPrime(number));