//MODULO 1 INTRODUÇÃO AO TYPESCRIPT
{
  const mensagem = "Hello World";
  //console.log(mensagem)
}

//MODULO 2 {TIPOS RESTRITOS}
{
  //TYPE ANNOTATIONS
  let nome: string = "Maria";
  let nomeSecundario = "Maria";
  let idade: number = 20;
  let num: bigint;
  let maiorIdade: boolean = true;
  let altura: void;

  //ARRAYS
  let notas: number[] = [7, 10, 9, 5];
  let animais: string[] = ["Gato", "Cachorro", "Leão"];
  let permitido: boolean[] = [true, false, true, false];
  //console.log(animais)

  //TIPOS NUMBER & BIGINT
  let num1: number = 14.0;
  let num2: number = 0x37cf; //HEXADECIMAL
  let num3: number = 0o377; //OCTAL
  let num4: number = 0b111001; //BINÁRIO

  let big1: bigint = 32126545132131251n;
  let big2: bigint = 3212654513213n;
  let big3: bigint = 0b1000000000000000000000000000011n;
  let big4: bigint = 0o401455465651165165121n;

  //TIPO STRING
  let nomeVariavel: string = "Gustavo";
  const animal: string = "Panda";
  const carroFerrari: string = "Ferrari";
  let detalhesString: string = `Pessoa: ${nomeVariavel} Animal: ${animal} Carro: ${carroFerrari}`;
  //DEMONSTRAÇÃO TIPOS NUMBER & BIGINT
  //console.log(typeof num1); //MOSTRA O TIPO DO OBJETO //TYPEOF(NUMBER)

  //ARRAY

  let frutas: [string, string] = ["Maça", "Banana"];
  let frutasOrga: string[] = ["Maça", "Banana", "Uva"];
  let frutas2: Array<string> = ["Maça", "Banana", "Uva"];
  console.log(frutas[0]);

  //OBJETOS
  let carro: {
    nome: string;
    ano: number;
    preco: number;
  };

  carro = { nome: "Toyota", ano: 2019, preco: 80000 };
  //console.log(carro)

  //FUNCTIONS
  function multiplicarNumeros(num1: number, num2: number) {
    return num1 * num2;
  }
  //console.log(multiplicarNumeros(2, 5))

  const exibirMensagem = (): void => {
    console.log("Olá, mundo!");
  };
  //exibirMensagem()

  //TUPLAS
  let pessoa: [string, number] = ["Gustavo", 30];
  let profissao: [string, number, string, number] = [
    "Gustavo",
    21,
    "Maria",
    22,
  ];

  //ENUMS
  enum Cor {
    Vermelho,
    Azul,
  }
}

//MODULO 3

{
  let concluido: boolean = false;
  if (!concluido) {
    //!atrás da Chama e o NOT, Não Concluido Faça!
    //console.log("Tarefa foi Concluida!")
  } else {
    //console.log("Tarefa não Concluida")
  }

  let permissao: boolean = true;
  if (!permissao) {
    //!NOT
    //console.log("Você não tem Permissão para Dirigir!")
  } else {
    //console.log("Você tem Permissão para Dirigir!")
  }
}
