const prompt = require('prompt-sync')();

const valor1 = parseInt(prompt('Digite o valor 1: '))
const valor2 = parseInt(prompt('Digite o valor 2: '))

if (valor1 > valor2) {
    console.log(`Números digitados em ordem crescente: ${valor2}, ${valor1}`)
} else if(valor2 > valor1) {
    console.log(`Números digitados em ordem crescente: ${valor1}, ${valor2}`)
} else if(valor1 == valor2) {
    console.log('Os números não podem ser iguais')
} else {
    console.log('Números inválidos')
}