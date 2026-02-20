import React from 'react'
import '../Styles/Todo-style.css'
import { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todo = () => {

   const [input, setInput] = useState('')
   const [task , setTask] = useState([])

   const handleChange = (e) => {
       setInput(e.target.value)
   }

   const handleSubmit = (e) => {
       e.preventDefault()
       if(task.includes(input)){
           alert('Task already exists')
           return
       }
       setTask([...task, input])
       setInput('')
   }

  return (
    <>
    <section className='todo-container'>
        <header>
            <div>
                <h1>Todo project</h1>
            </div>
        </header>
        <section className='form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" className='todo-input' value={input} autoComplete='off' onChange={handleChange} />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>Add task</button>
                </div>
            </form>
        <section className='todo-list'>
            
            <ul>
                {task.map((item, index) => (
                    <li className='todo-item' key={index}>
                        <span>{item}</span>

                        <div className='btn-container'>
                           <button><FaCheck /></button>
                           <button><MdDelete /></button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
        </section>
    </section>
    </>
  )
}

export default Todo
