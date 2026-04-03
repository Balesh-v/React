import React from 'react'

const Hello = () => {
    
    const name = "Balesh";
    const age = 25;
    const ageInFiveYears = age === 30  ? "You will be 30 years old in 5 years." : `In 5 years, you will be ${age + 5} years old.`;

     const arr = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" }
     ]


  return (
    <div>
       <h1>Hello {name}</h1>
       <p>You are {age} years old.</p>
         <p>{ageInFiveYears}</p>
         <p>{arr.map((person , index)=>{
           return <span key={index}>{person.id}{person.name}</span>
         })}</p>
    </div>
  )
}

export default Hello
