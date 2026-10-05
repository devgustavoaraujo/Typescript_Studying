//OBJETOS SÃO ESTRUTURAS DE DADOS
//POREM OBJETOS PODEM SE DEFINIR PROPRIEDADES E METODOS

const player = {
  nickname: "Gustavo",
  health: 20,
  isDead: false,
  present() {
    //POSSO ABRIR UM BLOCO DE FUNÇÃO DENTRO DO PRÓPRIO OBJETO
    console.log("Meu Nick é:", this.nickname); //THIS E REFERÊNCIA A ELE MESMO
  },
};

//player.name = "Gustavo2"; //POSSO ATRIBUIR DADOS DEPOIS AO OBJETO
//console.log(player);
//console.log(player.nickname); //ACESSAR DADOS DO OBJETO

//player.present();
//console.log(player["health"]);

for (const prop in player) {
  // console.log(prop);
}

const ramMemory = {};

const computer = {
  motherboard: "B460M",
  videoCard: "RTX 2070",
  cpu: "Intel I7 10500H",
  font: {
    name: "XPG Core Reactor",
    watts: 800,
  },
  case: {
    name: "Draco GameMax",
    color: "Black",
  },
  ram: [
    { name: "XPG", size: 16000 },
    { name: "XPG", size: 16000 },
  ],
};

console.log(computer.font.watts);
console.log(computer.case.color);
console.log(computer.ram);

const readLine = require("node:readline");

const prompt = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

prompt.question();
