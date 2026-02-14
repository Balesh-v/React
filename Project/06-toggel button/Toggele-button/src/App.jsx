import React from "react";
import "./App.css";
import { useState } from "react";




const App = () => {

  
  const [isOn, setIsOn] = useState(false);
  
  const handleChange = () => {
    setIsOn(!isOn);
  };

  const bgcolor = { backgroundColor: isOn ? "green" : "red" };

  const changecon = isOn ? "on" : "off";

  return (
    <>
      <div className="toggle-btn" onClick={handleChange} style={bgcolor}>
        <div className={`toggle-btn-circle ${changecon}`}>
          <span>{changecon}</span>
        </div> 
      </div>
    </>
  );
};

export default App;
