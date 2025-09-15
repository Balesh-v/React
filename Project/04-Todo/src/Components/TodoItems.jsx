import React from 'react'
import AddData1 from './AddData1'

const TodoItems = ({data, onDelete}) => {
  return (
    <div>
        {data.map((item, index) => (
            <AddData1 key={index} dataName={item} onDelete={onDelete} />
        ))}
    </div>
  )
}

export default TodoItems
