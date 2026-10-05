import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const text = number < 0 ? "Negativo" : "Positivo";
  return (
    <main>
      <h1>{number}</h1>
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
    </main>
  );
}

export default App;
