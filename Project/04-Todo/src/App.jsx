import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import "./App.css";
import { useState } from "react";


function App() {

  const initialTodoData = ["Buy Milk", "Go to Gym", "Have a Bath" , "Go to Office"];

  const [newTodo, setNewTodo] = useState(initialTodoData);

  const handleNewTodo = (newName) => {   
   const newTodoList = [...newTodo, [newName]];
    setNewTodo(newTodoList);
  }

  

  return (
    <>
      <center id="content-id">
         <AppName />
         <AddTodo  onNewTodo={handleNewTodo} />
         <WelcomeMessage data={newTodo} />
         <TodoItem data={newTodo} />
      </center>
    </>
  );
}

export default App;
