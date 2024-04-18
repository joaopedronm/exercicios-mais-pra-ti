const prompt = require('prompt-sync')();

let a = 999

for (i = 0; i < 1000; i++) {
    a++
    if(a % 11 == 5) {
        console.log(a)
    }
}