// CLASSES

//MÉTODO SEM CLASSE

// const person = {
//     name: "Rincko",
//     age: 22,
//     intro(){
//         return `Meu nome é ${this.name}`
//     }
// }

// console.log(person.name);
// console.log(person.intro());

// const person2 = {
//     name: "Juliano",
//     age: 17,
//     intro(){
//         return `Meu nome é ${this.name}`
//     }
// }

// MÉTODO COM CLASSES

class Person {
  constructor(name, age) {
    this.name = name; // THIS REFERÊNCIA O PRÓPRIO OBJETO!
    this.age = age;
  }
  intro() {
    return `Meu nome é ${this.name} e tenho ${this.age} anos!`;
  }
}
const person = new Person("Gustavo", 21);
console.log(person.intro());

// NOVA PESSOA

const personDois = new Person("Primeiro Emprego", "3 Meses");
console.log(personDois.intro());
