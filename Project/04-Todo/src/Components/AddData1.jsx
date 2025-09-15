import './AddData1.css'

function AddData1 ({dataName , onDelete}) {
   
    return (
         <div className="container text-center">
          <div className="call">
            <div className="col-6  data-style">
             {dataName}
            <button className="btn btn-danger" onClick={() => onDelete(dataName)}>D</button>
            </div>
          </div>
        </div>  
    )
}

export default AddData1;