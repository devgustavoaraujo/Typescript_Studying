const pedidos = [
  {
    id: 1001,
    cliente: "Matheus",
    valor: 23.59,
    status: "cancelado",
  },
  {
    id: 1002,
    cliente: "Gustavo",
    valor: 18.59,
    status: "entregue",
  },
  {
    id: 1003,
    cliente: "Daniel",
    valor: 14.87,
    status: "pendente",
  },
  {
    id: 1004,
    cliente: "Mariana",
    valor: 29.31,
    status: "pendente",
  },
  {
    id: 1005,
    cliente: "Maria",
    valor: 32.45,
    status: "pendente",
  },
];

function gerarRelatorioPedidos(listaPedidos, statusBuscado) {
  const pedidosFiltrados = listaPedidos.filter((item) => item.status === statusBuscado);

  if (pedidosFiltrados.length == 0) {
    return `Error 404: Nenhum outro Pedido encontrado com o Status: ${statusBuscado}`;
  }
  const pedidosTotal = pedidosFiltrados.reduce((acumulador, pedido) => {
    return acumulador + pedido.valor;
  }, 0);

  console.log(`Valor Total dos Pedidos: ${pedidosTotal}`);

  return pedidosFiltrados
    .map((item) => {
      const precoFormatado = item.valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      return `Pedido do(a) Cliente ${item.cliente} no valor de ${precoFormatado} Está como ${item.status}`;
    })
    .join("\n");
}
console.log(gerarRelatorioPedidos(pedidos, "pendente"));
//FILTER

//   listaPedidos.filter((item) => {
//     if (item.status === statusBuscado) {
//
//     }
//   });

//FOREACH

//   listaPedidos.forEach((item, index) => {
//     if (item.status === statusBuscado) {
//       const precoFormatado = item.valor.toLocaleString("pt-br", {
//         style: "currency",
//         currency: "BRL",
//       });
//       console.log(
//         `Pedido do(a) Cliente ${item.cliente} na Posição ${
//           index + 1
//         } no valor de ${precoFormatado} Está como ${item.status}`,
//       );
//     }
//   });

//MAP

//   listaPedidos.map((item) => {
//     if (item.status === statusBuscado) {
//       const precoFormatado = item.valor.toLocaleString("pt-br", {
//         style: "currency",
//         currency: "BRL",
//       });
//       console.log(
//         `Pedido do(a) Cliente ${item.cliente} no valor de ${precoFormatado} Está como ${item.status}`,
//       );
//     } else {
//     }
//   });
