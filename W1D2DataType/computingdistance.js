let prompt = require('prompt-sync')();
let xPoint1 = prompt('Eneter x1 co-ordinates here: ');
let yPoint1 = prompt('Eneter y1 co-ordinates here: ');
let xPoint2 = prompt('Eneter x2 co-ordinates here: ');
let yPoint2 = prompt('Eneter y2 co-ordinates here: ');
const xDiff=(xPoint1-xPoint2);
const yDiff=yPoint1-yPoint2;
const sumSquares = xDiff*xDiff + yDiff*yDiff;
const distance = Math.sqrt(sumSquares);
console.log("expect distance is  ", distance);


