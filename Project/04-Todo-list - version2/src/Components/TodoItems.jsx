import React from 'react'
import AddData1 from './AddData1'

const TodoItems = ({todoItems}) => {
  return (
    <div>
        {todoItems.map((item)=>{
            return <AddData1 key={item.id} dataName={item.name}/>
        })}
    </div>
  )
}

export default TodoItems
