const readline = require('readline');

// Cria uma interface para leitura de entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Gera um número aleatório entre 1 e 10
const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// Solicita ao usuário que adivinhe o número
rl.question("Adivinhe um número entre 1 e 10: ", (resposta) => {
    const palpite = parseInt(resposta);

    // Verifica se o palpite é um número válido
    if (isNaN(palpite)) {
        console.log("Você não digitou um número válido.");
    } else if (palpite < 1 || palpite > 10) {
        console.log("Por favor, adivinhe um número entre 1 e 10.");
    } else if (palpite === numeroAleatorio) {
        console.log("Parabéns! Você acertou!");
    } else {
        console.log(`Você errou! O número era ${numeroAleatorio}.`);
    }

    // Fecha a interface
    rl.close();
});
