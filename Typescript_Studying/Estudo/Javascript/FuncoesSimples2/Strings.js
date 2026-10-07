//Strings
// '', "", ``

const myName = "Gustavo";
const templateString = `Olá ${myName}`;

const objeto = {
  name: "Gustavo",
};

const jsonString = `Objeto: ${JSON.stringify(objeto)}`; //RETORNA TODO OBJETO

//CONCATENAÇÃO
const show = "Sejá Bem Vindo" + myName;

const nomeCompleto = "Gustavo Santana";
console.log(`Nome Minusculo: ${myName.toLowerCase()}`);
console.log(`Nome Maiusculo: ${myName.toUpperCase()}`);
console.log(`O Nome Tem a Letra 'U': ${myName.includes("u")}`);
console.log(`O Nome Começa a Letra com 'U': ${myName.startsWith("u")}`);
console.log(`O Nome Termina com a Letra 'U': ${myName.endsWith("u")}`);

console.log(`Nome Fatiado. Inicio, Fim:  ${nomeCompleto.slice(0, 7)}`);
console.log(`Substituir um Dado por Outro: ${nomeCompleto.replace("Santana", "Araujo")}`);
console.log(`Repetir X Vezes o Dado: ${nomeCompleto.repeat(5)}`);

const welcome = "Olá-Gustavo-Santana-Araujo";

const chars = nomeCompleto.split("");
console.log(`Transforma uma String em um Array: ${chars}`);

const charsEspaços = welcome.split("-");
console.log(`Separa o Array por - No Texto: ${charsEspaços}`);

console.log(`${charsEspaços.join(">")}`); //TRANSFORMA EM UMA STRING NOVAMENTE

//SPLIT = SEPARAR
//JOIN = JUNTAR

const olaPessoa = "Olá Gustavo, \nSeja bem Vindo!";
console.log(olaPessoa);
console.log(`Tab da um Espaço: Olá Gustavo, \tSeja Bem Vindo!`); //TAB DA UM ESPAÇO
console.log("Remove: Olá Gustavo, \rSeja Bem Vindo!"); //TAB DA UM ESPAÇO

const aspasString = 'Olá Gustavo, "Seja bem Vindo"'; //OU \"
console.log(aspasString);
