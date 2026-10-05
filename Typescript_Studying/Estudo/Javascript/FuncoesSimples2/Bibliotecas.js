//BIBLIOTECAS
//npmjs.com
//npm install chalk
import chalk from "chalk";
import { intro, text, outro } from "@clack/prompts";

console.log(chalk.blue.underline("Sucess!"));

async function main() {
  intro(chalk.green("Bem Vindo ao Programa"));
  const name = await text({ message: "Qual e o seu Nome?: " });
  outro(`Olá ${name}`);
}
main();

//REMOVER UMA DEPENDENCIA
//npm remove chalk //EX
