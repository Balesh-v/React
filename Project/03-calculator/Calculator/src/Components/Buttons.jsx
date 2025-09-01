const Buttons = (button) =>{
     
    const btnA = ['C', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '/', '*', '=', '.', '(', ')', 'X'];

    let btnC = (e) => {
        const display = document.getElementById('display');
        const value = e.target.innerText;

        if (value === 'C') {
            display.value = '';
        }
        
        else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        }
        else {
            display.value += value;
        }
    }
    return (
        <>
         <div id="btn">
              {btnA.map((btn, index) => (
                 <button onClick={btnC} key={index} className='btns'>{btn}</button>
              ))}
         </div>
        </>
    )
}

export default Buttons;