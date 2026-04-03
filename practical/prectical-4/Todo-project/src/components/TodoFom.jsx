import { useState } from 'react';



const TodoForm = ({addTodo}) =>{
    
      const [input, setInput] = useState('')

       const handleChange = (e) => {
         setInput(e.target.value)
       }

       const handleSubmit = (e) => {
           e.preventDefault()
           addTodo(input)
           setInput('')
       }

    return(
        <>
         <section className='form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" className='todo-input' value={input} autoComplete='off' onChange={handleChange} />
                </div>
                <div>
                    <button type='submit' className='todo-btn'>Add task</button>
                </div>
            </form>
        </section>
        </>
    )
}

export default TodoForm;