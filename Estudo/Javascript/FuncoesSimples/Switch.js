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

const stuff = "hamburguer";

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
}
