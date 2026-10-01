/*
for ([inicialização]; [condição]; [expressão final];){
    código aqui
}
*/

// I = 0, ENQUANTO MENOR QUE 6, I += 1
for (let i = 0; i < 6; i++) {
  //console.log(i);
}

const arraySimples = ["Gustavo", "Eduardo", "Gabriel", "João", "Eduardo"];

for (let i = 0; i < 10; i++) {
  if (i <= arraySimples.length - 1) {
    //console.log(` ${i + 1}. ${arraySimples[i]}`);
  }
}
//console.log("Fim da Lista");

const users = ["Gustavo", "Ana", "Joana", "Maria"];

for (let i = 0; i < users.length; i++) {
  //console.log(`${i + 1}. ${users[i]}`);
}

setTimeout(() => {
  //console.log("Macaco");
}, 3000);

for (let i = 0; i < 3; i++) {
  setTimeout((i) => {
    i = "macaco";
    //console.log(i);
  }, 3000);
}

/*FOR OF*/ //MAIS SIMPLES! PARA ARRAYS

const usuarios = ["Gustavo", "Ana", "Joana", "Maria"];

//Para cada (name) de (usuarios)
for (let name of usuarios) {
  //console.log(`$ ${name}`);
}

/*FOR IN*/ // USADO PARA ITERAR OBJETOS

const listaUsuarios = {
  idade: 21,
  nome: "Gustavo",
  altura: 180,
};
//console.log(listaUsuarios.name);
//console.log(listaUsuarios["name"]);
//console.log(listaUsuarios[0].nome;);

for (let key in listaUsuarios) {
  //console.log(listaUsuarios[key]); MOSTRA O VALOR
  //console.log(listaUsuarios[key]); MOSTRA A CHAVE
  console.log(
    `${key.charAt(0).toUpperCase() + key.slice(1)}: ${listaUsuarios[key]}`,
    //CARACTER NA POSIÇÃO!         //CORTAR, FATIAR!
  );
}

/*FOR EACH*/ //
