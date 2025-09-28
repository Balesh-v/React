import React from 'react'
import './App.css'
import { useState } from 'react'
const App = () => {

  const [name, setName] = useState('name')
  const [text, setText] = useState('')

  const handleChange = (event) => {
    setName(event.target.value)
    setName(event.target.value.toUpperCase())
  }

  const handleSubmitChange = (event) => {
    event.preventDefault()
    alert('form submitted ' + name)
  }

  const handletextchange = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <h1>Forms in React</h1>
      <form action="" onSubmit={handleSubmitChange}>
       <label htmlFor="name">Name:
       <input type="text" id="name" value={name} onChange={handleChange}/>
       <p>{name}</p>
       </label>
       <label htmlFor="text area">text area:
        <textarea name="text area" id="text area" cols="30" rows="10" value={text} onChange={handletextchange}
        ></textarea>
        <p>{text}</p>

       </label>

       <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App
