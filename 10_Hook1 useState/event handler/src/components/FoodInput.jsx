import React from 'react'
import style from './FoodInput.module.css'

export default function FoodInput({Handlerkeydown}) {
  
  
  return (
    <div>
      <input onKeyDown={Handlerkeydown} type="text" className={style.foodInput}/>
    </div>
  )
}
