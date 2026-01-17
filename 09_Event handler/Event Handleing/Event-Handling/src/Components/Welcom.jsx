import React from 'react'

const Welcom = (props) => {
    // console.log(props.onClick)

    function handle(){
        console.log("hi user")
        props.onClick()
    }
  return (
    <div>
       <button onClick={props.onClick}>Welocom User</button>
       <button onClick={handle}>Welocom User</button>
    </div>
  )
}

export default Welcom
