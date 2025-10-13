import { useState , useRef } from 'react';
import { MdAdd } from "react-icons/md";
import './AddTodo.css';

function AddTodo({onNewTodo}){

    // const [TodoName, setTodoName] = useState("");
    const noofupdate = useRef();

    // const handleChange = (event) => {
    //     setTodoName(event.target.value);
    //     noofupdate.current += 1;
    //     console.log(noofupdate.current);
    // }

    const handleAddTodo = (event) => {
      console.log(event)
      event.preventDefault();
      const TodoName = noofupdate.current.value;
      noofupdate.current.value = "";
         onNewTodo(TodoName);
         console.log(TodoName);
        //  setTodoName("");
    }

    return (
         <div className="container data ">
          <form className="call" onSubmit={handleAddTodo}>
            <div className="col-6 ">
              <input  id='fed1' type="text" ref={noofupdate} placeholder="Enter Todo Here" />
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