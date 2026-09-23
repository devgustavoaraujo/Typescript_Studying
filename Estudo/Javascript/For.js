/*
for ([inicialização]; [condição]; [expressão final];){
    código aqui
}
*/

// I = 0, ENQUANTO MENOR QUE 6, I += 1
for (let i = 0; i < 6; i++) {
  //console.log(i);
}

const arraySimples = ["Gustavo", "Eduardo", "Gabriel", "João", "Eduardo"];

for (let i = 0; i < 10; i++) {
  if (i <= arraySimples.length - 1) {
    //console.log(` ${i + 1}. ${arraySimples[i]}`);
  }
}
//console.log("Fim da Lista");

const users = ["Gustavo", "Ana", "Joana", "Maria"];

for (let i = 0; i < users.length; i++) {
  console.log(`${i + 1}. ${users[i]}`);
}

setTimeout(() => {
  //console.log("Macaco");
}, 3000);

for (let i = 0; i < 3; i++) {
  setTimeout((i) => {
    i = "macaco";
    //console.log(i);
  }, 3000);
}
