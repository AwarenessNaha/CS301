/* 4. Write a function expression and assign it to the variable greatestCommonDivisor, 
which will compute GCD (Greatest Common Divisor) of two numbers. GCD is the largest 
number that divides both. For example GCD of 20 and 28 is 4 and GCD of 98 and 56 is 14.*/

let greatestCommonDivisor = function (num1, num2){
    
    let GCD = 1;
    let n=0;
    if(num1>num2){
        n=num2;
    }else{
        n=num1;
    }
    for(let i=1; i<n;i++){
        if(num1%i===0 && num2%i===0){
            GCD=i;
        }
    }
    return GCD;
}
console.log(greatestCommonDivisor(56,98));
console.log(greatestCommonDivisor(20,28));
console.log(greatestCommonDivisor(1156,2298));