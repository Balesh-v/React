import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";


function App() {


  const todoitems = [
    { id: 1, name: "Buy Milk" },
    { id: 2, name: "Go to Gym" },
    { id: 3, name: "Have a Bath" },
  ];
  


  return (
    <>
      <center id="content-id">
         <AppName />
         <AddTodo />
         <TodoItems todoItems={todoitems} />
         
      </center>
    </>
  );
}

export default App;
