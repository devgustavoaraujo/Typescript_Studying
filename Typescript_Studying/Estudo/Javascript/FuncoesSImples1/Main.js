{
  const message = "Hello World";
  alert(message);
}

//CONVERTER PARA JSON
{
  const todos = [
    {
      id: 1,
      description: "Estudar programação",
      isCompleted: false,
    },
    {
      id: 2,
      description: "Ler",
      isCompleted: true,
    },
    {
      id: 3,
      description: "Treinar",
      isCompleted: true,
    },
  ];

  const todosJSON = JSON.stringify(todos); //PARA ENVIAR DADOS JSON PARA O SERVIDOR
  const todosList = JSON.parse(todos); //PARA TRANSFORMA EM DADO JAVASCRIPT
}

//LOOP
{
  const cars = ["Ferrari", "BMW", "Mercedes"];

  for (let i = 0; i < 10; i++) {
    setInterval(() => {
      console.log(i);
    }, 2000);
  }

  //FOR OF

  for (carros of cars) {
    console.log(cars);
  }

  //FOREACH

  cars.forEach((car, index) => {
    console.log(index, car);
  });
}
