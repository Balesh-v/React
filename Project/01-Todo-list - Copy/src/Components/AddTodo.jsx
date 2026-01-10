import "./AddTodo.css";

function AddTodo() {
  return (
    <div className="container data ">
      <div className="call">
        <div className="box">
          <div className="col-6 ">
            <input id="fed1" type="text" placeholder="Enter Todo Here" />
          </div>

          <div className="col-6 ">
            <input id="fed1" type="date" />
          </div>
        </div>
        <div className="col-2">
          <button id="fed2" className="btn btn-success">
            Add Todo
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default AddTodo;
