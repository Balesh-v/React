import React from 'react'

const Todo = () => {
  return (
    <>
    <section className='todo-container'>
        <header>
            <div>
                <h1>Todo project</h1>
            </div>
        </header>
        <section className='form'>
            <form >
                <div>
                    <input type="text" className='todo-input' autoComplete='off' />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>Add task</button>
                </div>
            </form>
          
        </section>
      
    </section>
    </>
  )
}

export default Todo
