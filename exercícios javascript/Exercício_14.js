//Método em Objeto:
//Adicione ao objeto carro um método descricao() que retorne uma string:
//"Marca: <marca>, Modelo: <modelo>, Ano: <ano>".
//Chame esse método e mostre o resultado no console.

// Objeto carro com método descricao()
let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2024,
    
    // Método
    descricao: function() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
    }
};

console.log(carro.descricao());
