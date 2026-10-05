const estoque = [
  {
    nome: "Macarrão",
    preco: 5.7,
    itemDisponivel: true,
  },
  {
    nome: "Arroz",
    preco: 20.99,
    itemDisponivel: true,
  },
  {
    nome: "Feijão",
    preco: 7.99,
    itemDisponivel: false,
  },
  {
    nome: "Molho",
    preco: 5.99,
    itemDisponivel: false,
  },
  {
    nome: "Carne",
    preco: 12.99,
    itemDisponivel: true,
  },
];

function buscarProduto(listaEstoque, nomeProcurado) {
  for (const item of listaEstoque) {
    if (nomeProcurado === item.nome) {
      const valorFormatado = item.preco.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      return `Produto "${nomeProcurado}" Encontrado, No valor de ${valorFormatado} Disponível: ${item.itemDisponivel ? "Sim!" : "Não!"}`;
    }
  }
  return `${nomeProcurado} Nome Não Encontrado, Produto Fora de Estoque!`;
}
console.log(buscarProduto(estoque, "Feijão"));
