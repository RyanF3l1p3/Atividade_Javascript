//Filtrar Números Pares (filter):
//Dado o array [10, 15, 20, 25, 30], use filter para criar um array apenas com números pares.

const numeros = [10, 15, 20, 25, 30];
const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares);