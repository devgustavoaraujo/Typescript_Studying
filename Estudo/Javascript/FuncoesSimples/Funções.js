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
  if (prefix) {
  }
}

createTag("Gustavo");
