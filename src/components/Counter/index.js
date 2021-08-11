import { React, useState } from "react";
const Counter=({isOpen,
    openCounter})=>{
    const [count, setCount] = useState(0);
    return (
        
      <>
      {isOpen?(
      <>
      <>Counter
          <h1> Счёт: {count}</h1>
          <button onClick={() => setCount(0)}>Сбросить</button>
          <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
          <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </>
      <button onClick={openCounter}>Close Counter</button>
      </>
      ):<button onClick={openCounter}>Open Counter</button>
  }
  </>)}
  
  export default Counter;