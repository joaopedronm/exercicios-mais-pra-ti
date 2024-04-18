const prompt = require('prompt-sync')();

const lado1 = parseFloat(prompt('Digite o primeiro lado do triângulo: '))
const lado2 = parseFloat(prompt('Digite o segundo lado do triângulo: '))
const lado3 = parseFloat(prompt('Digite o terceiro lado do triângulo: '))

if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)) {
    if(lado1 == lado2 && lado2 == lado3) {
        console.log('Este é um triângulo equilátero')
    } else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        console.log('Este é um triângulo isósceles')
    } else if(lado1 !== lado2 && lado2 !== lado3) {
        console.log('Este é um triângulo escaleno')
    }
} else {
    console.log('Os valores digitados não correspondem às medidas de um triângulo.')
}