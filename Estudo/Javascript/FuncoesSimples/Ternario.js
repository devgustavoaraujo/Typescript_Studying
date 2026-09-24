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
