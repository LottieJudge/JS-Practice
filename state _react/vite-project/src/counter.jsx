import React, { useState } from "react";

export default function Counter(){
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(prevCount => prevCount +1 )
  }

  return (
    <div>
      <p>wow you've clicked the button: {count} times</p>
      <button onClick={increment}></button>
    </div>
  )
}