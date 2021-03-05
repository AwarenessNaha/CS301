/**5. Write a function expression to find LCM of any two numbers using the greatestCommonDivisor 
function from previous question. Assign it to the variable leastCommonMultiple. LCM of two 
numbers is the smallest number that can be divided evenly by both numbers. Write it as
 a function expression.*/
 //Solution A by Naha




 let LCM = function (numx, numy){
     let LCM = 1;
     let n = numx*numy;
     const m = Math.max(numx,numy);
     for(let i = n; i>m; i--){
         if(n%numx===0 && n%numy===0){
             LCM = n;
         }
        }
     return LCM;
    }
console.log(LCM(25, 35));