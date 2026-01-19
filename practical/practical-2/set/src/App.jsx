import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [val , setval] = useState("Balesh")

  const handleOnchage = (e)=>{
    setval(e.target.value)
  }

  const handleClear =()=>{
    setval("")
  }



  return (
    <div>
      <h1>Get Input value</h1>
      <input type="text" placeholder='Value'  value={val} onChange={handleOnchage}/>
      <button onClick={handleClear}>Clear</button>
      <p>{val}</p>
    </div>
  )
}

export default App
