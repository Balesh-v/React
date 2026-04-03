import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todolist = ({ data, handleClick , key }) => {
  return (
    <li className="todo-item" key={key}>
      <span>{data}</span>

      <div className="btn-container">
        <button>
          <FaCheck />
        </button>
        <button onClick={() => handleClick(data)}>
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default Todolist;
