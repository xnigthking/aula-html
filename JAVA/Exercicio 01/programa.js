// Variáveis e Constantes
// 1
const nome = "Luis"; // Defina 'Luis' como uma string
console.log(nome);

// 2
const PI = 3.14;
console.log(PI);

// 3
// Declaração e atribuição de valores
let a = 5; // valor inicial de a
let b = 10; // valor inicial de b

// Imprime os valores antes da troca
console.log("Antes da troca:");
console.log("a =", a);
console.log("b =", b);

// Troca os valores
let temp = a; // armazena o valor de a em uma variável temporária
a = b; // atribui o valor de b a a
b = temp; // atribui o valor armazenado de temp a b

// Imprime os valores após a troca
console.log("Depois da troca:");
console.log("a =", a);
console.log("b =", b);

// 4
// Declaração e inicialização da variável contador
let contador = 0;

// Loop para incrementar o contador de 0 a 10
for (let i = 0; i <= 10; i++) {
    console.log("Contador:", contador);
    contador++; // Incrementa o contador
}

// Tipos de Dados
// 5
// Declaração de variáveis de diferentes tipos
const idade = 30; // number
const isEstudante = true; // boolean
const pessoa = { nome: "Luis", idade: 30 }; // objeto
const numerosArray = [1, 2, 3, 4, 5]; // Renomeado para evitar conflito

// Usando typeof para imprimir o tipo de cada variável
console.log("Tipo de 'nome':", typeof nome); // string
console.log("Tipo de 'idade':", typeof idade); // number
console.log("Tipo de 'isEstudante':", typeof isEstudante); // boolean
console.log("Tipo de 'pessoa':", typeof pessoa); // object
console.log("Tipo de 'numerosArray':", typeof numerosArray); // object (arrays são considerados objetos)

// 6
// Declaração de uma variável com um valor numérico como string
const valorString = "42";

// Conversão da string para um número
const valorNumero = Number(valorString); // ou você pode usar parseInt(valorString) ou parseFloat(valorString)

// Impressão do resultado
console.log("Valor como string:", valorString);
console.log("Valor convertido para número:", valorNumero);
console.log("Tipo do valor convertido:", typeof valorNumero); // Verifica o tipo após a conversão

// 7
// Criação de um array com 5 números
const numerosSoma = [10, 20, 30, 40, 50]; // Renomeado para evitar conflito

// Uso do método reduce para calcular a soma
const soma = numerosSoma.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual; // Soma os valores
}, 0); // O valor inicial do acumulador é 0

// Impressão do resultado
console.log("A soma dos números é:", soma);

// 8
// Criação de um objeto que representa um carro
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020
};

// Acessando e imprimindo as propriedades do objeto
console.log("Marca do carro:", carro.marca);
console.log("Modelo do carro:", carro.modelo);
console.log("Ano do carro:", carro.ano);
