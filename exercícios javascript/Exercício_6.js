//Número Par ou Ímpar:
//Receba um número via prompt e use if/else para verificar se é par ou ímpar.


let numeroString = prompt("Digite um número:");

let numero = parseInt(numeroString);

if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, digite um número.");
} else {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é PAR.`);
    } else {
        console.log(`O número ${numero} é ÍMPAR.`);
    }
}