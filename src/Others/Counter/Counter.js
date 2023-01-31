import React, { useState } from 'react'
import "./Counter.css"
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className='counter'>
    
    <div className='increment'>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Increment</button>
      </div>
      <h1>{counter}</h1>
      <div className='decrement'>
      <button onClick={() => {
        setCounter(counter - 1);
      }}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter
