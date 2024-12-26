import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15)
  //let counter=5

  const addValue=()=>{
    //console.log("Clicked",counter);
   // counter=counter + 1
   if(counter<20){
    setcounter(counter + 1)
  } else{
    console.log("counter cant go above 20");
  }
}
  const removeValue=()=>{
    //console.log("Clicked",counter);
   // counter=counter + 1
   if(counter>0){
    setcounter(counter - 1)
  } else{
    console.log("counter cant go below 0");
    }
  }
  return (
    <>
      <h1>React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
    </>
  )
}

export default App
