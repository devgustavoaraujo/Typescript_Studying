import { useState } from "react";
//REACT HOOKS

function App() {
  const [count, setCount] = useState(0);

  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlePlusClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Contador: {count}</h1>
      <button
        className="plus"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button className="minus" onClick={handleMinusClick}>
        -
      </button>
    </>
  );
}

export default App;
