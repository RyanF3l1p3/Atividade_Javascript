//Encadeando Métodos:
//Dado o array [2, 5, 8, 11, 14], use filter para selecionar apenas os números
//maiores que 5 e depois map para multiplicá-los por 2. Mostre o resultado final.

const numeros = [2, 5, 8, 11, 14];
const resultadoEncadeado = numeros

    .filter(numero => numero > 5)

    .map(numero => numero * 2);

console.log(resultadoEncadeado);