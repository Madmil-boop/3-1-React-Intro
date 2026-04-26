

import { useEffect, useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter] = useState(0)
useEffect(() => {window.alert("renderd!")});
let staticVariable = 0

  return (
    <>
      <p>Counter: {counter}</p>
      <p>Static Variable: {staticVariable}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      <button onClick={() => staticVariable++}>Increment Static Variable</button>
    </>
  )
}

export default App
