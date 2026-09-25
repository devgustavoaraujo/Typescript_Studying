/*
ESTRUTURA CONDICIONAL SWITCH

switch (valor) {
    case "esperado":{
    ...
    break;    
    }
}
*/
const animal = "gato";
//USADO QUANDO ESPERAMOS DIVERSOS VALORES DIFERENTES
// SE NÃO USARIAMOS O IF (ANIMAL == "gato")

switch (animal) {
  case "gato": {
    console.log("Miau");
    break;
  }
  case "cachorro": {
    console.log("Auau");
    break;
  }
  case "pato": {
    console.log("Qua Qua Qua");
    break;
  }
}

const stuff = "queijo";

switch (stuff) {
  case "gato":
  case "pato":
  case "cachorro": {
    console.log("Animal!");
    break;
  }

  case "pastel":
  case "hamburguer":
  case "arroz": {
    console.log("Comida!");
    break;
  }
  default: {
    console.log("Não Listado na Variavel");
  }
}

const r1 = require("node:readline");
const prompt = r1.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Bem vindo ao programa");
console.log("[1] 📅 Data atual");
console.log("[2] 🕒 Horário atual");
console.log("[3] 🦓 Ver animais");
console.log("[4] 🍕 Ver comidas");
console.log("[5] 💻 Ver Linguagens");
console.log("[0] ❌ Sair");

prompt.question("> Selecione o que desejar fazer", (answer) => {
  switch (answer) {
    case "1": {
      const date = new Date();
      const day = date.getDay();
      const month = date.getMonth() + 1; //JAVASCRIPT AS COISAS COMEÇAM EM 0, NÃO EXISTE MÊS 0 ENTÃO COLOCA +1
      const year = date.getFullYear();
      console.log(`Hoje é dia ${day}, do mês de ${month} no ano de ${year}`);
      break;
    }
    case "2": {
      const hours = new Date();
      const hour = hours.getHours();
      const minutes = hours.getMinutes();
      const seconds = hours.getSeconds();
      console.log(`Agora são ${hour}h ${minutes}m ${seconds} `);
      break;
    }
    case "3": {
      break;
    }
    case "4": {
      break;
    }
    case "5": {
      break;
    }
  }
  prompt.close();
});
