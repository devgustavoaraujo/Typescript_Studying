function getRandom() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Math.random() * 30);
    }, 3000);
  });
}

async function main() {
  console.log("Aguardando Resultado do Servidor! ");
  // const value = await getRandom(); //AWAIT ESPERA O RESULTADO DA FUNÇÃO PARA CONTINUAR O CÓDIGO
  // console.log(Math.floor(value));

  await getRandom().then((value) => {
    //NÃO ESPERA O RESULTADO DA FUNÇÃO, MAS COM UM AWAIT NA FRENTE ESPERA
    console.log(value);
  });
}
main();
