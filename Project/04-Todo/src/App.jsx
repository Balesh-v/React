import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem from "./Components/TodoItems";
import "./App.css";


function App() {
  
  const tododata = ["Buy Milk", "Go to Gym", "Have a Bath" , "Go to Office"];

  

  return (
    <>
      <center id="content-id">
         <AppName />
         <AddTodo />
         <TodoItem data={tododata} />
      </center>
    </>
  );
}

export default App;
