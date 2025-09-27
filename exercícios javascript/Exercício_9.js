//Parte 3 – Laços de Repetição (for, while, for...in, for...of) (4 questões)
//Tabuada com for:
let numero = parseFloat(prompt("Digite um número para ver a tabuada:"));

if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, digite um número.");
} else {
    console.log(`Tabuada do ${numero}:`);
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
