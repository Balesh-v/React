import React, { useEffect } from 'react'
import '../Styles/Todo-style.css'
import { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todo = () => {

   const [input, setInput] = useState('')
   const [task , setTask] = useState([])
   const [dateString, setDateString] = useState('')

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


    useEffect(() => {
      const intervalId = setInterval(() => {
      const date = new Date()
      const dateString = date.toLocaleDateString()
      const timeString = date.toLocaleTimeString()
      setDateString(`${dateString} - ${timeString}`)
   }, 1000)

   return () => clearInterval(intervalId)

    } , [])

    const handleClick = (item) => {
        setTask(task.filter((task) => task !== item))
        // console.log(item)
    }

  return (
    <>
    <section className='todo-container'>
        <header>
            <div>
                <h1>Todo project</h1>
                <h2>{dateString}</h2>
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
                           <button onClick={() => handleClick(item)}><MdDelete /></button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
        </section>
        <section className='clear-container'>
            <button className='clear-btn' onClick={() => setTask([])}>Clear All</button>
        </section>
    </section>
    </>
  )
}

export default Todo
