import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import { useState } from "react";
import "./App.css";
import { TodoItemsContext } from "./store/Todo_item_store";


function App() {
  const [newTodo, setNewTodo] = useState([]);

  const handleNewTodo = (newName) => {   
   
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
    <TodoItemsContext.Provider>
      <center id="content-id">
         <AppName />
         <AddTodo  onNewTodo={handleNewTodo} />
         <WelcomeMessage newTodo={newTodo}/>
         <TodoItem data={newTodo} onDelete={handleDelete}  />
      </center>
    </TodoItemsContext.Provider>
    </>
  );
}

export default App;