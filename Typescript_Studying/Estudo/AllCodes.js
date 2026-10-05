// === Arquivo: Arrays.js ===
{
  //ARRAYS
  //ESTRUTURA DE DADOS PARA ARMAZENAS ELEMENTOS

  const numbers = [1, 2, 3, 4, 5];
  //console.log(numbers[0]);

  const names = ["Gustavo", "Rincko", "Eduardo", "Gabriel", "Daniela"];
  //console.log(names[0]);
  names[1] = "Maria";
  names[5] = "Javascript"; //NÃO RECOMENDADO
  //console.log(names);
  //console.log(names[1]);
  //ITENS DO ARRAY NÃO SÃO CONSTANTES COMO A VARIAVEL ENTÃO PODEM SER ALTERADOS!

  for (let i = 0; i < names.length; i++) {
    //console.log(`${i + 1}. ${names[i]}`);
  }

  //TAMANHO DO ARRAY
  console.log(names.length); //QUANTOS ITENS TEM NO ARRAY

  //ADICIONAR
  names.push("Tereza"); //EMPURRAR PARA O ARRAY // ADICIONA NO FINAL DO ARRAY
  const addFirst = names.unshift("Daniel Lombo"); //ADICIONA UM ITEM NA FRENTE DO ARRAY

  //REMOVER
  names.pop(); //REMOVE O ULTIMO ITEM DO ARRAY
  const lastName = names.pop(); //REMOVE E TAMBEM RETORNAR O ITEM REMOVIDO
  const firstName = names.shift(); //REMOVE O PRIMEIRO ITEM DO ARRAY

  //VERIFICAR
  console.log(names, "Ultimo Item Removido:", lastName);
  console.log("Primeiro Item Removido:", firstName);
}

// === Arquivo: Atribuição.js ===
{
  //OPERADORES DE ATRIBUIÇÃO
  /*

=> = Atribuição Simples
=> += Adição Combinada
=> -= Subtração Combinada
=> *= Multiplicação Combinada
=> /= Divisão Combinada

*/
}

// === Arquivo: Bibliotecas.js ===
{
  //BIBLIOTECAS
  //npmjs.com
  //npm install chalk
  //import chalk from "chalk";
  //import { intro, text, outro } from "@clack/prompts";

  console.log(chalk.blue.underline("Sucess!"));

  async function main() {
    intro(chalk.green("Bem Vindo ao Programa"));
    const name = await text({ message: "Qual e o seu Nome?: " });
    outro(`Olá ${name}`);
  }
  main();

  //REMOVER UMA DEPENDENCIA
  //npm remove chalk //EX
}

// === Arquivo: Comparação.js ===
{
  //OPERADORES DE COMPARAÇÃO
  /*

=> > Maior Que
=> < Menor Que
=> >= Maior ou Igual a
=> <= Menor ou Igual a

=> == Igual a
=> === Estritamente Igual a (Compara o Valor e o Tipo)
=> != Difrente de 
=> !== Estritamente Diferente de

*/
}

// === Arquivo: Desestruturação.js ===
{
  // 🪓 DESESTRUTURAÇÃO

  function main() {
    const person = {
      name: "Gustavo",
      age: 22,
      isProgrammer: true,
    };

    //const name = person.name; //FORMA DIFÍCIL
    const { name, age, isProgrammer } = person; //FORMA FÁCIL
    //console.log(name, age, isProgrammer);
  }
  main();

  function arrayColors() {
    const colors = ["Verde", "Amarelo", "Azul", "Lilas", "Verde"];
    const [firstColor, secondColor] = colors;
    console.log(firstColor, secondColor);
  }
  arrayColors();

  function mainPlayer() {
    const player = {
      nickname: "Rincko",
      health: 20,
      inventory: {
        items: ["sword", "shield", "bow"],
        potions: [
          { type: "regeneration", duration: 8 },
          { type: "defense", duration: 8 },
        ],
      },
    };

    const { nickname: nick, health } = player; //DESESTRUTURAR E RENOMEAR
    /*const {
    inventory: { items, potions },
  } = player;*/ //MAIS COMPLICADA SE TIVER POUCOS ITENS

    //const { inventory } = player; //PEGA O INVENTÁRIO COMPLETO
    //const { items, potions } = inventory; //PEGA ITENS ESPECIFICOS DENTRO DO INVENTÁRIO

    const {
      inventory: { potions },
    } = player;
    const [{ type, duration }, { duration: secondDuration, type: secondType }] =
      potions;

    console.log(type, duration);
    console.log(secondDuration, secondType);

    const types = player.inventory.potions[0].type; //ANTIGO
    console.log(type, duration);
  }
  mainPlayer();
}

// === Arquivo: Emojis.js ===
{
  const catEmoji = "🐈";

  //module.exports = { catEmoji };

  //export const dogEmoji = "🐶";
}

// === Arquivo: Escopos.js ===
{
  //🌍 ESCOPOS
  //⬇️ BLOCO, FUNÇÃO, LÉXICO

  if (true) {
    const myName = "Gustavo";
    let myAge = 22;

    var escopoGlobal = "Aqui o Escopo fica Global";
  }
  //console.log(myName);
  //console.log(myAge);
  console.log(escopoGlobal); //AQUI NÃO DA ERRO DE ESCOPO
  //POREM NÃO E O IDEAL USAR O VAR, O CÓDIGO FICA BANGUNÇADO!

  //CONST E LET SÓ PODEM SER ACESSADAS NO ESCOPO ONDE FORAM CRIADAS

  //ESCOPO DE FUNÇÃO

  function main() {
    var mytwoName = "Gustavo"; //SE O VAR CRIADO DENTRO DE UMA FUNÇÃO SEGUE AS MESMAS REGRAS DO CONST LET
  }
  //console.log(mytwoName); //ERROR

  //ESCOPO LÉXICO

  const myLex = "Gustavo";
  function mainLex() {
    console.log(myLex);
  }
  mainLex();

  const nameGlobal = "Gustavo";
  function globalName() {
    const nameGlobal = "Daniel";
    function secondary() {
      console.log(nameGlobal);
    }
    secondary();
  }
  globalName();
}

// === Arquivo: ForEach.js ===
{
  //FOR EACH LAÇO DE REPETIÇÃO
  //ESPECIFICO PARA PASSAR POR ARRAYS

  /*
ForEach(item, index, array)

  item) - Dados/Informações contidos na posição atual do...
  index) - Número da Posição. Sempre começando em 0.
  array) - Retorna o Array completo

*/

  const users = [
    { name: "Rodolfo", age: 33, contact: "(19) 94343-3434" },
    { name: "Paulo", age: 21, contact: "(12) 93443-3434" },
    { name: "Aline", age: 40, contact: "(13) 94566-3434" },
    { name: "Maria", age: 12, contact: "(14) 94343-3476" },
  ];

  users.forEach((item, index, array) => {
    //console.log(item);
    //console.log(index);
    //console.log(array);

    if (item.age < 18) {
      console.log(
        `O(a) Cliente ${item.name}, Posição ${index + 1} é menor de idade!`,
      );
    }
  });
}

// === Arquivo: For.js ===
{
  /*
for ([inicialização]; [condição]; [expressão final];){
    código aqui
}
*/

  // I = 0, ENQUANTO MENOR QUE 6, I += 1
  for (let i = 0; i < 6; i++) {
    //console.log(i);
  }

  const arraySimples = ["Gustavo", "Eduardo", "Gabriel", "João", "Eduardo"];

  for (let i = 0; i < 10; i++) {
    if (i <= arraySimples.length - 1) {
      //console.log(` ${i + 1}. ${arraySimples[i]}`);
    }
  }
  //console.log("Fim da Lista");

  const users = ["Gustavo", "Ana", "Joana", "Maria"];

  for (let i = 0; i < users.length; i++) {
    //console.log(`${i + 1}. ${users[i]}`);
  }

  setTimeout(() => {
    //console.log("Macaco");
  }, 3000);

  for (let i = 0; i < 3; i++) {
    setTimeout((i) => {
      i = "macaco";
      //console.log(i);
    }, 3000);
  }

  /*FOR OF*/ //MAIS SIMPLES! PARA ARRAYS

  const usuarios = ["Gustavo", "Ana", "Joana", "Maria"];

  //Para cada (name) de (usuarios)
  for (let name of usuarios) {
    //console.log(`$ ${name}`);
  }

  /*FOR IN*/ // USADO PARA ITERAR OBJETOS

  const listaUsuarios = {
    idade: 21,
    nome: "Gustavo",
    altura: 180,
  };
  //console.log(listaUsuarios.name);
  //console.log(listaUsuarios["name"]);
  //console.log(listaUsuarios[0].nome;);

  for (let key in listaUsuarios) {
    //console.log(listaUsuarios[key]); MOSTRA O VALOR
    //console.log(listaUsuarios[key]); MOSTRA A CHAVE
    console.log(
      `${key.charAt(0).toUpperCase() + key.slice(1)}: ${listaUsuarios[key]}`,
      //CARACTER NA POSIÇÃO!         //CORTAR, FATIAR!
    );
  }

  /*FOR EACH*/ //
}

// === Arquivo: Funções.js ===
{
  // Evitar repetir Instruções
  //Function identificar(parametros){}

  function greet(name) {
    //console.log("Sejá Bem Vindo(a)", name);
  }
  greet("Gustavo");

  function sum(a, b) {
    return a + b;
  }
  const result = sum(2, 3);
  //console.log(result);

  //FUNÇÕES ONDE ELA ESTIVER ELA VOLTA PARA O TOPO DO CÓDIGO
  //COMPORTAMENTO HOISTING

  //ARROW FUNCTION

  const somar = (a, b) => {
    return a + b;
  };
  //console.log(somar(1, 2));
  //ARROW FUNCTION AJUDAR ECONOMIZAR LINHAS EX:

  const somarNumeros = (a, b) => a + b;
  //console.log(somarNumeros(5, 2));

  function factorial(number) {
    let fator = 1;
    for (let i = 1; i <= number; i++) {
      fator *= i;
    }
    return fator;
  }
  //console.log(factorial(10));

  //IIFE
  //IMEDIATELY INVOKED FUNCTION EXPRESSION
  (name) => {
    console.log("Sejá bem Vindo(a)", name);
  };

  //EXECUTAR A FUNÇÃO BASTA ENVOLVELA EM PARENTESES E DEPOIS FECHAR
  ((name) => {
    //console.log("Sejá bem Vindo(a)", name);
  })("Gustavo");
  //DESTA FORMA

  //PARAMETROS OPCIONAIS

  function createTag(name, prefix, suffix) {
    if (prefix && suffix) {
      //FALSE E FALSE PULA
      return `${prefix} ${name} ${suffix}`; //BATEU NO RETURN SAÍ DA FUNÇÃO
    } else if (prefix) {
      return `${prefix} ${name}`;
    }
    return name;
  }
  const tag = createTag("Gustavo", "[Desenvolvedor]", "Dev");
  console.log(tag);

  //VALOR PADRÃO DOS PARAMETROS
  //CASO EU NÃO PASSE UM VALOR, JÁ TERÁ UM NÚMERO DEFINIDO
  const pow = (number, exponent = 2) => {
    return number ** exponent;
  };
  console.log(pow(2, 8));

  function greet2(name, log = false) {
    const text = `Seja bem vindo(a) ${name}`;
    if (log) {
      console.log(text);
      return text;
    }
  }
}

// === Arquivo: Function.js ===
{
  /*FUNÇÕES*/

  {
    //FUNÇÃO SÓ EXECUTA QUANDO VOCÊ CHAMA
    //FUNÇÃO SERVE PARA ISOLAR FUNÇÕES DENTRO DELA
    //FUNÇÃO PODE SER REUTILIZADA/CHAMADA QUANTAS VEZES QUISER

    //VOID
    function digaMeuNome() {
      //FUNÇÃO TIPO VOID, VAZIA!
      console.log("Gustavo");
    }

    //FUNÇÃO COM PARÂMETRO
    function faleUmNome(nome) {
      //FUNÇÃO TIPO VOID, VAZIA!
      console.log(nome);
    }
    //faleUmNome("Gustavo");

    //FUNÇÃO COM PARÂMETRO
    function calcular(num1, num2) {
      result = num1 + num2;
      console.log(result);
    }
    //calcular(5, 2);

    //FUNÇÃO COM RETURN
    function somar(num1, num2) {
      result = num1 + num2;
      return result;
    }
    const resultadodaSoma = somar(40, 50);
    //console.log(resultadodaSoma);

    function calcularDividas(receita, gastos, soma) {
      soma = receita - gastos;
      if (soma < 0) {
        return `Endividado seu saldo é: ${soma}`;
      } else {
        return `Sem Dívidas seu saldo é: ${soma}`;
      }
    }
    const ResultadodoCalculo = calcularDividas(2000, 2000);
    //console.log(ResultadodoCalculo);

    //ARROW FUNCTION

    const meuNome = (nome) => {
      return nome;
    };
    //console.log(meuNome("Gustavo"));
  }
}

// === Arquivo: Hello.js ===
{
  console.log("Hello World");
}

// === Arquivo: HelloWorld.js ===
{
  {
    //alert("HelloWorld");
    //console.log("HelloWorld");
  }

  //VARIÁVEIS E TIPOS DE DADOS

  {
    const variavelConst = "Não é Alterável!";
    const numberInt = 30;
    let variavelLet = "Variável Alterável";

    /*TIPOS DE DADOS*/

    const textosStrings = "Hello World";
    const stringCrase = `
  Olá Mundo para Baixo
  Com Crase e Possível
  Escrever para Baixo
  Não somente em uma
  Linha!
  ${textosStrings}
  `;

    /*NUMBERS*/

    const numero = 200 + 20 - (20 * 20) / 2;
    const numberFloat = 1.1;

    /*BOOLEAN*/

    const variavelTrue = true;
    const variavelFalse = false;

    /*OBJECT*/

    const dadosUsuario = {
      nome: "Gustavo",
      idade: "21",
      casado: false ? "Casado" : "Não Casado", //OPERADOR TERNÁRIO
    };
    //console.log(dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.casado);

    /*NULL & UNDEFINED*/

    const dadosUsuarios = {
      nome: "Gustavo",
      idade: "21",
      casado: false ? "Casado" : "Não Casado", //OPERADOR TERNÁRIO
      conjuge: null,
    };
    //console.log(dadosUsuarios.conjuge);
    //console.log(dadosUsuarios.tempo) //UNDEFINED

    /*ARRAY => MATRIZ*/

    const arrayUsuarios = [
      {
        nome: "Gustavo",
        idade: "21",
        casado: false ? "Casado" : "Não Casado", //OPERADOR TERNÁRIO
        conjuge: null,
      },
      {
        nome: "Daniel",
        idade: "22",
        casado: true ? "Casado" : "Não Casado", //OPERADOR TERNÁRIO
        conjuge: null,
      },
    ];

    const numerosNovos = [12, 13, 14, 15, 16];
    const pessoasNovas = ["João", "Maria", "Helena", "Madalena"];
    console.log(pessoasNovas[1]); //VERIFICANDO POSIÇÃO
  }

  //IF E ELSE

  {
    notaAluno = 3;
    if (notaAluno > 6) {
      console.log("Aluno Aprovado!");
    } else {
      console.log("Reprovado");
    }

    //3 = ; Comparando Valores e Tipos
    if (notaAluno === 3) {
      console.log("Valor e Tipo Compatível");
    } else {
      console.log("Valor ou Tipo não Compatível!");
    }
  }

  /*FUNÇÕES*/

  {
    //FUNÇÃO SÓ EXECUTA QUANDO VOCÊ CHAMA
    //FUNÇÃO SERVE PARA ISOLAR FUNÇÕES DENTRO DELA
    //FUNÇÃO PODE SER REUTILIZADA/CHAMADA QUANTAS VEZES QUISER

    //VOID
    function digaMeuNome() {
      //FUNÇÃO TIPO VOID, VAZIA!
      console.log("Gustavo");
    }

    //FUNÇÃO COM PARÂMETRO
    function faleUmNome(nome) {
      //FUNÇÃO TIPO VOID, VAZIA!
      console.log(nome);
    }
    //faleUmNome("Gustavo");

    //FUNÇÃO COM PARÂMETRO
    function calcular(num1, num2) {
      result = num1 + num2;
      console.log(result);
    }
    //calcular(5, 2);

    //FUNÇÃO COM RETURN
    function somar(num1, num2) {
      result = num1 + num2;
      return result;
    }
    const resultadodaSoma = somar(40, 50);
    //console.log(resultadodaSoma);

    function calcularDividas(receita, gastos, soma) {
      soma = receita - gastos;
      if (soma < 0) {
        return `Endividado seu saldo é: ${soma}`;
      } else {
        return `Sem Dívidas seu saldo é: ${soma}`;
      }
    }
    const ResultadodoCalculo = calcularDividas(2000, 2000);
    //console.log(ResultadodoCalculo);

    //ARROW FUNCTION

    const meuNome = (nome) => {
      return nome;
    };
    //console.log(meuNome("Gustavo"));
  }
}

// === Arquivo: IFElse.js ===
{
  let height = 10;

  if (height >= 9) {
    console.log("Aprovado");
  } else if (height >= 7) {
    console.log("Aprovado na Média");
  } else {
    console.log("Reprovado!");
  }

  const sideA = 3;
  const sideB = 4;
  const sideC = 5;

  if (sideA === sideB && sideB === sideC) {
    console.log("O Triangulo é Equilatero");
  } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
    console.log("O triangulo e Isósceles!");
  } else {
    console.log("O Triangulo e Escaleno");
  }

  const r1 = require("node:readline");

  const prompt = r1.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  prompt.question("Digite sua Idade", (answer) => {
    const age = Number.parseInt(answer);
    if (Number.isNaN(age)) {
      //isNan, Is Not a Number
      console.log("O que você digitou não e valido!");
    } else {
      console.log(`sua Idade é:${age}`);
    }
  });

  let bank = 3000;
  prompt.question("Digite o Valor que Deseja Transferir: ", (answer) => {
    const amount = Number.parseInt(answer);
    if (Number.isNaN(amount)) {
      console.log("Digite um valor Valido!");
    } else if (answer > bank) {
      console.log("Valor maior do que o Disponível!");
    } else if (bank <= 0) {
      console.log("Digite um Valor Positivo! ");
    } else {
      bank -= amount;
      console.log(
        `Transferência Aprovada! -${answer.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })} Saldo Atual: ${bank.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}`,
      );
    }
  });
}

// === Arquivo: Logicos.js ===
{
  //OPERADORES LÓGICOS

  /*

=> && E (And)
=> || ou (Or)
=> ! Não (Not)

*/

  console.table([["Pizza", true]]);
}

// === Arquivo: MapReduceFilter.js ===
{
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
}

// === Arquivo: Math.js ===
{
  /*
=> pow(2,2) / Potência / 2² = 4 / 
=> sqrt(25, 2) / Raiz Quadrada
=> ceil / Teto / Arredondar para cima
=> floor / Chão / Arredondar para Baixo
=> random() / Número aleatório entre 0 e 1
*/

  const potencia = Math.pow(2, 2);
  const raizQuadrada = Math.sqrt(125, 2);
  console.log(Math.ceil(raizQuadrada)); //ARREDONDAR PARA CIMA
  console.log(Math.floor(raizQuadrada)); //ARREDONDAR PARA BAIXO
  const pi = Math.PI;

  //const aleatorio = Math.random() * (max - min) + min;
  const aleatorioMax = Math.random() * (7 - 1) + 1;

  console.log(Math.floor(aleatorioMax));
}

// === Arquivo: Modulo1.js ===
{
  //MODULOS (CÓDIGOS ISOLADOS)

  function soma(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  // module.exports = {
  //   soma,
  //   sub,
  //   mult(a, b) {
  //     //CRIAR FUNÇÃO DENTRO DO OBJETO
  //     return a * b;
  //   },
  // };

  //NOVA VERSÃO DO NODE E RECOMENDADO

  //export function div(a, b) {
  return a / b;
}

//export function par(a) {
if (a % 2 == 0) {
  return "Número Par";
} else {
  return "Número Impar";
}
//}

function porcentagem(a) {
  const soma = 100 - (a / 100) * 100;
  if (isNaN(a)) {
    return "Isso não e um Número!";
  } else if (a > 100) {
    return "Digite um Número menor que 100!";
  } else {
    return `${a}% de R$100,00 = ${soma.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}`;
  }
}

//export default { porcentagem };

//}

// === Arquivo: ModuloMain.js ===
{
  //const math = require("./Modulo1"); //BIBLIOTECA INTEIRA
  //const { soma, sub, mult } = require("./Modulo1"); //DESESTRUTURAÇÃO
  //const { catEmoji } = require("./Constantes/Emojis");

  //NOVA VERSÃO DO NODE E RECOMENDADO

  //import { div, par } from "./Modulo1.js";
  //import { dogEmoji } from "./Constantes/Emojis.js";
  //console.log(math.soma(4, 5));
  //console.log(soma(5, 5));
  //console.log(sub(4, 2));
  //console.log(mult(5, 5));
  //console.log(catEmoji);

  console.log(div(10, 2));
  console.log(par(5));
  console.log(dogEmoji);

  //IMPORT USANDO DEFAULT
  //import Modulo1 from "./Modulo1.js";
  console.log(Modulo1.porcentagem(10));

  //IMPORT DIRETO

  //import "./Hello.js";
}

// === Arquivo: Objetos.js ===
{
  //OBJETOS SÃO ESTRUTURAS DE DADOS
  //POREM OBJETOS PODEM SE DEFINIR PROPRIEDADES E METODOS

  const player = {
    nickname: "Gustavo",
    health: 20,
    isDead: false,
    present() {
      //POSSO ABRIR UM BLOCO DE FUNÇÃO DENTRO DO PRÓPRIO OBJETO
      console.log("Meu Nick é:", this.nickname); //THIS E REFERÊNCIA A ELE MESMO
    },
  };

  //player.name = "Gustavo2"; //POSSO ATRIBUIR DADOS DEPOIS AO OBJETO
  //console.log(player);
  //console.log(player.nickname); //ACESSAR DADOS DO OBJETO

  //player.present();
  //console.log(player["health"]);

  for (const prop in player) {
    // console.log(prop);
  }

  const ramMemory = {};

  const computer = {
    motherboard: "B460M",
    videoCard: "RTX 2070",
    cpu: "Intel I7 10500H",
    font: {
      name: "XPG Core Reactor",
      watts: 800,
    },
    case: {
      name: "Draco GameMax",
      color: "Black",
    },
    ram: [
      { name: "XPG", size: 16000 },
      { name: "XPG", size: 16000 },
    ],
  };

  console.log(computer.font.watts);
  console.log(computer.case.color);
  console.log(computer.ram);

  const readLine = require("node:readline");

  const prompt = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  prompt.question();
}

// === Arquivo: Operadores.js ===
{
  // => Operadores Aritméticos
  /*

=> + Adição
=> - Subtração
=> * Multiplicação
=> / Divisão
=> % Modulo (Resto da Divisão)

*/
}

// === Arquivo: Switch.js ===
{
  /*
ESTRUTURA CONDICIONAL SWITCH

switch (valor) {
    case "esperado":{
    ...
    break;    
    }
}
*/
  const animal = "gato";
  //USADO QUANDO ESPERAMOS DIVERSOS VALORES DIFERENTES
  // SE NÃO USARIAMOS O IF (ANIMAL == "gato")

  switch (animal) {
    case "gato": {
      console.log("Miau");
      break;
    }
    case "cachorro": {
      console.log("Auau");
      break;
    }
    case "pato": {
      console.log("Qua Qua Qua");
      break;
    }
  }

  const stuff = "queijo";

  switch (stuff) {
    case "gato":
    case "pato":
    case "cachorro": {
      console.log("Animal!");
      break;
    }

    case "pastel":
    case "hamburguer":
    case "arroz": {
      console.log("Comida!");
      break;
    }
    default: {
      console.log("Não Listado na Variavel");
    }
  }

  const r1 = require("node:readline");
  const prompt = r1.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log("Bem vindo ao programa");
  console.log("[1] 📅 Data atual");
  console.log("[2] 🕒 Horário atual");
  console.log("[3] 🦓 Ver animais");
  console.log("[4] 🍕 Ver comidas");
  console.log("[5] 💻 Ver Linguagens");
  console.log("[0] ❌ Sair");

  prompt.question("> Selecione o que desejar fazer", (answer) => {
    switch (
      answer //AVALIE "OLHE PARA"
    ) {
      case "1": {
        //CASO SEJA
        const date = new Date();
        const day = date.getDay();
        const month = date.getMonth() + 1; //JAVASCRIPT AS COISAS COMEÇAM EM 0, NÃO EXISTE MÊS 0 ENTÃO COLOCA +1
        const year = date.getFullYear();
        console.log(`Hoje é dia ${day}/${month}/${year}`);
        break;
      }
      case "2": {
        const hours = new Date();
        const hour = hours.getHours();
        const minutes = hours.getMinutes();
        const seconds = hours.getSeconds();
        console.log(`Agora são ${hour}:${minutes}:${seconds} `);
        break; //PARE
      }
      case "3": {
        console.log("🐔 Galinha");
        console.log("🐄 Vaca");
        console.log("🐈 Gato");
        console.log("🐶 Cachorro");
        break;
      }
      case "4": {
        console.log("🍕 Pizza");
        console.log("🍰 Bolo");
        console.log("🍜 Macarrão");
        console.log("🍧 Sorvete");
        break;
      }
      case "5": {
        console.log("Javascript");
        console.log("Java");
        console.log("C++");
        console.log("Rust");
        break;
      }
      default: {
        //SE NÃO FOR NENHUM DESSES // ELSE
        console.log("Programa Encerrando...");
      }
    }
    prompt.close();
  });
}

// === Arquivo: Ternario.js ===
{
  //OPERADORES TERNÁRIO

  /*
=> (Expressão) ? (Se Verdadeiro) : (Se Falso)
*/

  const number = 5;
  console.log(number % 2 === 0 ? "Par" : "Impar");

  const age = 20;
  isGreater = age >= 18 ? "De Maior" : "De Menor";
  console.log(isGreater);

  const learnedJS = true;
  const withVideos = true;

  const verify = () => {
    return learnedJS && withVideos
      ? "Aprendeu Javascript com Vídeos"
      : "Aprendeu Javascript sem Vídeos";
  };
  //console.log(verify());

  const otherVerify = () => {
    return learnedJS && withVideos
      ? "Apreneu Javascript com Vídeos"
      : withVideos
        ? "Aprendeu Javascript com Vídeos"
        : "Não Aprendeu Javascript com Vídeo";
  };

  const bank = 500;
  const transferValue = 450;

  const transferBank = () => {
    return bank >= transferBank
      ? "Transferência não pode ser feita!"
      : "Transferência pode ser Feita!";
  };
  //console.log(transferBank());

  const bankerTransfer = (saldo, valor) => {
    return saldo > valor
      ? "TransfeRência Autorizada"
      : "Transferência NÃO Autorizada!";
  };
  console.log(bankerTransfer(200, 400));

  const nome = "Gustavo";
  const isAdult = true;
  console.log(`${nome} ${isAdult ? "Não" : ""} é criança`);

  const hours = 1;

  console.log(
    "Está dé",
    hours >= 0 && hours < 6
      ? "Madrugada"
      : hours >= 6 && hours < 12
        ? "Manhã"
        : hours >= 12 && hours < 18
          ? "Tarde"
          : "Noite",
  );
}

// === Arquivo: Variaveis.js ===
{
  //VARIÁVEIS E TIPOS DE DADOS
  const variavelConst = "Não é Alterável!";
  const numberInt = 30;
  let variavelLet = "Variável Alterável";

  /*TIPOS DE DADOS*/

  const textosStrings = "Hello World";
  const stringCrase = `
  Olá Mundo para Baixo
  Com Crase e Possível
  Escrever para Baixo
  Não somente em uma
  Linha!
  ${textosStrings}
  `;

  /*NUMBERS*/

  const numero = 200 + 20 - (20 * 20) / 2;
  const numberFloat = 1.1;

  /*BOOLEAN*/

  const variavelTrue = true;
  const variavelFalse = false;

  /*OBJECT*/

  const dadosUsuario = {
    nome: "Gustavo",
    idade: "21",
    casado: false ? "Casado" : "Não Casado", //OPERADOR TERNÁRIO
  };
  //console.log(dadosUsuario.nome, dadosUsuario.idade, dadosUsuario.casado);

  /*NULL & UNDEFINED*/

  const dadosUsuarios = {
    nome: "Gustavo",
    idade: "21",
    casado: false ? "Casado" : "Não Casado", //OPERADOR TERNÁRIO
    conjuge: null,
  };
  //console.log(dadosUsuarios.conjuge);
  //console.log(dadosUsuarios.tempo) //UNDEFINED

  /*ARRAY => MATRIZ*/

  const arrayUsuarios = [
    {
      nome: "Gustavo",
      idade: "21",
      casado: false ? "Casado" : "Não Casado", //OPERADOR TERNÁRIO
      conjuge: null,
    },
    {
      nome: "Daniel",
      idade: "22",
      casado: true ? "Casado" : "Não Casado", //OPERADOR TERNÁRIO
      conjuge: null,
    },
  ];

  const numerosNovos = [12, 13, 14, 15, 16];
  const pessoasNovas = ["João", "Maria", "Helena", "Madalena"];
  console.log(pessoasNovas[1]); //VERIFICANDO POSIÇÃO

  //IF E ELSE

  notaAluno = 3;
  if (notaAluno > 6) {
    console.log("Aluno Aprovado!");
  } else {
    console.log("Reprovado");
  }

  //3 = ; Comparando Valores e Tipos
  if (notaAluno === 3) {
    console.log("Valor e Tipo Compatível");
  } else {
    console.log("Valor ou Tipo não Compatível!");
  }
}

// === Arquivo: While.js ===
{
  /*
while(condição)
*/

  let count = 0;
  while (count <= 10) {
    console.log(count);
    count++;
  }

  let countP = 10;
  while (countP > 0) {
    console.log(countP);
    countP--;
  }

  const x = 0;
  let playerX = 20;

  while (playerX > x) {
    console.log("🚶".padStart(playerX, "."));
    playerX--;
  }

  let current;
  let times = 0;
  const expected = 8;

  while (current !== expected) {
    current = Math.floor(Math.random() * (20 + 1));
    console.log(current);
    times++;
  }
  console.log(`Foram ${times} Tentativas Até Chegar no ${expected}`);

  //CONTINUE // VOLTA PARA O TOPO DO LOOP
  //BREAK // ENECERRA O LOOP
}
