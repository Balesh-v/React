import { useState } from "react";
import TodoForm from "./TodoFom";
import Todolist from "./Todolist";
import TodoDate from "./TodoDate";
import "../Styles/Todo-style.css";

const Todo = () => {

  const [task, setTask] = useState([]);

  const handleSubmit = (input) => {
    const { id, content, checked } = input;
    if (task.find((item) => item.content === content)) {
      alert("Task already exists");
      return;
    }

    setTask([...task, { id, content, checked: false }]);
  };

  const handleClick = (item) => {
    setTask(task.filter((task) => task.content !== item));
  };

  const handleCheck = (value) => {
    setTask(
      task.map((item) =>
        item.content === value ? { ...item, checked: !item.checked } : item,
      ),
    );
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
            {task.map((item) => (
              <Todolist
                key={item.id}
                data={item.content}
                handleClick={handleClick}
                onCheck={handleCheck}
                checked={item.checked}
              />
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
