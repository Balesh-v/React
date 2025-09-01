import React from 'react'
import './Card.css'

const Card = () => {

    const handalclick = () => {
        alert("Congratulations! You clicked the button.");
    }
  return (
    <div id="card">
      <h2>Card Title</h2>
      <p>This is a description of the card.</p>
      <button onClick={handalclick}>Click Me</button>
    </div>
  )
}

export default Card
