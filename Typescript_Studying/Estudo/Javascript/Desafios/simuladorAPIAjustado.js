function enviarDados() {
  return new Promise((resolve) => {
    console.log("Enviando Dados...");

    const dados = [
      {
        id: 1,
        nome: "Eduardo",
        idade: 18,
        altura: 180,
      },
      {
        id: 2,
        nome: "Gustavo",
        idade: 18,
        altura: 180,
      },
      {
        id: 3,
        nome: "Matheus",
        idade: 18,
        altura: 180,
      },
    ];
    setTimeout(() => {
      resolve(dados);
    }, 3000);
  });
}
async function receberDados(idBuscado) {
  try {
    console.log("Processando Dados...");
    const dadosRecebidos = await enviarDados();

    const dadosDosUsuarios = dadosRecebidos.find((t) => t.id === idBuscado);

    if (dadosDosUsuarios) {
      console.log(`Nome: ${dadosDosUsuarios.nome} Idade: ${dadosDosUsuarios.idade} Altura: ${dadosDosUsuarios.altura}`);
    } else {
      console.log("Dados Não Encontrados com o ID Buscado!");
    }
  } catch (error) {
    console.error("Erro:", error);
  }
}
receberDados(2);

//AJUSTADO!
