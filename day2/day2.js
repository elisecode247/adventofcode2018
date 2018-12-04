const fs = require('fs');

let boxIds = fs.readFileSync('input.js').toString().split("\n");
let threeCount = 0;
let twoCount = 0;

boxIds.forEach((boxId) => {
    let sortedBoxId = boxId.split('').sort();
    let hasThree = false;
    let hasTwo = false;
    for (let i = 0; i < sortedBoxId.length; i++) {
        if (sortedBoxId[i] === sortedBoxId[i + 1] && sortedBoxId[i] === sortedBoxId[i + 2]) {
            hasThree = true;
            i+=2;
        } else if (sortedBoxId[i] === sortedBoxId[i + 1]) {
            hasTwo = true;
            i++;
        }
    }
    if (hasThree) threeCount++;
    if(hasTwo) twoCount++;
})

let checksum = twoCount * threeCount;
console.log(`checksum: ${checksum}`);