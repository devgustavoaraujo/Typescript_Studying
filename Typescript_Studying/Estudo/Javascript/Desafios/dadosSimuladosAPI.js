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
    resolve(dados);
  });
}
async function receberDados(idBuscado) {
  console.log("Processando Dados...");

  const dadosDosUsuarios = await enviarDados().catch(() => {
    console.log("Erro Nenhum Dado Recebido!");
  });
  const filterUsers = dadosDosUsuarios.filter((t) => t.id === idBuscado);

  filterUsers.map((n) => {
    setTimeout(() => {
      console.log(`Nome do Usuário: ${n.nome} Idade: ${n.idade} Altura: ${n.altura}CM`);
    }, 3000);
  });
}
receberDados(2);

//AJUSTADO!
