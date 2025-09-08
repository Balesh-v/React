import { useState } from 'react';
import './AddTodo.css';

function AddTodo({onNewTodo}){

    const [TodoName, setTodoName] = useState("");

    const handleChange = (event) => {
        setTodoName(event.target.value);
    }

    const handleAddTodo = () => {
        onNewTodo(TodoName);
        setTodoName("");
    }

    return (
         <div className="container data ">
          <div className="call">
            <div className="col-6 ">
              <input value={TodoName} id='fed1' type="text" placeholder="Enter Todo Here" onChange={handleChange}/>
            </div>
            <div className="col-2">
              <button onClick={handleAddTodo} id='fed2' className="btn btn-success">Add Todo</button>
            </div>
          </div>
          <hr />
        </div> 
    )
}

export default AddTodo;