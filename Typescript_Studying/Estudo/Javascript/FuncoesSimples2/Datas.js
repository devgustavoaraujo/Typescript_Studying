// DATAS
{
  const date = new Date("2023-01-25");
  const dateS = new Date(2023, 0, 12); //JANEIRO = 0

  console.log(date);
  console.log(dateS);

  console.log(date.getDate()); //RETORNA O DIA
  console.log(date.getDay()); //RETORNA O INDEX DO DIA DA SEMANA
  console.log(date.getFullYear()); // RETORNA O ANO
  console.log(date.getHours()); //RETORNA AS HORAS
  console.log(date.getMinutes()); //RETORNA OS MINUTOS
  console.log(date.getMonth()); //RETORNA O MÊS
  console.log(date.getSeconds()); //RETORNA OS SEGUNDOS
}
{
  const date = new Date();

  console.log(date.toString());

  date.setHours(date.getHours() + 5); //5 HORAS NO FUTURO

  console.log(date.toString());

  const day = new Date();

  day.setDate(day.getDate() + 10); //10 DIAS PARA O FUTURO
}

{
  const date = new Date();

  console.log(date.toDateString()); // STRING COMPLETA
  console.log(date.toLocaleDateString()); // DATA
  console.log(date.toLocaleString()); // DATA E HORAS
  console.log(date.toUTCString()); // BASEADO NO UTC
  console.log(date.toISOString()); //UTC // USADO PARA ARMAZENAR EM BANCOS
  console.log(date.toTimeString()); //UTC // USADO PARA ARMAZENAR EM BANCOS

  const timer = setInterval(() => {
    const date = new Date();
    console.log(date.getSeconds());
    if (date.getSeconds() > 30) clearInterval(timer);
  }, 1000);
}
//COMPARANDO DATAS
{
  const past = new Date(2025, 11, 30);
  const present = new Date();
  const future = new Date(2027, 9, 20);

  console.log(past.toLocaleString());
  console.log(present.toLocaleString());
  console.log(future.toLocaleString());

  if (past > future) {
    console.log("Já Passou!");
  } else {
    console.log("Não Passou Ainda!");
  }
}
