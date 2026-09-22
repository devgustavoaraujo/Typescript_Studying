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
