const nome = "Pedro";
const sobrenome = "Silva";
const idade = 27;

const apresentacao = "Meu nome é " + nome + " " + sobrenome + " e eu tenho " + idade + " anos.";
console.log(apresentacao);

const apresentacao2 = `Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos.`;
console.log(apresentacao2);

const s = "Olá mundo";
console.log(s.substring(0, 5));

console.log(s.split("u"));