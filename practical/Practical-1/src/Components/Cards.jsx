import React from 'react'
import Card from './card'

const Cards = ( {datases }) => {

    console.log(datases)
  return (
    <>
       <div className="cotainer">
      {datases.map((item , ind)=>{
       return   <Card key={ind} datas={item.Name} Role={item.Role}/>
      })}
    </div>
    </>
  )
}

export default Cards
