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
