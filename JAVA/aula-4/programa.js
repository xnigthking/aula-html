//Vetores

const vetor = ["A", 10, "01", 1.5, true];
const numeros = [1, 2, 3, 4, 5];
const frutas = ["maças", "laranjas", "peras", "uvas"]

console.log(frutas[0]);
console.log(frutas[1])

frutas[4] = "melancia",
console.log(frutas)

frutas[1] = "limão";
console.log(frutas)

frutas.push("morangos");
console.log(frutas)

frutas.unshift("mangas");
console.log(frutas)

const fruta_removida = frutas.pop();
console.log(frutas);
console.log(fruta_removida)

const fruta_removida2 = frutas.shift();
console.log(frutas);
console.log(fruta_removida2)

console.log(frutas.indexOf("limão"));

console.log(Array.isArray(frutas));
console.log(Array.isArray(10));
console.log(Array.isArray("Olá mundo"))