const cepInput = document.querySelector("#cep");
const result = document.querySelector("#result");
const pesquisar = document.querySelector("#pesquisar");

async function Api(cepValue) {
  try {
    const url = await fetch(`https://viacep.com.br/ws/${cepValue}/json/`);
    const dados = url.json();
    return dados;
  } catch (error) {
    result.innerHTML = `Erro Digite um CEP Valido!`;
    console.error(error);
  }
}

pesquisar.addEventListener("click", async () => {
  const cepValue = cepInput.value;

  if (cepValue.trim() === "") {
    console.log("Digite um Valor!");
    result.innerHTML = `Erro Digite um CEP Valido!`;
  } else {
    const ApiResult = await Api(cepValue);
    console.log(ApiResult);
    result.innerHTML = `<pre> ${JSON.stringify(ApiResult, null, 2)}</pre> `;
  }
});
