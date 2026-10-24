// const users = {
//   rincko: {
//     age: 22,
//     coins: 100,
//   },
//   cristiano: {
//     age: 12,
//     coins: 0,
//   },
//   juliano: {
//     age: 17,
//     coins: -30,
//   },
// };

// users["matheus"] = { age: 18, coins: 0 };
// console.log(users);

const users = new Map([
  ["Gustavo", { age: 22, coins: 100 }],
  ["Cristiano", { age: 12, coins: 50 }],
  ["Daniel", { age: 13, coins: 30 }],
]);

//users.set(); //SETA ALGO
//console.log(users.get("Gustavo")); //PEGA AS PROPIEDADES BUSCADA
console.log(users);

for (const [key, value] of users.entries()) {
  console.log(key);
  console.log(value);
}
