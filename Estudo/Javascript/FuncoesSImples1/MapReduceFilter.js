/*
DOMINANDO ARRAYS no JavaScript
  Map(Mepear item por item do Array)
 Criar um novo array com a mesma quantidade de itens do array original.
 O novo array você pode alterar o que quiser em relação ao array original.
 Você tem acesso a 3 dados:
 -> Item por Item do array
 -> Posição atual do Array
 -> Array Completo
*/

const numeros = [1, 2, 3, 4, 5];

const dobro = numeros.map((numero) => numero * 2);
//console.log(dobro);

const dobros = numeros.map((numero, index, arrayCompleto) => {
  return numero * 2;
});

//console.log(dobros);

const produtos = [
  {
    id: 1,
    nome: "Smartphone Galaxy S21",
    preco: 3999.99,
    temDesconto: true,
    quantidade: 1,
  },
  {
    id: 2,
    nome: "Notebook Dell Inspiron",
    preco: 4500.0,
    temDesconto: false,
    quantidade: 3,
  },
  {
    id: 3,
    nome: 'Smart TV LG 55"',
    preco: 2799.0,
    temDesconto: true,
    quantidade: 5,
  },
  {
    id: 4,
    nome: "Fone de Ouvido Bluetooth JBL",
    preco: 299.9,
    temDesconto: false,
    quantidade: 2,
  },
  {
    id: 5,
    nome: "Câmera DSLR Canon",
    preco: 3200.0,
    temDesconto: true,
    quantidade: 1,
  },
  {
    id: 6,
    nome: "Tablet iPad Air",
    preco: 4199.0,
    temDesconto: false,
    quantidade: 8,
  },
  {
    id: 7,
    nome: "Console PlayStation 5",
    preco: 4699.0,
    temDesconto: true,
    quantidade: 2,
  },
  {
    id: 8,
    nome: "Smartwatch Apple Watch",
    preco: 2499.0,
    temDesconto: false,
    quantidade: 7,
  },
  {
    id: 9,
    nome: "Impressora HP Multifuncional",
    preco: 599.9,
    temDesconto: true,
    quantidade: 5,
  },
  {
    id: 10,
    nome: "Caixa de Som Portátil Sony",
    preco: 1000.0,
    temDesconto: false,
    quantidade: 3,
  },
];

const novosProdutos = produtos.map((produto) => {
  const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco;

  return {
    id: produto.id,
    nome: produto.nome,
    preco: novoPreco.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
    quantidade: produto.quantidade,
  };
});
//console.log(novosProdutos[0]);

//QUAL SERÁ O FATURAMENTO SE VENDERMOS TODO O ESTOQUE?

//REDUCE PEGA UM ARRAY INTEIRO E REDUZ TODO MUNDO PARA APENAS UM VALOR

/*

 Reduce(Reduzir o Array a um único valor)
    - Reduz um array inteiro a um ÚNICO valor
    - Você tem acesso a 4 dados:- Acumulador
    - Valor Atual- Posição atual
    - Array Completo
*/

const numerosSoma = [1, 2, 3, 4, 5];
const soma = numerosSoma.reduce((acumulador, valorAtual) => {
  const total = acumulador + valorAtual;

  return total;
});
console.log(soma);

const totalVendas = produtos.reduce((acumulador, produto) => {
  return acumulador + produto.preco * produto.quantidade;
}, 0);
console.log(
  totalVendas.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  }),
);

//FILTRAR SOMENTE OS PRODUTOS EM PROMOÇÃO

/*
Filter(Filtrar o array)
- Cria um novo array filtrando os valores desejados do array Original
- Você tem acesso a 3 dados:
- Item por Item do array
- Posição atual do Array
- Array Completo
*/

const numerosPares = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filterPares = numerosPares.filter((numeros) => {
  return numeros % 2 === 0;
});
console.log(filterPares);

//EXEMPLO REAL

const temPromocao = produtos.filter((produto) => produto.temDesconto);
const naoPromocao = produtos.filter((produto) => !produto.temDesconto);
console.log();

// ADICIONAR MAIS 10 EM CADA PRODUTO
// FILTRAR SÓ OS EM PROMOCAO
// SABER QUAL É O FATURAMENTO SE VENDERMOS TODOS EM PROMOÇÃO

const faturamentoTotal = produtos
  .map((produto) => {
    return { ...produto, quantidade: produto.quantidade + 10 };
  })
  .filter((produto) => produto.temDesconto)
  .reduce(
    (acumulador, produto) => acumulador + produto.quantidade * produto.preco,
    0,
  );
