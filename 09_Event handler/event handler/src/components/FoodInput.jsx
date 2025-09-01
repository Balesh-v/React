import React from 'react'
import style from './FoodInput.module.css'

export default function FoodInput({HandlerChange}) {
  
  
  return (
    <div>
      <input onChange={HandlerChange} type="text" className={style.foodInput}/>
    </div>
  )
}
