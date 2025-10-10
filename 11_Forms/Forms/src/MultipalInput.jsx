import React, { useState } from 'react'

const MultipalInput = () => {
    const [Input , setInput] = useState({})
      

    const handleChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInput(value => ({...value, [name]: value}))

    }

  return (
    <div>
      <form >

        <label> First Name : <input type="text" name="FirstName" value={Input.FirstName} onChange={handleChange}/></label> <br />

        <label> Last Name : <input type="text" name="LastName" value={Input.LastName} onChange={handleChange}/></label>

        <p>{Input.FirstName} , {Input.LastName}</p>

      </form>
    </div>
  )
}

export default MultipalInput
