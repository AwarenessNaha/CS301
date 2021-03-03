function isStacked(num){
    let sum=0;
    for(let i=1; i<num+1; i++){
        sum=sum+i;
        if(sum===num){
            return true;
        }
        if(sum>num){
            return false;
        }
    }
}

console.log(isStacked(10));
console.log(isStacked(7));
console.log(isStacked(1122));
console.log(isStacked(78));

let x=2;
console.log(x--);
console.log(x);
x=2;
console.log(--x);
console.log(x);
x=2
console.log(x);