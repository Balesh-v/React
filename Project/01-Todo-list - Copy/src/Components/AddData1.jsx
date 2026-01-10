import "./AddData1.css";

function AddData1({ dataName, date }) {
  return (
    <div className="container text-center">
      <div className="call">
        <div className="col-6  data-style">
          <span className="">{dataName}</span>
          <span> {date}</span>
          <button className="btn btn-danger">D</button>
        </div>
      </div>
    </div>
  );
}

export default AddData1;
