/* ===================================================================
📌 DESAFIO 5: GERENCIADOR DE TAREFAS (TO-DO LIST COM CRUD)
===================================================================

🎯 OBJETIVO:
Criar um sistema completo de gerenciamento de tarefas para praticar
as 4 operações fundamentais de dados (CRUD: Create, Read, Update, Delete)
em arrays de objetos.

-------------------------------------------------------------------
1. ESTRUTURA DE DADOS:
-------------------------------------------------------------------
- Crie um array chamado `tarefas` com pelo menos 3 objetos.
- Estrutura de cada objeto tarefa:
  {
    id: 1, // (number)
    titulo: "Estudar JS", // (string)
    concluida: false, // (boolean)
    prioridade: "alta" // (string: "alta", "media" ou "baixa")
  }

-------------------------------------------------------------------
2. FUNÇÕES DO SISTEMA:
-------------------------------------------------------------------
🔹 1. adicionarTarefa(lista, titulo, prioridade)
   - Cria um novo objeto tarefa (id novo, titulo, prioridade e concluida: false).
   - Insere a nova tarefa no array.
   - Retorna: "Tarefa '[titulo]' adicionada com sucesso!"

🔹 2. concluirTarefa(lista, idBuscado)
   - Procura a tarefa pelo `id`.
   - Se encontrar, altera a propriedade `concluida` para `true`.
   - Retorna: "Tarefa '[titulo]' marcada como concluída!"
   - Se não encontrar: "Erro: Tarefa ID [idBuscado] não encontrada."

🔹 3. removerTarefa(lista, idBuscado)
   - Remove a tarefa correspondente ao `id`.
   - Se o ID existir, remove o item e retorna: "Tarefa ID [idBuscado] removida com sucesso!"
   - Se não encontrar, retorna mensagem de erro.

🔹 4. listarPendentes(lista)
   - Filtra e retorna apenas as tarefas com `concluida: false`.

-------------------------------------------------------------------
3. FLUXO DE TESTES NO TERMINAL:
-------------------------------------------------------------------
1. Adicione 1 nova tarefa chamando `adicionarTarefa`.
2. Marque 1 tarefa como concluída chamando `concluirTarefa`.
3. Remova 1 tarefa chamando `removerTarefa`.
4. Exiba no `console.log()` o resultado de `listarPendentes(tarefas)`.

-------------------------------------------------------------------
💡 DICAS DE MÉTODOS JS PARA CADA ETAPA:
-------------------------------------------------------------------
- ADICIONAR (Create):
  Use `.push(novaTarefa)` para inserir no final do array.

- ENCONTRAR E ALTERAR (Update):
  Use `.find(t => t.id === idBuscado)` para pegar a referência direta
  do objeto e alterar `tarefa.concluida = true;`.

- REMOVER (Delete):
  Opção A (Filtragem): Sobrescreva ou filtre com `lista.filter(t => t.id !== idBuscado)`.
  Opção B (Remoção direta): Ache a posição com `.findIndex(t => t.id === idBuscado)`
  e remova com `.splice(posicao, 1)`.

- LISTAR PENDENTES (Read/Filter):
  Use `.filter(t => !t.concluida)` para obter apenas as não concluídas.
=================================================================== */

// Escreva o seu código do Desafio 5 a partir daqui...

const tarefas = [
  {
    id: 1,
    titulo: "Estudar JS",
    concluida: false,
    prioridade: "alta", //"alta", "media" ou "baixa"
  },
];

function adicionarTarefa(lista, titulo, prioridade) {
  const novoID = lista.length > 0 ? Math.max(...lista.map((t) => t.id)) + 1 : 1;
  const novaTarefa = {
    id: novoID,
    titulo: titulo,
    concluida: false,
    prioridade: prioridade, //"alta", "media" ou "baixa"
  };
  lista.push(novaTarefa);
  return `Tarefa: ${titulo} com Prioridade: "${prioridade}" Adicionada com Sucesso!`;
}

function concluirTarefa(lista, idBuscado) {
  const validarTarefa = lista.find((t) => t.id === idBuscado);

  if (validarTarefa) {
    validarTarefa.concluida = true;
    return `Tarefa '${validarTarefa.titulo}' marcada como concluída!`;
  }

  return `Erro, Tarefa com o ID: ${idBuscado} Não Encontrado!`;
}

function removerTarefa(lista, idBuscado) {
  const index = lista.findIndex((t) => t.id === idBuscado);

  if (index !== -1) {
    lista.splice(index, 1);
    return `Tarefa: ${idBuscado} Removida com Sucesso! `;
  }
  return `Erro: Tarefa ID ${idBuscado} não encontrada!`;
}

console.log(adicionarTarefa(tarefas, "Aprender JS", "alta"));
console.log(concluirTarefa(tarefas, 1));
console.log(removerTarefa(tarefas, 1));

console.log(tarefas);
