//SELECIONAR UM ID, APENAS UM ELEMENTO E ALTERA-LO

// { const adduserText = document.getElementById("add-user");
//  adduserText.innerText = "Adicionar Usuário";
// }

// {
// const adduserText = document.querySelector("#add-user");
// adduserText.textContent = "Adicionar Usuário";
// }

// {const myForm = document.querySelector(".container #my-form");
// const myItem = document.querySelector(".item"); //EXIBE APENAS O PRIMEIRO ITEM
// }

//SELECIONAR MULTIPLOS ELEMENTOS

// {
//   const allItens = document.querySelectorAll(".item"); //EXIBE TODOS ELEMENTOS
// }

// {
//   const allItens = document.getElementsByClassName("item"); //PEGA A CLASSE
//   const byTag = document.getElementsByTagName("li"); //PEGA DO ELEMENTO DO HTML
// }

//MANIPULANDO DA DOS DO HTML

//const items = document.querySelector(".items");
//const button = document.querySelector(".btn");
// items.remove(); //REMOVER ITENS DO HTML
// items.firstElementChild.remove(); //REMOVE O PRIMEIRO ITEM
// items.children[0].textContent = "Item 9"; //ALTERAR UM ITEM
// items.lastElementChild.innerHTML = "<h1> Alterando ITem </h1>";
//button.style.background = "red";

//EVENTOS

const button = document.querySelector("#submit-button");
const items = document.querySelector(".items");
const myForm = document.querySelector("#my-form");

const errorMessage = document.querySelector(".msg");

const inputEmail = document.querySelector("#email");
const inputName = document.querySelector("#name");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const nameValue = inputName.value;
  const emailValue = inputEmail.value;

  if (nameValue === "" || emailValue === "") {
    errorMessage.textContent = "Preencha os Campos!";
    errorMessage.classList = "error"; //PEGANDO ESTILO DO CSS
    setTimeout(() => {
      errorMessage.textContent = "";
      errorMessage.classList = "";
    }, 3000);
  }
  const li = document.createElement("li");
  li.classList = "item";
  li.innerHTML = `${nameValue}<br> ${emailValue}`;
  items.appendChild(li);

  //   items.children[0].textContent = inputEmail.value;
  //   items.children[1].textContent = inputName.value;
  //myForm.style.background = "red";
});
