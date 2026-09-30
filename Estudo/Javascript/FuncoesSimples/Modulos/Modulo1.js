//MODULOS (CÓDIGOS ISOLADOS)

function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module.exports = {
//   soma,
//   sub,
//   mult(a, b) {
//     //CRIAR FUNÇÃO DENTRO DO OBJETO
//     return a * b;
//   },
// };

//NOVA VERSÃO DO NODE E RECOMENDADO

export function div(a, b) {
  return a / b;
}

export function par(a) {
  if (a % 2 == 0) {
    return "Número Par";
  } else {
    return "Número Impar";
  }
}

function porcentagem(a) {
  const soma = 100 - (a / 100) * 100;
  if (isNaN(a)) {
    return "Isso não e um Número!";
  } else if (a > 100) {
    return "Digite um Número menor que 100!";
  } else {
    return `${a}% de R$100,00 = ${soma}`;
  }
}

export default { porcentagem };
