import React from 'react'
import Card from './Card';

const Right = ({ ppuser }) => {


  return (
    <div className="flex  gap-10 justify-center w-236 h-120  ml-40 mt-9  p-10 ">
       {ppuser.map((item , index) => {
         return <Card key={index} img={item.img} text={item.text} buttonText={item.buttonText} color={item.color} />
       })}
    </div>
  )
}

export default Right;
