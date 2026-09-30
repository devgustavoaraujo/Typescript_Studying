const math = require("./Modulo1"); //BIBLIOTECA INTEIRA
const { soma, sub, mult } = require("./Modulo1"); //DESESTRUTURAÇÃO
const { catEmoji } = require("./Constantes/Emojis");

console.log(math.soma(4, 5));
console.log(soma(5, 5));
console.log(sub(4, 2));
console.log(mult(5, 5));
console.log(catEmoji);
