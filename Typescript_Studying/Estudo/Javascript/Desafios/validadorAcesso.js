const usuariosPermitidos = ["Danilo", "Cabral"];

const validarAcesso = (nome = "", idade = 0) => {
  if (isNaN(idade)) {
    return `ACESSO NEGADO: Erro, Idade Incorreta! Idade Digitada: "${idade}"`;
  } else if (idade >= 18) {
    usuariosPermitidos.push(nome);
    console.log(`Usuarios Autorizados: ${usuariosPermitidos}`);
    return `Acesso permitido para ${nome}! Seja bem-vindo(a).`;
  }
  return `Acesso negado para ${nome}! Idade mínima necessária: 18 anos.`;
};

console.log(validarAcesso("Gabriel", 17));
