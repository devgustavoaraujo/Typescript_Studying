//BOOLEANS

const isOpen = true;

if (!isOpen) {
  //NOT IS OPEN
  console.log("A porta está Aberta! ");
}

// TRUTHY // VERDADEIRO!
// QUALQUER NÚMERO QUE NÃO SEJA 0: 22-54-1-31-856-3-2
// STRINGS: "Gustavo" "A"
// true
// { } {name: "Gustavo"} {age: 22}

// Falsy // FALSO!
// False
// 0, -0
// "" //STRING VAZIA
// null undefined
// NaN

let result = "Gustavo";
const convertNumber = parseInt(result); //FALSE NaN

if (result) {
  console.log("O Resultado é: ", result);
} else {
  console.log("Falso!");
}

//DESCOBRI VALOR BOLEANO DA VARIAVEL
// UM ! NEGA A VARIAVEL (NOT),DOIS !! NEGA O VALOR BOLEANO DA VARIAVEL
// E RETORNA O VALOR BOLEANO DAQUELA VARIAVEL

const trueorFalse = "Gustavo";
console.log(!!trueorFalse);

// OU

console.log(Boolean(trueorFalse));
