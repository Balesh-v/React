import { useState } from 'react';



const TodoForm = ({addTodo}) =>{
    
      const [input, setInput] = useState({})

       const handleChange = (e) => {
         setInput({id: e.target.value, content: e.target.value, checked: false})
       }

       const handleSubmit = (e) => {
           e.preventDefault()
           addTodo(input)
           setInput({id: "", content: "", checked: ""})
       }

    return(
        <>
         <section className='form'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" className='todo-input' value={input.content} autoComplete='off' onChange={handleChange} />
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