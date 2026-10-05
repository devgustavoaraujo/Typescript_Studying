//MODULO 1 INTRODUÇÃO AO TYPESCRIPT
{
  const mensagem = "Hello World";
  //console.log(mensagem)
}

//MODULO 2 {TIPOS RESTRITOS}
{
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==      => TYPE ANNOTATIONS <=     ==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  let nome: string = "Maria";
  let nomeSecundario = "Maria";
  let idade: number = 20;
  let num: bigint;
  let maiorIdade: boolean = true;
  let altura: void;

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==        => ARRAYS <=              ==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  let notas: number[] = [7, 10, 9, 5];
  let animais: string[] = ["Gato", "Cachorro", "Leão"];
  let permitido: boolean[] = [true, false, true, false];
  //console.log(animais)

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==      => TIPOS NUMBER & BIGINT <=       ==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  let num1: number = 14.0;
  let num2: number = 0x37cf; //HEXADECIMAL
  let num3: number = 0o377; //OCTAL
  let num4: number = 0b111001; //BINÁRIO

  let big1: bigint = 32126545132131251n;
  let big2: bigint = 3212654513213n;
  let big3: bigint = 0b1000000000000000000000000000011n;
  let big4: bigint = 0o401455465651165165121n;

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==        => TIPO STRING <=         ==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  let nomeVariavel: string = "Gustavo";
  const animal: string = "Panda";
  const carroFerrari: string = "Ferrari";
  let detalhesString: string = `Pessoa: ${nomeVariavel} Animal: ${animal} Carro: ${carroFerrari}`;
  //DEMONSTRAÇÃO TIPOS NUMBER & BIGINT
  //console.log(typeof num1); //MOSTRA O TIPO DO OBJETO //TYPEOF(NUMBER)

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==       => ARRAY - USO DE COLCHETES <=       -==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  let frutas: [string, string] = ["Maça", "Banana"];
  let frutasOrga: string[] = ["Maça", "Banana", "Uva"];
  //console.log(frutas[0]);

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==       => ARRAY - ARRAY OBJECT (OBJETO ARRAY) <=       ==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  let frutas2: Array<string> = ["Maça", "Banana", "Uva"];

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==                  => ADICIONAR STRINGS: PUSH <=        ==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  let idiomas: Array<string> = ["PT", "EN", "FR"];
  idiomas.push("MD");
  idiomas.push("IT");
  //console.log(idiomas);

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==             => TAMANHO ARRAY: MÉTODO LENGHT <=        ==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  let idiomas2: Array<string> = ["PT", "EN", "FR"];
  //console.log(idiomas2.length);

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==                  =>  ARRAY: SPREAD OPERATOR <=        ==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  let listaNumeros = [1, 2, 3, 4, 5];
  listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
  //console.log(listaNumeros);

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==               =>  ARRAY: COM LAÇO DE ITERAÇÃO <=      ==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  let linguagensArray: string[] = new Array(
    "Java",
    "Python",
    "PHP",
    "C++",
    "C#",
  );

  function funcaoLinguagens(linguagens: string[]) {
    for (let i = 0; i < linguagens.length; i++) {
      console.log(linguagensArray[i]);
    }
  }

  funcaoLinguagens(linguagensArray);

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==                       => Tipo Tupla <=                ==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  // => Exemplo 01 - Uso Simples de Tuplas em Typescript
  let pessoa2: [string, string, number] = ["Gustavo", "SP", 21];
  pessoa2 = ["Gustavo", "São Paulo", 180];
  //console.log(pessoa2)

  // => Exemplo 02 - Acessando o valor da Tupla
  let pessoa3: [string, string, number];
  pessoa3 = ["Gustavo", "São Paulo", 180];
  //console.log(pessoa3[0])

  // => Exemplo 03 - Outra forma de usar tuplas em Typescript (com Labels)

  let dadosPessoa: [nome: string, posicao: string, idade: number] = [
    "Gustavo",
    "São Paulo",
    180,
  ];
  //console.log(dadosPessoa)

  //Exemplo 04 - Usando Tuplas com Spread Operator

  let listaFrutas: [string, ...string[]] = ["Maça", "Banana", "Uva", "Laranja"];
  //console.log(...listaFrutas)

  //EXISTEM DIVERSOS TIPOS DE FRUTAS, USA ...STRING PARA QUANDO NÃO SABE A QUANTIDADE
  //..STRING JÁ INDICA QUE E UMA SEQUÊNCIA DE STRINGS

  // => Exemplo 05 - Lista Heterogênea de Tupla

  let totalFrutas: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
  //console.log(totalFrutas)

  // => Exemplo 06 - Uso de função com Tuplas

  function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
  }
  let resultado = listarPessoas(["Gustavo", "Matheus"], [32, 22]);
  //console.log(resultado)

  // => Exemplo 07 - Labeled Tuples com Spread Operator em uma Função
  type Nome =
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeMeio: string, sobrenome: string];

  function criarPessoa(...nome: Nome) {
    return [...nome];
  }
  //console.log(criarPessoa("Gustavo", "Santana", "Araujo"))

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==                       => Tipo Enum <=                ==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  //ENUM TIPO NÚMERICO (RECOMENDAVEL)
  enum Idiomas {
    Portugues,
    Espanhol,
    Ingles,
    Frances,
  }
  //console.log(Idiomas)

  //ENUM TIPO STRING (NÃO RECOMENDAVEL)
  enum Dias {
    Segunda = "Seg",
    Terca = "Ter",
    Quarta = "Qua",
    Quinta = "Quin",
    Sexta = "Sex",
    Sabado = "Sab",
    Domingo = "Dom",
  }
  //console.log(Dias)
  //console.log(Dias.Segunda)

  // => Exemplo 02: Usando Enum com Const

  const enum Comida {
    Hamburguer,
    Massa,
    Pizza,
    Sushi,
    Churrasco,
  }

  function comida(c: Comida) {
    return "Comidas muito Apetitosas!";
  }
  //console.log(comida(Comida.Pizza))

  // => Exemplo 03: Quando usar o Enum?

  enum Tarefa {
    Todo,
    Progress,
    Done,
  }
  const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: "Parabéns, Tarefa Concluida com Sucesso!",
  };

  if (concluidaTarefa.status === Tarefa.Done) {
    //console.log("Enviar E-mail: Tarefa Concluída!")
  }

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==                       => Tipo Any <=                  ==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  const a: any = 888;
  const b: any = ["Gustavo"];
  const result = a + b;
  //console.log(result)

  // => Exemplo 02: Quando o Tipo ANY é Inferido Implicitamente

  let frase;
  frase = "Olá Mundo";
  //console.log(frase)

  // => Exemplo 03: Quando devemos usar o Tipo Any?

  const formulario: { [campoFormulario: string]: any } = {
    nome: "Gustavo",
    Sobrenome: "Santana",
    Idade: "21",
  };
  //console.log(formulario)

  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==                       => Tipo Unknown <=              ==-==-==-==-==-==-==-==-==-==- //
  // -==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==-==- //

  //DIFERENÇA PARA O ANY:
  //ANY: NÃO VAI VERIFICAR O TIPO DA VARIÁVEL OU FUNÇÃO, OCASIONANDO ERROS.
  //UNKNOWN: VAI FAZER UMA VERIFICAÇÃO ANTES DE REALIZAR UMA OPERAÇÃO
  //USAR MAIS UNKNOWN AO INVÉS DO ANY

  //Exemplo 01: Tipo Unknown

  let valorVariavel: unknown;
  valorVariavel = true; //SEM ERRO
  valorVariavel = 123; //SEM ERRO
  valorVariavel = []; //SEM ERRO
  valorVariavel = "Olá, tudo bem?"; //SEM ERRO

  //Exemplo 02: Erro Tentar Atribuir Valor do Tipo Unknown em outros Tipos!

  //Exemplo 03: => Diferença entre "Any" e o Unknown

  let algumacoisaAny: any;
  let algumacoisaUnknown: unknown;

  //TO FIXED (FORMATA PARA DUAS CASAS DECIMAIS, OU PARA UMA CASA DECIMAL)

  console.log(algumacoisaAny.toFixed(2)); //ERRO
  //console.log(algumacoisaUnknown.toFixed(2)); //FALTA DECLARAR, RESOLVE USANDO UMA VERIFICAÇÃO

  if (typeof algumacoisaUnknown === "number") {
    console.log(algumacoisaUnknown.toFixed(2)); //FORÇA FAZER A VERIFICAÇÃO PARA USAR TOFIXED
  }
}
