import React from 'react'
import './App.css'
import Input from './Components/Input'
import Display from './Components/Display'
import { useState } from 'react'

const App = () => {

  const [inputValue, setInputValue] = useState('');


  return (
    <div>
      <h1>Lifting State</h1>
      <Input inputValue={inputValue} setInputValue={setInputValue} />
      <Display inputValue={inputValue} />
    </div>
  )
}

export default App
