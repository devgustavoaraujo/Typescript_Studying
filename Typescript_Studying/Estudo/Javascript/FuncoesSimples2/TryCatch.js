// X Tratamento de erros

import { readFile } from "node:fs/promises";

async function main() {
  let file;

  try {
    file = await readFile("./Javascript/FuncoesSimples2/TryCatch.js");
  } catch (error) {
    file = error;
  }

  console.log(file);
}
main();
