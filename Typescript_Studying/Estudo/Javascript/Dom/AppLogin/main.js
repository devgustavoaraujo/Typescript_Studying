const button = document.getElementById("button");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const nameTag = document.getElementById("name");
const result = document.getElementById("result");
const buttonText = document.getElementById("buttonText");
const buttonLogin = document.getElementById("buttonLogin");

let clicksButton = 0;
const usuarios = [];

button.addEventListener("click", (e) => {
  e.preventDefault();

  const formatEmail = email.value;
  const formatName = nameTag.value;
  const formatSenha = senha.value;

  if (formatEmail === "" || formatName === "" || formatSenha === "") {
    clicksButton++;
    result.innerHTML = "<p>Preencha todos os Campos!</p>";
    setTimeout(() => {
      result.innerHTML = "";
    }, 3000);
  }

  if (clicksButton >= 5) {
    button.style.background = "red";
    button.disabled = true;
    buttonLogin.disabled = true;
    setTimeout(() => {
      button.disabled = false;
      buttonLogin.disabled = false;
      button.style.background = "";
      clicksButton = 0;
    }, 3000);
  }

  if (formatEmail && formatName && formatSenha) {
    const dados = { email: formatEmail, nome: formatName, senha: formatSenha };

    const register = usuarios.some((item) => item.email === formatEmail);

    if (register) {
      console.log("Usuário já Cadastrado!");
    } else {
      usuarios.push(dados);
      console.log(usuarios);
    }
  }
});

buttonLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const formatEmail = email.value;
  const formatName = nameTag.value;
  const formatSenha = senha.value;

  usuarios.find((item) => {
    if (formatEmail === item.email && formatName === item.nome && formatSenha === item.senha) {
      console.log("Login Realizado com Sucesso! ");
    }
  });
});
