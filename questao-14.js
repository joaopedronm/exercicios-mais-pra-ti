const prompt = require('prompt-sync')();

let numero = parseFloat(prompt('Digite um número decimal: '));
let quantidade = 0;
let soma = 0;

while (numero !== 0) {
    soma = soma + numero;
    quantidade++;
    numero = parseFloat(prompt('Digite outro número decimal (digite 0 para parar): '));
}

if (quantidade !== 0) {
    let media = soma / quantidade;
    console.log(`A média dos números digitados é ${media}`);
} else if (isNaN(soma)) {
    console.log('Um ou mais valores não são números válidos');
} else {
    console.log('Nenhum número foi digitado')
}