const fs = require('fs');

let frequency = 0;
let frequencies = [];
let duplicateFrequency = null;

let input = fs.readFileSync('input.js', 'utf8').split("\n");

while (duplicateFrequency === null) {
    input.forEach((el) => {
        frequency += parseInt(el);
        if (duplicateFrequency === null) {
            duplicateFrequency = (frequencies.indexOf(frequency) > -1) ? frequency : null;
            frequencies.push(frequency);
        }
    });
}

console.log('frequency: ' + frequency);
console.log('duplicate frequency: ' + duplicateFrequency);