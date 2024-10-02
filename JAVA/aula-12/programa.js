//console.log(document.getElementById("meu-formulario")),
//console.log(document.getElementsByClassName("li"));
//console.log(document.getElementsByClassName("item"));
//console.log(document.querySelector("li"));
//console.log(document.querySelectorAll("#meu-formulario"));
//console.log(document.querySelector(".item"));

const itens = document.querySelectorAll(".item");


itens.forEach((item) => console.log(item));

/* Manipulacão do Dom */

const ul = document.querySelector(".itens");
console.log(ul);

//ul.remove();

//ul.lastElementChild.remove();

ul.firstElementChild.textContent = "Olá";

ul.children[1].textContent = "Oi";

ul.lastElementChild.innerHTML = "Oi";

const botao = document.querySelector(".botao");
console.log(botao);

botao.style.background = "red";