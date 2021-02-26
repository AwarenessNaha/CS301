/**Write code to print following patterns on the console • 
 * Hint: see lecture_codes/lesson4/nested_for.js
  11111 22222 33333 44444 55555
12345 12345 12345 12345 12345 */

let result2 = "";
for(let i=1;i<=5;i++){
    let result1 = "";
    for(let j=0; j<5;j++){
        result1 += i + " ";
    }
    console.log(result1);
}

console.log('');

for(let i=0;i<5;i++){
    let result2 = "";
    for(let j=1; j<=5;j++){
        result2 += j + " ";
    }
    console.log(result2);
}

