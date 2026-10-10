import { text } from "@clack/prompts";

async function main() {
  const name = await text({ message: "Digite seu Nome: " });
  console.log("Olá,", name);
}
main();
