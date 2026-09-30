//MODULOS (CÓDIGOS ISOLADOS)

function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = {
  soma,
  sub,
  mult(a, b) {
    //CRIAR FUNÇÃO DENTRO DO OBJETO
    return a * b;
  },
};
