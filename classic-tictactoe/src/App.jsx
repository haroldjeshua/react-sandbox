import { useState } from "react";
import "./App.css";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="board-row">
        <Square values={squares[0]} />
        <Square values={squares[1]} />
        <Square values={squares[2]} />
      </div>
      <div className="board-row">
        <Square values={squares[3]} />
        <Square values={squares[4]} />
        <Square values={squares[5]} />
      </div>
      <div className="board-row">
        <Square values={squares[6]} />
        <Square values={squares[7]} />
        <Square values={squares[8]} />
      </div>
    </>
  );
}

export default App;
