// //PROMISES

// function cardrivers(drivers) {
//   return new Promise((resolve, reject) => {
//     if (drivers > 0) {
//       return resolve("Motorista a Caminho, Aguarde!");
//     }
//     return reject("Motorista não Encontrado, Viagem Cancelada! ");
//   });
// }

// function main() {
//   let drivers = 2;
//   const request = cardrivers(drivers);

//   request
//     .then((text) => {
//       console.log("Promessa Concluida", text);
//     })
//     .catch((err) => {
//       console.log("Promessa não Concluida!", err);
//     })
//     .finally(() => {});
// }
