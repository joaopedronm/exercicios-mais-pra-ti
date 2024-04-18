const prompt = require('prompt-sync')();

const valor1 = parseInt(prompt('Digite o primeiro número: '))
const valor2 = parseInt(prompt('Digite o segundo número: '))
const valor3 = parseInt(prompt('Digite o terceiro número: '))
const valor4 = parseInt(prompt('Digite o quarto número: '))

const novoValor1 = valor1 + 25
const novoValor2 = valor2 * 3
const novoValor3 = valor3 * (12/100)
const novoValor4 = valor1 + valor2 + valor3

console.log(`O novo valor do primeiro número é: ${novoValor1}`)
console.log(`O novo valor do segundo número é: ${novoValor2}`)
console.log(`O novo valor do terceiro número é: ${novoValor3}`)
console.log(`O novo valor do quarto número é: ${novoValor4}`)