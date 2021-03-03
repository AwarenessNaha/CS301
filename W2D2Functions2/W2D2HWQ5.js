/**5. Write a function expression to find LCM of any two numbers using the greatestCommonDivisor 
function from previous question. Assign it to the variable leastCommonMultiple. LCM of two 
numbers is the smallest number that can be divided evenly by both numbers. Write it as
 a function expression.*/
 //Solution A by Naha

 let LCM = function (numx, numy){
     let LCM = 1;
     let n = greatestCommonDivisor(numx,numy);
     for(let i = 2; i<n; i++){
         if((numx%i===0 && isPrime(i)|| numy%i===0 && isPrime(i))){
             LCM = LCM*i;
         }
        }
     return LCM;
    }

     function isPrime(num){
         for(let i=2; i<num;i++){
             if(num%i===0){
                 return false;
             }else{
                 return true;
             }
         }
     }
 // Solution B modified a result from google
     let LCM1 = (numx, numy) => {
        let large = Math.max(numx, numy);
        let small = Math.min(numx, numy);
        let i = large;
        while(i % small !== 0){
          i += large;
        }
        return i;
      }

      //Solution C using Highest Common Factor

      /* const LCM3 = function(num1, num2){
        let hcf;
        for (let i = 1; i <= num1 && i <= num2; i++) {
            if( num1 % i == 0 && num2 % i == 0) {
                hcf = i;
            }
        }
        let lcm = (num1 * num2) / hcf;
        return lcm;
        } */


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

console.log(LCM(120,428));
console.log(LCM1(120,428));
console.log(LCM2(120,428));