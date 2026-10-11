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
      console.log("Dados enviados com Sucesso!");
      resolve(dados);
    }, 3000);
  });
}
async function receberDados(idBuscado) {
  const dadosDosUsuarios = await enviarDados();
  const filterUsers = dadosDosUsuarios.filter((t) => t.id === idBuscado);
  setTimeout(() => {
    console.log("Aguardando Dados do Servidor...");
  }, 3000);

  setTimeout(() => {
    filterUsers.map((n) => {
      console.log(`Nome do Usuário ${n.nome} Idade: ${n.idade} Altura: ${n.altura}CM`);
    }, 3000);
  });
}
receberDados(2);
