/**6. Write JS code to print following patterns using nested loops.
 *    1
22
333
4444
55555
1
12
123
1234
12345
55555
4444
333
22

 */
for(let i =1; i<=5; i++){
    let result = "";
    for(let j= 1; j<=i; j++){
       //result = result + j + "";
       result += i + "";
    }
    console.log(result);
}

for(let i =1; i<=5; i++){
    let result = "";
    for(let j= 1; j<=i; j++){
       //result = result + i + "";
       result += j + "";
    }
    console.log(result);
}

for(let i = 5; i<=1; i--){
    let result = "";
    for(let j= 0; j<i; j++){
       //result = result + j + "";
       result += i + "";
    }
    console.log(result);
}
 


