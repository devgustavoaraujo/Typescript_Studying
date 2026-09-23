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
