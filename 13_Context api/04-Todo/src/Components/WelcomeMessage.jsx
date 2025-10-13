import React from 'react'

const WelcomeMessage = ({newTodo}) => {
  return (
   newTodo.length === 0  && <div>
      <h1>Welcome to the Todo App!</h1>
      <p>Manage your tasks efficiently.</p>
    </div>
  )
}

export default WelcomeMessage
