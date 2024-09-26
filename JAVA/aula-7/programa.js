/* Estrutura de Repetição */

// While é uma estrutura de controle

let contador = 0;
while (contador < 3) {
    console.log("miau");
    contador += 1; // Corrigido para usar +=
}

for (let i = 0; i < 10; i++) {
    console.log(`Número da repetição for: ${i}`); // Corrigido para usar 'i'
}

const tarefas = [
    {
        id: 1,
        texto: "tirar o lixo", // Corrigido "p lixo" para "o lixo"
        completo: false,
    },
    {
        id: 2,
        texto: "Jantar com a esposa",
        completo: false,
    },
    {
        id: 3,
        texto: "Reunião com o chefe",
        completo: true,
    }
];

for (let i = 0; i < tarefas.length; i++) { // Adicionado 'i++' para avançar o loop
    console.log(`Tarefa ${tarefas[i].id}: ${tarefas[i].texto}`); // Corrigido para usar 'tarefas[i].id'
}
