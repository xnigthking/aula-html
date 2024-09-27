const nome = "Luis";
const sobrenome = "Eduardo";
const dataDeNascimento = "03/05/1993"; // Data de nascimento formatada

const pessoaA = {
    nome: nome, // Nome da pessoa
    sobrenome: sobrenome, // Sobrenome da pessoa
    dataDeNascimento: new Date("1993-05-03"), // Data de nascimento como objeto Date
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`; // Retorna nome completo
    },
    obterAnoNascimento() { // Método para obter o ano de nascimento
        return this.dataDeNascimento.getFullYear();
    }
};

const pessoaB = {
    nome: "Eliomar",
    sobrenome: "Sousa",
    dataDeNascimento: new Date("1961-12-30"), // Data de nascimento como objeto Date
    obterNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`; // Retorna nome completo
    },
    obterAnoNascimento() {
        return this.dataDeNascimento.getFullYear(); // Retorna ano de nascimento
    }
};

console.log(pessoaA.nome); // Exibe o nome de pessoaA
console.log(pessoaA.sobrenome); // Exibe o sobrenome de pessoaA
console.log(pessoaA.obterNomeCompleto()); // Exibe o nome completo de pessoaA
console.log(pessoaA.obterAnoNascimento()); // Exibe o ano de nascimento de pessoaA

console.log(pessoaB.nome); // Exibe o nome de pessoaB
console.log(pessoaB.sobrenome); // Exibe o sobrenome de pessoaB
console.log(pessoaB.obterNomeCompleto()); // Exibe o nome completo de pessoaB
console.log(pessoaB.obterAnoNascimento()); // Exibe o ano de nascimento de pessoaB

// Função construtora para criar novas pessoas
function Pessoa(nome, sobrenome, dataDeNascimento) {
    this.nome = nome; // Nome da pessoa
    this.sobrenome = sobrenome; // Sobrenome da pessoa
    this.dataDeNascimento = new Date(dataDeNascimento); // Data de nascimento como objeto Date

    this.obterAnoNascimento = function() {
        return this.dataDeNascimento.getFullYear(); // Retorna o ano de nascimento
    };

    this.amigos = []; // Lista de amigos
    this.adicionarAmigo = function(amigo) {
        if (!this.amigos.includes(amigo)) { // Verifica se o amigo já está na lista
            this.amigos.push(amigo); // Adiciona amigo à lista
            amigo.amigos.push(this); // Adiciona este como amigo do amigo
        }
    };

    this.selecionarAmigos = function() {
        return this.amigos.map(function(amigo) {
            return amigo.obterNomeCompleto(); // Retorna os nomes completos dos amigos
        });
    };
}

Pessoa.prototype.obterNomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`; // Método protótipo para obter nome completo
};

const pessoa1 = new Pessoa("Hugo", "Sousa", "20-06-1984"); // Cria uma nova pessoa
const pessoa2 = new Pessoa("Paulo", "Sousa", "30-07-1989"); // Cria outra nova pessoa

console.log(pessoa1); // Exibe detalhes de pessoa1
console.log(pessoa2); // Exibe detalhes de pessoa2
console.log(pessoa1.obterAnoNascimento()); // Exibe o ano de nascimento de pessoa1
console.log(pessoa1.nome); // Exibe o nome de pessoa1
console.log(pessoa1.sobrenome); // Exibe o sobrenome de pessoa1
console.log(pessoa1.obterNomeCompleto()); // Exibe o nome completo de pessoa1
