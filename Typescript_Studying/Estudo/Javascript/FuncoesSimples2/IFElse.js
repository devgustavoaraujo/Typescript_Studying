let height = 10;

if (height >= 9) {
  console.log("Aprovado");
} else if (height >= 7) {
  console.log("Aprovado na Média");
} else {
  console.log("Reprovado!");
}

const sideA = 3;
const sideB = 4;
const sideC = 5;

if (sideA === sideB && sideB === sideC) {
  console.log("O Triangulo é Equilatero");
} else if (sideA === sideB || sideB === sideC || sideA === sideC) {
  console.log("O triangulo e Isósceles!");
} else {
  console.log("O Triangulo e Escaleno");
}

const r1 = require("node:readline");

const prompt = r1.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question("Digite sua Idade", (answer) => {
  const age = Number.parseInt(answer);
  if (Number.isNaN(age)) {
    //isNan, Is Not a Number
    console.log("O que você digitou não e valido!");
  } else {
    console.log(`sua Idade é:${age}`);
  }
});

let bank = 3000;
prompt.question("Digite o Valor que Deseja Transferir: ", (answer) => {
  const amount = Number.parseInt(answer);
  if (Number.isNaN(amount)) {
    console.log("Digite um valor Valido!");
  } else if (answer > bank) {
    console.log("Valor maior do que o Disponível!");
  } else if (bank <= 0) {
    console.log("Digite um Valor Positivo! ");
  } else {
    bank -= amount;
    console.log(
      `Transferência Aprovada! -${answer.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })} Saldo Atual: ${bank.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      })}`,
    );
  }
});
