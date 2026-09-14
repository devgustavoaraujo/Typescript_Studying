// ==========================================================================
// ⚔️ DESAFIO #01 - CALCULADORA DE VELOCIDADE
// ==========================================================================

let dadosViagem: [Nome: string, Distancia: number, Tempo: number];
let historicoViagens = [];

function calcularVelocidade(dados: [string, number, number]) {
  let distancia = dados[1];
  let tempo = dados[2];

  let velocidadeMedia = distancia / tempo;
  historicoViagens.push(velocidadeMedia);
  return velocidadeMedia;
}

dadosViagem = ["Mauro", 500, 5];
const resultado = calcularVelocidade(dadosViagem);
//console.log(`A Velocidade Média de ${dadosViagem[0]} foi de ${resultado}`);

// ==========================================================================
// ⚔️ DESAFIO #01 - CALCULADORA DE VELOCIDADE
// ==========================================================================
