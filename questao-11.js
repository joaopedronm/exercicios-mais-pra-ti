const prompt = require('prompt-sync')();

while (true) {
    const valor = parseInt(prompt('Digite um valor inteiro: '));

    if (isNaN(valor) || valor <= 0) {
        console.log('Número inválido. Reinicie o programa e tente novamente.');
        break;
    } else if (valor % 2 === 0) {
        console.log(`${valor} é um número par.`);
    } else {
        console.log(`${valor} é um número ímpar.`);
    }
}