// Operadores
// 9
let num1 = 20;
let num2 = 5;

// Cálculos utilizando operadores aritméticos
const soma = num1 + num2; // Adição
const subtracao = num1 - num2; // Subtração
const multiplicacao = num1 * num2; // Multiplicação
const divisao = num1 / num2; // Divisão

// Impressão dos resultados
console.log(`Soma: ${soma}`); // 25
console.log(`Subtração: ${subtracao}`); // 15
console.log(`Multiplicação: ${multiplicacao}`); // 100
console.log(`Divisão: ${divisao}`); // 4

// 10
// Declaração de duas variáveis
let a = 10;
let b = '10';

// Comparações utilizando operadores de comparação
console.log("a == b:", a == b);     // true (igualdade)
console.log("a === b:", a === b);   // false (igualdade estrita)
console.log("a != b:", a != b);     // false (diferença)
console.log("a !== b:", a !== b);   // true (diferença estrita)
console.log("a < b:", a < b);       // false (menor que)
console.log("a > b:", a > b);       // false (maior que)
console.log("a <= b:", a <= b);     // true (menor ou igual a)
console.log("a >= b:", a >= b);     // true (maior ou igual a)

// 11
// Declaração de duas variáveis booleanas
let x = true;
let y = false;

// Operações utilizando operadores lógicos
console.log("x && y:", x && y); // false (E)
console.log("x || y:", x || y); // true (OU)
console.log("!x:", !x);          // false (NÃO)
console.log("!y:", !y);          // true (NÃO)

// Combinações de operadores
console.log("(x && !y):", (x && !y)); // true
console.log("(y || !x):", (y || !x)); // false
console.log("!(x || y):", !(x || y)); // false
console.log("!(x && y):", !(x && y)); // true

// 12
// Declaração da variável idade
let idade = 18;

// Uso do operador ternário para verificar se a pessoa é maior de idade
let resultado = (idade >= 18) ? "Você é maior de idade." : "Você é menor de idade.";

// Impressão da mensagem correspondente
console.log(resultado);

// Strings
// 13
// Declaração de duas variáveis de string
let primeiroNome = "Luis";
let sobrenome = "Sousa";

// Concatenando as strings
let nomeCompleto = primeiroNome + " " + sobrenome;

// Impressão do resultado
console.log("Nome completo:", nomeCompleto);

// 14
// Criação da string
let fraseOriginal = "Aprendendo JavaScript!";

// Utilizando métodos de strings
let fraseMaiuscula = fraseOriginal.toUpperCase();  // Converte para maiúsculas
let fraseMinuscula = fraseOriginal.toLowerCase();  // Converte para minúsculas
let tamanhoFrase = fraseOriginal.length;            // Obtém o comprimento da string

// Impressão dos resultados
console.log("Frase original:", fraseOriginal);
console.log("Frase em maiúsculas:", fraseMaiuscula);
console.log("Frase em minúsculas:", fraseMinuscula);
console.log("Tamanho da frase:", tamanhoFrase);

// 15
// Criação da string
let fraseSubstituicao = "JavaScript é divertido";

// Substituindo "divertido" por "incrível"
let novaFrase = fraseSubstituicao.replace("divertido", "incrível");

// Impressão do resultado
console.log("Frase original:", fraseSubstituicao);
console.log("Nova frase:", novaFrase);

// 16
// Criação da string
let frutasString = "maçã,banana,laranja";

// Usando o método split() para dividir a string em um array
let arrayFrutas = frutasString.split(",");

// Impressão do array resultante
console.log("Array de frutas:", arrayFrutas);

// 17
// Função para contar vogais
function contarVogais(str) {
    const vogais = 'aeiouAEIOU'; // Definindo as vogais
    let contador = 0; // Inicializando o contador

    // Iterando sobre cada caractere da string
    for (let i = 0; i < str.length; i++) {
        // Verificando se o caractere é uma vogal
        if (vogais.includes(str[i])) {
            contador++;
        }
    }

    // Retornando o número de vogais
    return contador;
}

// Exemplo de uso da função
const textoVogais = "Aprendendo JavaScript!";
const numeroDeVogais = contarVogais(textoVogais);

// Impressão do resultado
console.log(`Número de vogais em "${textoVogais}":`, numeroDeVogais);

// 18
// Função para inverter uma string
function inverterString(str) {
    return str.split('').reverse().join(''); // Divide, inverte e junta os caracteres
}

// Exemplo de uso da função
const textoParaInverter = "JavaScript";
const textoInvertido = inverterString(textoParaInverter);

// Impressão do resultado
console.log(`Texto original: "${textoParaInverter}"`);
console.log(`Texto invertido: "${textoInvertido}"`);

// 19
// Função para comparar duas strings
function compararStrings(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase(); // Ignora maiúsculas/minúsculas
}

// Exemplo de uso da função
const string1 = "JavaScript";
const string2 = "javascript";

const resultadoComparacao = compararStrings(string1, string2);

// Impressão do resultado
console.log(`As strings "${string1}" e "${string2}" são iguais?`, resultadoComparacao);
