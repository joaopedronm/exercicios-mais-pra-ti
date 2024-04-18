const prompt = require('prompt-sync')();

const numeroDeEleitores = parseInt(prompt('Digite o número de eleitores: '));
const votosBrancos = parseInt(prompt('Digite o número de votos brancos: '));
const votosNulos = parseInt(prompt('Digite o número de votos nulos: '));
const votosValidos = parseInt(prompt('Digite o número de votos válidos: '));

const porcentagemVotosBrancos = (votosBrancos * 100) / numeroDeEleitores
const porcentagemVotosNulos = (votosNulos * 100) / numeroDeEleitores
const porcentagemVotosValidos = (votosValidos * 100) / numeroDeEleitores

console.log(`Votos em branco: ${porcentagemVotosBrancos.toFixed(2)}%`)
console.log(`Votos nulos: ${porcentagemVotosNulos.toFixed(2)}%`)
console.log(`Votos válidos: ${porcentagemVotosValidos.toFixed(2)}%`)
