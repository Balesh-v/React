import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import AddData1 from "./Components/AddData1";
import "./App.css";
import { useState } from "react";


function App() {
  
  // const [data, setData] = useState("");

  return (
    <>
      <center id="content-id">
         <AppName />
         <AddTodo />
         <AddData1 />
      </center>
    </>
  );
}

export default App;
