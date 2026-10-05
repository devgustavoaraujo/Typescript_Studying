/*FUNÇÕES*/

{
  //FUNÇÃO SÓ EXECUTA QUANDO VOCÊ CHAMA
  //FUNÇÃO SERVE PARA ISOLAR FUNÇÕES DENTRO DELA
  //FUNÇÃO PODE SER REUTILIZADA/CHAMADA QUANTAS VEZES QUISER

  //VOID
  function digaMeuNome() {
    //FUNÇÃO TIPO VOID, VAZIA!
    console.log("Gustavo");
  }

  //FUNÇÃO COM PARÂMETRO
  function faleUmNome(nome) {
    //FUNÇÃO TIPO VOID, VAZIA!
    console.log(nome);
  }
  //faleUmNome("Gustavo");

  //FUNÇÃO COM PARÂMETRO
  function calcular(num1, num2) {
    result = num1 + num2;
    console.log(result);
  }
  //calcular(5, 2);

  //FUNÇÃO COM RETURN
  function somar(num1, num2) {
    result = num1 + num2;
    return result;
  }
  const resultadodaSoma = somar(40, 50);
  //console.log(resultadodaSoma);

  function calcularDividas(receita, gastos, soma) {
    soma = receita - gastos;
    if (soma < 0) {
      return `Endividado seu saldo é: ${soma}`;
    } else {
      return `Sem Dívidas seu saldo é: ${soma}`;
    }
  }
  const ResultadodoCalculo = calcularDividas(2000, 2000);
  //console.log(ResultadodoCalculo);

  //ARROW FUNCTION

  const meuNome = (nome) => {
    return nome;
  };
  //console.log(meuNome("Gustavo"));
}
