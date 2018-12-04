const fs = require('fs');

let boxIds = fs.readFileSync('input.js').toString().split("\n");
let sharedCharacters = [];
for (let i = 0; i < boxIds.length; i++) {
    boxIds[i] = boxIds[i].split("");
}
for (let i = 0; i < boxIds.length-1; i++) {
    for (let j = i + 1; j < boxIds.length; j++) {
        let charDiff = 0;
        for (let k = 0; k < boxIds[i].length; k++) {
            if (boxIds[i][k] != boxIds[j][k]) {
                charDiff++;
            }
        }
        if (charDiff === 1) {
            for (let l = 0; l < boxIds[i].length; l++) {
                if (boxIds[i][l] === boxIds[j][l]) {
                    sharedCharacters.push(boxIds[i][l])
                }
            }
            break;
        }
    }
    if (sharedCharacters.length > 0)
    {
        break;
    }
}

console.log(`Common letters: ${sharedCharacters.join('')}`);


