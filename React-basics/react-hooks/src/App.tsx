import { useState } from 'react';
import './index.css';
import { setTimeout } from 'timers/promises';

function App() {
  const [state, setState]: any = useState(null);
  console.log("🚀 ~ file: App.tsx:6 ~ App ~ state:", state)
  const [gameWon, setGameWon]: any = useState(false);
  const [isGameFinished, setIsGameFinished] = useState(false);

  const gameTimer = () => {};

  // setTimeout(()=> {
  //   console.log("TRIGGERED INSIDE SETTIMEOUT");
  // }, 15000);


  return (
    // <button onClick={() => setState(state + 1)}>COUNT: {state}</button>
    <div>
      <h1>CLICKING GAME</h1>
      <button onClick={() => setState(state + 1)}>COUNT: {state}</button>
    </div>
    
  );
}

export default App;
