// Class ES6
class Pessoa {
    // Construtor da classe Pessoa
    constructor(nome, sobrenome, dataDenascimento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataDenascimento = new Date(dataDenascimento);
    }

    // Método para obter o nome completo
    obterNomeCompleto() { 
        return `${this.nome} ${this.sobrenome}`;
    }
}

// Criando uma instância da classe Pessoa
class Cliente extends Pessoa {
    // Construtor da classe Cliente
    constructor(nome, sobrenome, dataDenascimento, saldo) {
        super(nome, sobrenome, dataDenascimento);
        this.saldo = saldo;
    }
}

// Criando uma instância da classe Cliente
const cliente1 = new Cliente("Luis", "Sousa", "1993-05-03", 1000); 
console.log(cliente1);
console.log(cliente1.nome);
console.log(cliente1.sobrenome);
console.log(cliente1.dataDenascimento);
console.log(cliente1.saldo);