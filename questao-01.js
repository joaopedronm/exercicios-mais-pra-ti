const prompt = require('prompt-sync')();

const temperaturaCelsius = parseFloat(prompt('Digite uma temperatura em °C: '));

const temperaturaFahrenheit = (temperaturaCelsius * 1.8) + 32

console.log(`A temperatura digitada (${temperaturaCelsius}°C) em graus Fahrenheit é: ${temperaturaFahrenheit}°F`);