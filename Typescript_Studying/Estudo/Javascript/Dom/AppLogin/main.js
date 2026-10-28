const button = document.getElementById("button");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const nameTag = document.getElementById("name");
const result = document.getElementById("result");
const buttonText = document.getElementById("buttonText");
const buttonLogin = document.getElementById("buttonLogin");
const h1 = document.getElementById("topText");
const labelname = document.getElementById("labelname");
const showMenu = document.getElementById("menu");
const form = document.getElementById("forms");

let clicksButton = 0;
const usuarios = [];

const menu = () => {
  const formatName = nameTag.value;
  form.remove();
  showMenu.classList.add("menu");
  showMenu.innerHTML = `<p>Olá, ${formatName}</p>`;
};
button.addEventListener("click", (e) => {
  e.preventDefault();

  const formatEmail = email.value;
  const formatName = nameTag.value;
  const formatSenha = senha.value;

  if (formatEmail === "" || formatName === "" || formatSenha === "") {
    clicksButton++;
    result.innerHTML = "<p>Preencha todos os Campos!</p>";
  }

  if (clicksButton >= 5) {
    button.style.background = "red";
    button.disabled = true;
    setTimeout(() => {
      button.disabled = false;
      button.style.background = "";
      clicksButton = 0;
    }, 3000);
  }

  if (formatEmail && formatName && formatSenha) {
    const dados = { email: formatEmail, nome: formatName, senha: formatSenha };

    const register = usuarios.some((item) => item.email === formatEmail);

    if (register) {
      result.innerHTML = "<p>Usuário já Cadastrado!</p>";
      console.log("Usuário já Cadastrado!");
    } else {
      result.innerHTML = "<p>Cadastro Realizado com Sucesso!</p>";
      usuarios.push(dados);
      console.log(usuarios);

      setTimeout(() => {
        h1.innerText = "Faça seu Login";
        buttonLogin.style.display = "block";
        labelname.remove();
        nameTag.remove();
        button.remove();
      }, 3000);
    }
  }

  setTimeout(() => {
    result.innerHTML = "";
  }, 3000);
});

buttonLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const formatEmail = email.value;
  const formatSenha = senha.value;

  usuarios.find((item) => {
    if (formatEmail === item.email && formatSenha === item.senha) {
      result.innerHTML = "<p>Login Realizado com Sucesso!</p>";
      console.log("Login Realizado com Sucesso! ");
      setTimeout(() => {
        menu();
      }, 3000);
    } else {
      console.log("Login ou Senha Invalidos!");
    }
  });

  setTimeout(() => {
    result.innerHTML = "";
  }, 3000);
});
