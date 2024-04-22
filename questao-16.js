function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

let numeroAtual = 101;
let numerosPrimosEncontrados = 0;

while (numerosPrimosEncontrados < 50) {
    if (ehPrimo(numeroAtual)) {
        console.log(numeroAtual);
        numerosPrimosEncontrados++;
    }
    numeroAtual++;
}