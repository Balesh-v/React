import React from 'react'
import './App.css'
import { useState } from 'react'
const App = () => {

  const [name, setName] = useState('name')
  const [text, setText] = useState('')
  const [mycar , setCar] = useState("volvo")

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

  const handlesechange = (e) =>{
    setCar(e.target.value)

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

       <select value={mycar} onChange={handlesechange}>
        <option value="ford">ford</option>
        <option value="volvo">volvo</option>
        <option value="volvo">rolles</option>
       </select>
      </form>
    </div>
  )
}

export default App
