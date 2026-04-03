import { useState } from "react";
import "../Styles/Todo-style.css";
import TodoForm from "./TodoFom";
import Todolist from "./Todolist";
import TodoDate from "./TodoDate";

const Todo = () => {
  const [task, setTask] = useState([]);

  const handleSubmit = (input) => {
    if (task.includes(input)) {
      alert("Task already exists");
      return;
    }
    setTask([...task, input]);
  };

  const handleClick = (item) => {
    setTask(task.filter((task) => task !== item));
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <div>
            <h1>Todo project</h1>
            <TodoDate />
          </div>
        </header>
        <TodoForm addTodo={handleSubmit} />
        <section className="todo-list">
          <ul>
            {task.map((item, index) => (
              <Todolist key={index} data={item} handleClick={handleClick} />
            ))}
          </ul>
        </section>
        <section className="clear-container">
          <button className="clear-btn" onClick={() => setTask([])}>
            Clear All
          </button>
        </section>
      </section>
    </>
  );
};

export default Todo;
