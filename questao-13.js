const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número: '));
let i = 1
let multiplicacao

while (i <= numero ) {
    multiplicacao = numero * i
    console.log(`${i} x ${numero} = ${multiplicacao}`)
    i++
}