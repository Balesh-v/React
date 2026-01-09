import './ErrorMessage.css';

const ErrorMessage = ({items}) => {
   
    return (
        <>
         {items.length === 0 && <h1 className="error-message">No food items found</h1>}
        </>
    )
}

export default ErrorMessage;