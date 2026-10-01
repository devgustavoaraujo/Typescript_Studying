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
