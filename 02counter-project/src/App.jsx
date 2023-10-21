import './App.css'
import { useState } from 'react';

function App() {
  const [counter,setCounter] = useState(2)

 const addValue = ()=>{
  if(counter < 20 ) setCounter(counter+1)
 }
 const removeValue = ()=>{
  if(counter > 0)  setCounter(counter-1)
 }
  return (
    <main>
        <div>
        <h1>counter</h1>
        <h2>Counter value : {counter}</h2>
        </div>
       <div>
       <button onClick={addValue}>Add value</button>
        <button onClick={removeValue}>Decrease value</button>
       </div>
    </main>
  )
}

export default App
