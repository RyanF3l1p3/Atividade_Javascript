//Percorrendo Objetos com for...in:
//Crie um objeto pessoa com nome, idade e cidade. Use for...in para listar suas
//propriedades e valores.


let pessoa = {
    nome: "Carol",
    idade: 24,
    cidade: "São Paulo"
};

for (let propriedade in pessoa) {
    console.log(`${propriedade}: ${pessoa[propriedade]}`);
}
