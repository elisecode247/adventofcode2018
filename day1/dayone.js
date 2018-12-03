const fs = require('fs');

let frequency = 0;
let input = fs.readFileSync('input.js', 'utf8').split("\n");

input.forEach((el)=>frequency += parseInt(el));

console.log('frequency: ' + frequency);