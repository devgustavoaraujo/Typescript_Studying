//FOR EACH LAÇO DE REPETIÇÃO
//ESPECIFICO PARA PASSAR POR ARRAYS

/*
ForEach(item, index, array)

  item) - Dados/Informações contidos na posição atual do...
  index) - Número da Posição. Sempre começando em 0.
  array) - Retorna o Array completo

*/

const users = [
  { name: "Rodolfo", age: 33, contact: "(19) 94343-3434" },
  { name: "Paulo", age: 21, contact: "(12) 93443-3434" },
  { name: "Aline", age: 40, contact: "(13) 94566-3434" },
  { name: "Maria", age: 12, contact: "(14) 94343-3476" },
];

users.forEach((item, index, array) => {
  //console.log(item);
  //console.log(index);
  //console.log(array);

  if (item.age < 18) {
    console.log(
      `O(a) Cliente ${item.name}, Posição ${index + 1} é menor de idade!`,
    );
  }
});
