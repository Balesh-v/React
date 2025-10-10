import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import { useState } from "react";
import "./App.css";


function App() {
  const [newTodo, setNewTodo] = useState([]);

  const handleNewTodo = (newName) => {   
    // setNewTodo((currentValue) =>{
    //   const newTodoList = [...currentValue, [newName]];
    // });
    // return newTodoList
    
    setNewTodo((currentValue) =>
      [...currentValue, [newName]]
    );

  }

  const handleDelete = (newItemname) => {
    const newTodoList = newTodo.filter((item) => item !== newItemname);
    setNewTodo(newTodoList);
  }

  return (
    <>
      <center id="content-id">
         <AppName />
         <AddTodo  onNewTodo={handleNewTodo} />
         {newTodo.length === 0 && <WelcomeMessage/>}
         <TodoItem data={newTodo} onDelete={handleDelete}  />
      </center>

    </>
  );
}

export default App;