let produto = {
    nome: "Passagem de Aviao",
    preco: 1937,
    quantidade: 2,

    calcularTotal: function () {
        return this.preco * this.quantidade;
    }
};

console.log(produto.calcularTotal());