import { useState , useRef } from 'react';
import { MdAdd } from "react-icons/md";
import './AddTodo.css';

function AddTodo({onNewTodo}){

    const [TodoName, setTodoName] = useState("");
    const noofclick = useRef();

    const handleChange = (event) => {
        setTodoName(event.target.value);
    }

    const handleAddTodo = (event) => {
      console.log(event)
      event.preventDefault();
         onNewTodo(TodoName);
         setTodoName("");
    }

    return (
         <div className="container data ">
          <form className="call" onSubmit={handleAddTodo}>
            <div className="col-6 ">
              <input value={TodoName} id='fed1' type="text" placeholder="Enter Todo Here" onChange={handleChange}/>
            </div>
            <div className="col-2">
              <button id='fed2' className="btn btn-success"><MdAdd /></button>
            </div>
          </form>
          <hr />
        </div> 
    )
}

export default AddTodo;