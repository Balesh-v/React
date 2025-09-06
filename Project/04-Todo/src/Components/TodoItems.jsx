import React from 'react'
import AddData1 from './AddData1'

const TodoItems = ({data}) => {
  return (
    <div>
        {data.map((item, index) => (
            <AddData1 key={index} dataName={item} />
        ))}
    </div>
  )
}

export default TodoItems
