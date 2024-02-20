import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [value, setValue] = useState(6)

  const increaseValue = () => {

    setValue(++value)

  }

  function decreaseValue(){

    setValue(--value)
  }



  return (
    <>

    <h1>Value: {value}</h1>

    <button onClick={increaseValue}>Increase</button>
    <button onClick={decreaseValue}>Decrease</button>
    
    </>
  )
}

export default App
