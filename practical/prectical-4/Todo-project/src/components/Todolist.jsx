import React from "react";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todolist = ({ data, handleClick , onCheck , checked }) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkedList" : "nonCheckedList"}>{data}</span>

      <div className="btn-container">
        <button onClick={() => onCheck(data)}>
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
