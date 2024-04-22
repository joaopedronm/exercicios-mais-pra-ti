const prompt = require('prompt-sync')();
let somaNumeros = 0;
let somaPesos = 0;

while (true) {
    let numero = parseFloat(prompt("Digite um número decimal (ou 0 para encerrar):"));
    if (numero === 0) {
        break;
    }
    let peso = parseFloat(prompt("Digite o peso do número:"));
    
    somaNumeros += numero * peso;
    somaPesos += peso;
}

if (somaPesos !== 0) {
    let mediaPonderada = somaNumeros / somaPesos;
    console.log("A média ponderada dos números é: " + mediaPonderada);
} else {
    console.log("Não foi possível calcular a média ponderada pois nenhum peso foi inserido.");
}