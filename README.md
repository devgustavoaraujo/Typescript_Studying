# 📘 Estudos de TypeScript

Repositório criado para documentar minha jornada de estudos em **TypeScript**, desde os fundamentos até conceitos mais avançados.

> 🎯 **Objetivo:** aprender TypeScript na prática, desenvolver uma base sólida e aplicar os conhecimentos em projetos reais.

---

## 🚀 Sobre o estudo

Este repositório contém:

* 📚 Anotações e conceitos
* 💻 Exercícios práticos
* 🧩 Desafios de programação
* 🛠️ Pequenos projetos
* 🔍 Exemplos de código
* 📝 Resumos dos conteúdos estudados

A ideia é evoluir gradualmente, sempre colocando os conceitos em prática.

---

## 🗺️ Roadmap

### 🟢 Fundamentos

* [x] O que é TypeScript?
* [x] Instalação e configuração
* [x] `tsconfig.json`
* [x] Tipos básicos
* [x] Type Inference
* [x] `any`, `unknown`, `never`
* [x] Arrays
* [x] Tuplas
* [x] Enums
* [ ] Union Types
* [ ] Intersection Types
* [ ] Type Aliases
* [ ] Interfaces
* [ ] Funções
* [ ] Optional Properties

### 🟡 Intermediário

* [ ] Generics
* [ ] Utility Types
* [ ] Type Guards
* [ ] Type Assertions
* [ ] Narrowing
* [ ] `keyof`
* [x] `typeof`
* [ ] `in`
* [ ] Classes
* [ ] Modificadores de acesso
* [ ] Herança
* [ ] Abstract Classes
* [ ] Getters e Setters
* [ ] Módulos
* [ ] Import / Export

### 🟠 Avançado

* [ ] Conditional Types
* [ ] Mapped Types
* [ ] Template Literal Types
* [ ] Discriminated Unions
* [ ] Function Overloads
* [ ] Decorators
* [ ] Declaration Files (`.d.ts`)
* [ ] Type Manipulation
* [ ] Inferência avançada
* [ ] Configurações avançadas do TypeScript

### 🔵 TypeScript na prática

* [x] TypeScript + JavaScript
* [ ] TypeScript + Node.js
* [ ] TypeScript + Express
* [x] TypeScript + React
* [ ] TypeScript + APIs
* [ ] TypeScript + Banco de Dados
* [ ] Validação de dados
* [ ] Tratamento de erros
* [ ] Testes com TypeScript

---

## 📂 Estrutura do projeto

```text
typescript-study/
│
├── fundamentos/
│   ├── tipos/
│   ├── funcoes/
│   ├── interfaces/
│   └── arrays/
│
├── intermediario/
│   ├── generics/
│   ├── utility-types/
│   ├── classes/
│   └── modules/
│
├── avancado/
│   ├── conditional-types/
│   ├── mapped-types/
│   └── type-manipulation/
│
├── exercicios/
│
├── desafios/
│
└── projetos/
```

---

## 🧪 Exemplos

### Tipagem básica

```ts
const nome: string = "João";
const idade: number = 25;
const estudante: boolean = true;
```

### Interface

```ts
interface Usuario {
  id: number;
  nome: string;
  email: string;
}

const usuario: Usuario = {
  id: 1,
  nome: "João",
  email: "joao@email.com",
};
```

### Generics

```ts
function retornarValor<T>(valor: T): T {
  return valor;
}

const numero = retornarValor<number>(10);
const texto = retornarValor<string>("TypeScript");
```

---

## 📊 Progresso

| Conteúdo          |      Status     |
| ----------------- | :-------------: |
| Fundamentos       | 🟢 Em andamento |
| Tipos             | 🟢 Em andamento |
| Interfaces        |        🟡       |
| Generics          |        🔴       |
| Utility Types     |        🔴       |
| Classes           |        🔴       |
| Type Manipulation |        🔴       |
| Projetos          |        🔴       |

**Legenda:**

🟢 Concluído / estudando
🟡 Próximo
🔴 Ainda não estudado

---

## 🛠️ Tecnologias

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)

![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge\&logo=git\&logoColor=white)

![React Native](https://reactnative.dev/docs/getting-started)

---

## 📚 Materiais de estudo

* 📖 Documentação oficial do TypeScript
* 💻 Exercícios e desafios
* 🧠 Anotações pessoais
* 🚀 Projetos práticos
* 🔎 Pesquisa e experimentação

---

## 🎯 Metas

* [x] Dominar os fundamentos do TypeScript
* [x] Entender tipagem estática
* [x] Utilizar TypeScript em projetos reais
* [x] Aprender conceitos avançados
* [x] Criar projetos utilizando TypeScript
* [x] Melhorar qualidade e segurança do código
* [x] Desenvolver uma base sólida para trabalhar com TypeScript

---

## 💡 Filosofia de estudo

> **Aprender → Praticar → Errar → Entender → Refatorar → Evoluir**

Este repositório não tem como objetivo apenas guardar códigos, mas registrar minha evolução durante o aprendizado.

---

## 📈 Evolução

Este README será atualizado conforme novos conteúdos forem estudados e novos projetos forem desenvolvidos.

**Status atual:** 🟡 Estudando TypeScript

---

### ⭐ Se este repositório for útil para você, fique à vontade para acompanhar a jornada!
