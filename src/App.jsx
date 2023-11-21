import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [state, setState] = useState(10);
  

const addvalue=()=>{
  
  if (state  < 20){
    setState(prevState =>prevState+1)
    setState(prevState=> prevState+1)
    setState(prevState=>prevState+1)
    setState(prevState=>prevState+1)
    
    
  }

}
const removevalue =()=>{
if(state >0){
  setState(prevState =>prevState-1)
    setState(prevState=> prevState-1)
    setState(prevState=>prevState-1)
    setState(prevState=>prevState-1)
}

}
  return (
    <>
      <h1>okay!start</h1>
      <h2>counter button: {state}</h2>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={addvalue}>Add Value {state}</button>
      <br/>
      <button onClick={removevalue}>Remove Value {state}</button>
    </>
  )
}

export default App
