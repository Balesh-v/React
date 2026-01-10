import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import TodoDatas from "./Components/TodoDatas";

function App() {
  const todoData = [
    {
      dataName: "Bye milk",
      date: "10-1-2026",
    },
    {
      dataName: "Bye home",
      date: "10-1-2026",
    },
  ];
  console.log(todoData);
  return (
    <>
      <center id="content-id">
        <AppName />
        <AddTodo />
        <TodoDatas todoData={todoData} />
      </center>
    </>
  );
}

export default App;
