//Parte 2 – Estruturas Condicionais (if, else if, else e operador ternário) (4 questões)
//Verificação de Idade
let idadeString = prompt("Qual é a sua idade?");

let idade = parseInt(idadeString);

if (idade < 12) {
    console.log("Criança");
} else if (idade >= 12 && idade <= 17) {

    console.log("Adolescente");
} else if (idade >= 18) {

    console.log("Adulto");
} else {

    console.log("Idade inválida. Por favor, insira um número.");
}

