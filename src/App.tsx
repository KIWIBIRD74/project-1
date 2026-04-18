import { useState } from "react";

function App() {
  const [count, setCount] = useState(100);

  const sum = () => setCount(count + 5);
  const sub = () => setCount(count - 5);
  const mult = () => setCount(count * 5);
  const divide = () => setCount(count / 5);

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={sum}>+5</button>
        <button onClick={sub}>-5</button>
        <button onClick={mult}>*5</button>
        <button onClick={divide}>/5</button>
      </div>
    </>
  );
}

export default App;
