import React from 'react'


const Input = ({ inputValue, setInputValue }) => {

    

  return (
    <div>
        <input type="text" placeholder='Enter your name' value={inputValue} onChange={(e) => {setInputValue(e.target.value)}}/>
    </div>
  )
}

export default Input
