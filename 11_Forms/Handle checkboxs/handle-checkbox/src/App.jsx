import React, { use } from 'react'

import { useState } from 'react'

const App = () => {

   const [skills , setskills] = useState([])

    const handleChange = (e) => {
      console.log(e.target.value , e.target.checked)
      if(e.target.checked){
        setskills([...skills , e.target.value])
      }else{
        setskills(skills.filter((skill) => skill !== e.target.value))
      }
    }

  return (
    <div>
      <h1>handle Checkbox</h1>



      <label htmlFor="php">php</label>
      <input onChange={handleChange} type="checkbox" value="php" id="php" />
      <br />
      <br />
      <label htmlFor="js">js</label>
      <input onChange={handleChange} type="checkbox" value="js" id="js" />
      <br />
      <br />
      <label htmlFor="html">html</label>
      <input onChange={handleChange} type="checkbox" value="html" id="html" />
      <br />
      <br />
      <label htmlFor="css">css</label>
      <input onChange={handleChange} type="checkbox" value="css" id="css" />
      <br />
      <br />

      <h1>Skills : {skills.toString()}</h1>
    </div>
  )
}

export default App
