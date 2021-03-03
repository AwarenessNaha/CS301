/**6. Now write a new version of leastCommonMultiple that uses the greatestCommonDivisor function 
 * and the mathematical relationship between LCM and GCD to find the LCM. Research the LCM and GCD 
 * relationship online. */

let LCM = function (numx, numy){
    let LCM = 0;
    let abs=Math.abs(numx*numy);
    let gcd=greatestCommonDivisor(numx,numy);
    LCM = abs/gcd;
    return LCM;
    }


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

console.log(greatestCommonDivisor(20,28));
console.log(LCM(80,28));
