// Estruturas Condicionais

const x = 10;
const y = 10;

if (x < y) {
    console.log("x é menor do que y");
} else if (x > y) {
    console.log("x é maior do que y");
}

const cor = "verde";

switch(cor) {
    case "vermelho":
        console.log("a cor é vermelha");
        break;

    case "verde":
        console.log("a cor é verde");
        break;

    case "azul":
        console.log("a cor é azul");
        break;

    default:
        console.log("A cor não é vermelha");
        break;
}

const sexo = "x";

switch (sexo) {
    case "M":
    case "m":
        console.log("Masculino");
        break;
    case "F":
    case "f":
        console.log("Feminino"); 
        break;
    default:
        console.log("inválido");
}


let numero;

if(cor == "vermelho") {
    numero = 10;
} else {
    numero = 20;
}

let numero2 = cor == "vermelho" ? 10 : 20;

console.log(numero2)