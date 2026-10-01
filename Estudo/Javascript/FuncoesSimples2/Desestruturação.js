// 🪓 DESESTRUTURAÇÃO

function main() {
  const person = {
    name: "Gustavo",
    age: 22,
    isProgrammer: true,
  };

  //const name = person.name; //FORMA DIFÍCIL
  const { name, age, isProgrammer } = person; //FORMA FÁCIL
  //console.log(name, age, isProgrammer);
}
main();

function arrayColors() {
  const colors = ["Verde", "Amarelo", "Azul", "Lilas", "Verde"];
  const [firstColor, secondColor] = colors;
  console.log(firstColor, secondColor);
}
arrayColors();

function mainPlayer() {
  const player = {
    nickname: "Rincko",
    health: 20,
    inventory: {
      items: ["sword", "shield", "bow"],
      potions: [
        { type: "regeneration", duration: 8 },
        { type: "defense", duration: 8 },
      ],
    },
  };

  const { nickname: nick, health } = player; //DESESTRUTURAR E RENOMEAR
  /*const {
    inventory: { items, potions },
  } = player;*/ //MAIS COMPLICADA SE TIVER POUCOS ITENS

  //const { inventory } = player; //PEGA O INVENTÁRIO COMPLETO
  //const { items, potions } = inventory; //PEGA ITENS ESPECIFICOS DENTRO DO INVENTÁRIO

  const {
    inventory: { potions },
  } = player;
  const [{ type, duration }, { duration: secondDuration, type: secondType }] =
    potions;

  console.log(type, duration);
  console.log(secondDuration, secondType);

  const types = player.inventory.potions[0].type; //ANTIGO
  console.log(type, duration);
}
mainPlayer();
