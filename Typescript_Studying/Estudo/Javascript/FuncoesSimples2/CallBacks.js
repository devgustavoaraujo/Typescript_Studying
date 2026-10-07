function performe(nome, exec) {
  const title = `${nome}, Iniciou o Curso de Javascript`;
  console.log(nome, "Iniciou a Função!");
  exec(title);
}

performe("Gustavo", (title) => {
  console.log(title);
});

// Callbacks

function performe(exec) {
  const numbers = [3, 18, 21, 44, -92, 439, -12, 22, 185, 201];
  for (const number of numbers) {
    //exec(number);
  }
}
performe((number) => console.log("Item atual", number));

const listNames = ["Gustavo", "Maria", "Marcos", "Tereza", "Helena", "João"];
const filtered = listNames.filter((filter) => filter.startsWith("M"));
console.log(filtered);

listNames.forEach((item) => {
  console.log(item);
});

const servidor = setTimeout(() => {
  console.log("Dados Recebidos com Sucesso!");
}, 1000);

if (servidor) {
  console.log("Aguardando Dados do Servidor!");
  return servidor;
}

let contador = 0;
const limite = 5;
const meuIntervalo = setInterval(() => {
  contador++;
  console.log(`Repetindo a ${contador} Vezes!`);

  if (contador >= 5) {
    clearInterval(meuIntervalo);
    console.log("Encerrando Contagem!");
  }
}, 1000);
meuIntervalo();

let count = 0;
const timer = setInterval(() => {
  if (count >= 10) {
    clearInterval(timer);
  }
  console.log(count);
  count++;
}, 400);
