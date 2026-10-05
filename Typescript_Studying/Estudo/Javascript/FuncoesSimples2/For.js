//Progressiva
for (let i = 1; i <= 10; i++) {
  //console.log(i);
}

//Regressiva
for (let i = 10; i > 0; i--) {
  //console.log(i);
}

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  //setTimeout(() => console.log(i), 400);
}

const voidNumbers = [];

for (let i = 1; i <= 10; i++) {
  voidNumbers.push(i);
}
//console.log(voidNumbers);

const fruits = ["Maça", "Banana", "Laranja", "Uva"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}. ${fruits[i]}`);
}

const text = "Olá mundo, estudando bastante até minha primeira vaga";
const letter = "a";
let times = 0;

for (const char of text.toLowerCase()) {
  char === letter ? times++ : "";
}
console.log(times);

const tabu = 5;
console.log(`Tabuada do ${tabu}`);
for (let i = 0; i <= 10; i++) {
  console.log(`${tabu} x ${i} = ${tabu * i}`);
}
//OU

const r1 = require("node:readline");

const prompt = r1.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question("Qual número deseja ver a tabuada? ", (answer) => {
  const number = Number.parseInt(answer);

  if (Number.isNaN(number)) {
    console.log("❌ O número digitado é inválido!");
  } else {
    console.log(`A tabuada do ${number} é: `);
    for (let i = 1; i <= 10; i++) {
      console.log(`${i} x ${number} = ${i * number}`);
    }
  }
  prompt.close();
});
