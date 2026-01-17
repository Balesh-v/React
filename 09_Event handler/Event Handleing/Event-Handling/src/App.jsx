import React from "react";
import "./App.css";
import Welcom from "./Components/Welcom";


const App = () => {
  function handleButtonClick(e) {
    console.log(e);
    alert("Hello");
  }

  function handleWelcom(user) {
    alert(`welcom ${user} thamks`);
  }

  function handleWelcomuser(user){
    return alert(`welcom ${user}`)
  }

  return (

    
    <div className="Container">
      <h1>Event Handiling</h1>
      <div className="btns">
        <button onClick={handleButtonClick}>Click Me</button>

        <button onClick={(e) => handleButtonClick(e)}>Click Me2</button>

        <button
          onClick={(e) => {
            (alert("Balesh"), console.log(e));
          }}
        >
          Inline Button
        </button>

        <button
          onClick={() => {
            handleWelcom("Balesh");
          }}
        >
          Alter Your Name
        </button>
      </div>
      <h1>Passing Events as Props in React </h1>
      <div className="btns">
        <Welcom onClick={()=>{handleWelcomuser("gyanesh")}}/>

      </div>
    </div>
  );
};

export default App;
