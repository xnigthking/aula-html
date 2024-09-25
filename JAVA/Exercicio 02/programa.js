// 1
// Criando o vetor com números de 1 a 10
let numeros = [];

for (let i = 1; i <= 10; i++) {
    numeros.push(i); // Adicionando números ao vetor
}

// Usando um loop para imprimir todos os números do vetor
for (let numero of numeros) {
    console.log(numero);
}

// 2
// Criando um novo vetor com números de 1 a 10
let newNumeros = [];
for (let i = 1; i <= 10; i++) {
    newNumeros.push(i); // Adicionando números ao novo vetor
}

// Criando um vetor para armazenar os números pares
let pares = [];

// Usando um loop para preencher o vetor pares
for (let numero of newNumeros) {
    if (numero % 2 === 0) {
        pares.push(numero); // Adiciona o número par ao vetor pares
    }
}

// Imprimindo o vetor pares
console.log(pares);

//3
// Declarando a variável
let newNumero2 = -5; // Você pode mudar este valor para testar

// Estrutura condicional
if (newNumero2 > 0) {
    console.log("O número é positivo.");
} else if (newNumero2 < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

//4
// Criando o objeto pessoa
let pessoa = {
    nome: "Luis",     
    idade: 31,       
    cidade: "Brasília" 
};

// Imprimindo a apresentação da pessoa
console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e moro em ${pessoa.cidade}.`);

// 5
// Adicionando a nova propriedade 'profissao' ao objeto pessoa
pessoa.profissao = "Desenvolvedor"; 

// Usando um loop para imprimir todas as propriedades do objeto
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
