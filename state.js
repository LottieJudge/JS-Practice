// State with codecademy 

import { useState } from "react"

// Using hooks in react. React hooks are functions that let us manage the internal state of components and handle post rendering side effects. Using hooks we can determine what the user is shown based on the state. E.G are they logged in y/n? if y then they should have full access to their profile if no then the log in page and home page will do just fine! 

// Built in Hooks 

const hookUseState = "the useState hook allows us to track the state of an app in a function component. it takes in two values, the current state and the function that updates the state. In the below color is the state and set color is the functions"

export default function colorPicker(){
const [color, setColor] = useState()

const divStyle = {backgroundColor: 'blue'};

return (
  <div style={divStyle}>
    <p> the color is {color}</p>
  </div>
)
}



const hookUseEffect = "Allows you to perform side effects in your components such as timers and fetching data. "

const hookUseContext = ""

const hookUseReducer = ""

const hookUseRef = ""



