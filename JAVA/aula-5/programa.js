//Objetos

const nome = "Pedro";
const sobrenome = "Silva";
const idade = 18;
const passatempo = ["musica", "filmes"];
const enderecoRua = "Avenida dos Cravos";
const enderecoCidade = "Vitória";
const enderecoEstado = "ES";

const pessoa = {
    nome: "Pedro",
    sobrenome: "Silva",
    passatempo: ["musicas", "filmes", "esportes"],
    idade:18,
    endereco: {
        rua: "Avenida dos Cravos",
        cidade: "Vitória",
        estado: "ES"
    }
}

console.log(pessoa.nome)
console.log(pessoa.endereco[0]);
console.log(pessoa.endereco.cidade);

const tarefas = [
    {
        id: 1,
        texto: "tirar o lixo",
        completo: false
    },
    {
        id: 2,
        texto: "varrer o chão",
        completo: true
    },
    {
        id: 3,
        texto: "lavar o carro",
        completo: false
    }
];

console.log(tarefas[1].texto)

console.log(JSON.stringify(tarefas));
console.log(JSON.stringify(pessoa));