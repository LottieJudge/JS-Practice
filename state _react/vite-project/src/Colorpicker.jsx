import React from "react";
import { useState } from "react"

export default function ColorPicker(){
  const [color, setColor] = useState()
  
  const divStyle = {backgroundColor: color};
  
  return (
    <div style={divStyle}>
      <p> the color is {color}</p>
      <button onClick={() => setColor('Blue')}>Blue </button>
      <button onClick={() => setColor('Purple')}>Purple </button>
      <button onClick={() => setColor('Pink')}>Pink </button>
      <button onClick={() => setColor('Green')}>Green </button>
    </div>
  )
  }
