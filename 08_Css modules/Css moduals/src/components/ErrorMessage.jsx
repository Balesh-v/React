const ErrorMessage = ({items}) => {
   
    return (
        <>
         {items.length === 0 && <h1>No food items found</h1>}
        </>
    )
}

export default ErrorMessage;