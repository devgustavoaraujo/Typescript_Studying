import { useState } from "react";

function App() {
  //AO INVES DE PASSAR O PROPS, PODE PASSAR A PRÓPRIA ESTRUTURA!
  //DESESTRUTURAÇÃO
  const [number, setNumber] = useState(0);
  const text = number < 0 ? "Negativo" : "Positivo";
  const fruits = ["Maça", "Banana", "Laranja"];

  return (
    <main>
      <div>
        {fruits.map((fruit) => (
          <p key={fruit}>{fruit}</p>
        ))}
      </div>

      <h1>{number}</h1>
      <p></p>
      <h2
        style={{
          color: "white",
          backgroundColor: number >= 0 ? "green" : "red",
        }}
      >
        {text}
      </h2>
      <article>
        <button className="minus" onClick={() => setNumber(number - 1)}>
          -
        </button>
        <input
          type="number"
          value={number}
          onChange={(event) => setNumber(parseInt(event.target.value))}
        ></input>
        <button className="plus" onClick={() => setNumber(number + 1)}>
          +
        </button>
      </article>
      {/*FORMA ARCAICA*/}
      {/*<ul>
        <li>
          {number} X 0 {number * 0}
        </li>
        <li>
          {number} X 1 {number * 1}
        </li>
        <li>
          {number} X 2 {number * 2}
        </li>
        <li>
          {number} X 3 {number * 3}
        </li>
        <li>
          {number} X 4 {number * 4}
        </li>
        <li>
          {number} X 5 {number * 5}
        </li>
        <li>
          {number} X 6 {number * 6}
        </li>
        <li>
          {number} X 7 {number * 7}
        </li>
        <li>
          {number} X 8 {number * 8}
        </li>
        <li>
          {number} X 9 {number * 9}
        </li>
      </ul>*/}
      <ul>
        {/*{[0, 1, 2, 3, 4, 5].map((i) => (*/}
        {Array.from({ length: 11 }).map((_, i) => (
          <li>
            {number} X {i} = {number * i}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
