const prompt = require('prompt-sync')();

const numeroDeMacas = parseInt(prompt('Digite o número de maçãs compradas: '))
let precoTotal

if(numeroDeMacas > 0 && numeroDeMacas < 12) {
    precoTotal = numeroDeMacas * 0.3
    console.log(`Cada maçã saiu por R$0,30. Logo, o valor da compra foi de R$${precoTotal.toFixed(2)}`)
} else if (numeroDeMacas >= 12) {
    precoTotal = numeroDeMacas * 0.25
    console.log(`Cada maçã saiu por R$0,25. Logo, o valor da compra foi de R$${precoTotal.toFixed(2)}`)
} else {
    console.log('Digite um número válido')
}
