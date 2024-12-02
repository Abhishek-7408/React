import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]  =useState(12)

//let counter = 15

const addValue = () => {
  // console.log("Value added", Math.random());
  counter+=1
  setCounter(counter)

}

const removeValue = () =>{
  setCounter(counter-1)
}
  return (
    <>
      <h1>chai aur react</h1>
      <h1>Counter value: {counter} </h1>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button
      
      onClick={removeValue}>remove value {counter}</button>

      <p>footer: {counter}</p>


    </>
  )
}

export default App
