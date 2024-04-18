const prompt = require('prompt-sync')();

const codigoDeOrigem = parseInt(prompt('Digite o código de origem: '))

if(codigoDeOrigem == 5 || codigoDeOrigem == 6) {
    console.log('O produto é do Nordeste')
} else if (codigoDeOrigem >= 7 && codigoDeOrigem <= 9) {
    console.log('O produto é do Sudeste')
} else if (codigoDeOrigem >= 10 && codigoDeOrigem <= 20) {
    console.log('O produto é do Centro-Oeste')
} else if (codigoDeOrigem >= 25 && codigoDeOrigem <= 50) {
    console.log('O produto é do Nordeste')
} else if (codigoDeOrigem == 1) {
    console.log('O produto é do Sul')
} else if (codigoDeOrigem == 2) {
    console.log('O produto é do Norte')
} else if (codigoDeOrigem == 3) {
    console.log('O produto é do Leste')
} else if (codigoDeOrigem == 4) {
    console.log('O produto é do Oeste')
} else {
    console.log('O produto é importado')
}