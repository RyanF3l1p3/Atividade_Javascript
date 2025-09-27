//Manipulação de Propriedades:
//Crie um objeto livro com título e autor.
//Adicione dinamicamente a propriedade ano.
//Altere o título.
//Exclua a propriedade autor.
//Mostre o objeto atualizado no console.

let livro = {
    titulo: "A Metamorfose",
    autor: "Franz Kafka"
};

console.log("Objeto inicial:", livro);
livro.ano = 1915;
console.log("\nApós adicionar 'ano':", livro);
livro.titulo = "A Metamorfose (Edição de Bolso)";
console.log("\nApós alterar 'titulo':", livro);

delete livro.autor;

console.log("\nApós excluir 'autor':", livro);
console.log("\n--- Objeto Final Atualizado ---");
console.log(livro);