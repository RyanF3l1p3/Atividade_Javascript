//Operador Ternário:
//Receba um número via prompt e mostre no console:
//"Positivo" se maior que 0, "Negativo" se menor que 0, ou "Zero" caso contrário,
//usando apenas operador ternário.


let numero = parseFloat(prompt("Digite um número:"));

let resultado = numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Zero";

console.log(`O número ${numero} é ${resultado}.`);
