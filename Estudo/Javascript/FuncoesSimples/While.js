/*
while(condição)
*/

let count = 0;
while (count <= 10) {
  console.log(count);
  count++;
}

let countP = 10;
while (countP > 0) {
  console.log(countP);
  countP--;
}

const x = 0;
let playerX = 20;

while (playerX > x) {
  console.log("🚶".padStart(playerX, "."));
  playerX--;
}

let current;
let times = 0;
const expected = 8;

while (current !== expected) {
  current = Math.floor(Math.random() * (20 + 1));
  console.log(current);
  times++;
}
console.log(`Foram ${times} Tentativas Até Chegar no ${expected}`);

//CONTINUE // VOLTA PARA O TOPO DO LOOP
//BREAK // ENECERRA O LOOP
