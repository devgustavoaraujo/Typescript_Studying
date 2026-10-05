/* 
📌 DESAFIO 5.1: ALUNOS E NOTAS (REFORÇO CRUD) 

1. DADOS: 
   const alunos = [{ id: 1, nome: "Gustavo", nota: 7.5, aprovado: true }]; 

2. FUNÇÕES: 
   - cadastrarAluno(lista, nome, nota) 
     Gera novo ID, define aprovado (nota >= 6) e usa .push() 
     
   - atualizarNota(lista, idBuscado, novaNota) 
     Usa .find(), atualiza nota e recalcula aprovado (novaNota >= 6) 
     
   - deletarAluno(lista, idBuscado) 
     Usa .findIndex() e remove com .splice(index, 1) 
     
   - listarAprovados(lista) 
     Usa .filter(a => a.aprovado) 
*/

const alunos = [
  { id: 1, nome: "Gustavo", nota: 7.5, aprovado: true },
  { id: 2, nome: "Daniel", nota: 2.5, aprovado: false },
  { id: 3, nome: "Matheus", nota: 8.5, aprovado: true },
  { id: 4, nome: "Tadeo", nota: 6.5, aprovado: true },
  { id: 5, nome: "Alvaro", nota: 4.5, aprovado: false },
];

function cadastrarAluno(lista, nome, nota) {
  const newId = lista.length > 0 ? Math.max(...lista.map((t) => t.id + 1)) : 1;
  const novoAluno = {
    id: newId,
    nome: nome,
    nota: nota,
    aprovado: nota >= 6 ? true : false,
  };

  lista.push(novoAluno);
}
cadastrarAluno(alunos, "Marcos", 4.5);

function atualizarNota(lista, idBuscado, novaNota) {
  const buscarIdAluno = lista.find((t) => t.id === idBuscado);
  if (buscarIdAluno) {
    buscarIdAluno.nota = novaNota;
    return `Nota do Aluno: ${buscarIdAluno.nome} Atualizada com Sucesso! ${buscarIdAluno.nota}`;
  }
  return `ID ${idBuscado} Não foi Encontrado, Tente novamente ou mais tarde!`;
}

console.log(atualizarNota(alunos, 5, 2.5));

function deletarAluno(lista, idBuscado) {
  const removerAluno = lista.findIndex((t) => t.id === idBuscado);

  if (removerAluno >= 0) {
    const nome = lista[removerAluno].nome;
    lista.splice(removerAluno, 1);
    return `Aluno ${nome} Removido com Sucesso!`;
  }
}
console.log(deletarAluno(alunos, 5));
console.log(alunos);

function listaAprovados(aprovados) {
  const alunosAprovados = aprovados.filter((t) => t.aprovado === true);

  if (alunosAprovados.length >= 0) {
    return `${alunosAprovados.map((t) => t.nome)}`;
  }
}

console.log(listaAprovados(alunos));

/*
```
=> 🔍 .find()
• Parâmetros: (item, index, array)
• O que faz: Procura e retorna o primeiro objeto/elemento que satisfizer a condição. Se não achar, retorna undefined.
• Exemplo de uso: lista.find((t) => t.id === 5) ➡️ Retorna o objeto do aluno com ID 5.

=> 🔢 .findIndex()
• Parâmetros: (item, index, array)
• O que faz: Procura e retorna apenas a posição (índice numérico) do primeiro elemento encontrado. Se não achar, retorna -1.
• Exemplo de uso: lista.findIndex((t) => t.id === 5) ➡️ Retorna 4 (a posição dele na lista).

=> 🛠️ .map()
• Parâmetros: (item, index, array)
• O que faz: Transforma os dados. Passa por todos os itens e gera uma nova lista do mesmo tamanho, modificando o que você pedir.
• Exemplo de uso: lista.map((t) => t.nome) ➡️ Transforma a lista de objetos em uma lista só com os textos dos nomes ['Gustavo', 'Daniel'].

=> 🫙 .filter()
• Parâmetros: (item, index, array)
• O que faz: Filtra a lista. Retorna uma nova lista (que pode ser menor) contendo apenas os elementos que passaram na sua condição (true).
• Exemplo de uso: lista.filter((t) => t.aprovado === true) ➡️ Retorna uma nova lista contendo apenas os objetos dos alunos aprovados.

=> 🧮 .reduce()
• Parâmetros: (acumulador, item, index, array) — Nota: Ganha o acumulador na frente!
• O que faz: Reduz a lista inteira a um único valor (como somar todos os números, tirar uma média ou agrupar dados). Ele vai somando/guardando o resultado no acumulador a cada passo.
• Exemplo de uso: lista.reduce((total, t) => total + t.nota, 0) ➡️ Soma a nota de todos os alunos e retorna o valor final (o 0 no fim é o valor inicial do total).
```
*/
