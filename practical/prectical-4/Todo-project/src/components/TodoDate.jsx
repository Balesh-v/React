import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const TodoDate = () => {
  const [dateString, setDateString] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const dateString = date.toLocaleDateString();
      const timeString = date.toLocaleTimeString();
      setDateString(`${dateString} - ${timeString}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div>
      <h2>{dateString}</h2>
    </div>
  );
};

export default TodoDate;
