//FUNÇÕES ASSINCRONAS

function requestCars(driver) {
  return new Promise((resolve, reject) => {
    if (driver > 0) {
      return resolve("Motorista a Caminho, Aguarde!");
    }
    return reject("Motorista não Encontrado, Viagem Cancelada! ");
  });
}

async function main() {
  let driver = 2;
  const request = await requestCars(driver).catch(() => null);
  //.catch, caso de erro ele retorna null
  //const request = requestCars(driver); // SE NÃO USAR O AWAIT A TAREFA FICA COMO PENDENTE, NÃO CONCLUÍDA NEM REJEITADA
  if (!request) {
    console.log("Erro!");
    return;
  }
  console.log(request);
}
main();
