// CLASSES

//MÉTODO SEM CLASSE

{
  const person = {
    name: "Rincko",
    age: 22,
    intro() {
      return `Meu nome é ${this.name}`;
    },
  };

  console.log(person.name);
  console.log(person.intro());

  const person2 = {
    name: "Juliano",
    age: 17,
    intro() {
      return `Meu nome é ${this.name}`;
    },
  };
}

// MÉTODO COM CLASSES
{
  class Person {
    #name; // PRIVADO
    #age; // PRIVADO
    #money = 0;
    // COLOCA IGUAL NO THIS CASO PRIVADO this.#name
    constructor(name, age) {
      this.name = name; // THIS REFERÊNCIA O PRÓPRIO OBJETO!
      this.age = age;
    }
    intro() {
      return `Meu nome é ${this.name} e tenho ${this.age} anos!`;
    }
    getName() {
      return this.name;
    }
    getAge() {
      //SÓ RETORNA AS PROPRIEDADES
      return this.age;
    }
    getMoney() {
      return this.#money;
    }
    setMoney(value) {
      this.#money = value;
    }

    incrementMoney(value) {
      this.setMoney(this.#money + value);
    }
  }
  const person = new Person("Gustavo", 21);
  console.log(person.intro());

  // NOVA PESSOA

  const personDois = new Person("Primeiro Emprego", "3 Meses");
  console.log(personDois.intro());

  // OU, CASO NÃO QUEIRA ALTERAR X-DADOS NUNCA!

  person.name = "Gustavo";
  console.log(person.intro());

  person.setMoney(100); // ALTERAR
  console.log(person.getMoney()); // OBTER O VALOR
}
