const prompt = require('prompt-sync')();

const nota1 = parseFloat(prompt('Digite a primeira nota: '))
const nota2 = parseFloat(prompt('Digite a segunda nota: '))

const media = (nota1 + nota2) / 2

if (media >= 0 && media < 6) {
    console.log(`Você foi reprovado com média igual ${media}`)
} else if (media >= 6 && media <= 10) {
    console.log(`PARABÉNS! Você foi aprovado com média ${media}`)
} else {
    console.log('Os valores das médias devem ser números entre 0 e 10')
}