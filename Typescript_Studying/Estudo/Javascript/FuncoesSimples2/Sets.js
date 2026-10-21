import { text } from "@clack/prompts";

// SETS
//ELIMINAR ITENS REPETIDOS DE UM ARRAY

{
  const numbers = new Set([1, 4, 5, 4, 6, 2, 8, 11, 54, 5, 1]);
  //SETS NÃO PERMITE ITENS REPETIDOS
  numbers.add(13);
  numbers.add(13);
  numbers.add(13);
  numbers.add(13);
  numbers.add(13);

  console.log(numbers);
}

//METODOS SET
{
  const numbers = new Set([1, 4, 5, 4, 6, 2, 8, 11, 54, 5, 1]);
  numbers.add(55); //ADICIONAR AO SET
  numbers.delete(4); //REMOVE UM VALOR ESPECIFICO
  numbers.has(4); //VERIFICAR SE O NÚMERO EXISTE, RETORNANDO UM BOOLEAN PARA USAR O IF
  numbers.clear(); //REMOVE TODOS ITENS DO SET
  numbers.size(); //TAMANHO DO SET
  numbers.values(); //PARA USAR O FOR!

  for (const number of numbers.values()) {
    console.log(number);
  }

  numbers.forEach((number) => {
    console.log(number);
  });
}

{
  async function main() {
    const input = await text({ message: "Digite vários números" });

    const inputNumbers = input.split(" ").map(Number);
    const numbers = new Set(inputNumbers);

    console.log(inputNumbers);
    console.log(numbers);
  }
  main();
}
