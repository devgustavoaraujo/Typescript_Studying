const carrinho = [
  {
    nome: "Arroz",
    preco: 32.99,
    quantidade: 3,
  },
  {
    nome: "Feijão",
    preco: 7.99,
    quantidade: 6,
  },
  {
    nome: "Carne",
    preco: 52.99,
    quantidade: 1,
  },
];

function calcularTotalCarrinho(listaProdutos) {
  let valorTotal = 0;
  const totalCompras = listaProdutos.reduce((acumulador, produtos) => {
    return acumulador + produtos.preco * produtos.quantidade;
  }, 0);

  const valorFormatado = valorTotal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  if (totalCompras >= 100) {
    valorTotal = totalCompras - totalCompras * 0.1;
    return `Parabéns Você conseguiu 10% de Desconto na sua Compra Valor Total: R$${valorTotal}`;
  }
  return `Você não Conseguiu o Desconto, Valor Total: R$${valorTotal}`;
}
console.log(calcularTotalCarrinho(carrinho));
