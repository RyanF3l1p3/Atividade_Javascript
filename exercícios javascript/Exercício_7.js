//Nota de Aluno:
//Receba uma nota de 0 a 10.

let notaString = prompt("Digite a nota do aluno (de 0 a 10):");

let nota = parseFloat(notaString);

let resultado;

if (isNaN(nota) || nota < 0 || nota > 10) {
  
    resultado = "Erro: Por favor, insira uma nota válida entre 0 e 10.";
} else if (nota >= 7) {

    resultado = "Aprovado!";
} else if (nota >= 5) {

    resultado = "Recuperação.";
} else {
    
    resultado = "Reprovado.";
}

console.log(`Nota: ${nota}`);
console.log(`Situação: ${resultado}`); 