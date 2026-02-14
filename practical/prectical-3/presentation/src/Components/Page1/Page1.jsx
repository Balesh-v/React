import React from 'react'
import  Nav  from '/src/Components/Page1/Nav.jsx'
import Left from '/src/Components/Page1/Left.jsx'
import Right from '/src/Components/Page1/Right.jsx'



const Page1 = ({puser}) => {

  return (

    <>
    <div className=" h-screen bg-white">
       <Nav />

       <div className="flex">
          <Left />
          <Right ppuser={puser} />
       </div>
    </div>
    </>
  )
}

export default Page1
