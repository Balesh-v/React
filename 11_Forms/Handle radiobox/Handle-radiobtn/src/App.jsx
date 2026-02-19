import React from 'react'
import { useState } from 'react'

const App = () => {

   const [gender, setGender] =  useState('male');
   const [city, setCity] = useState('Aligarh');

  return (

    <>

    <div>
      <h1>Handle Radio Button in React</h1>
      <h2>Select gender</h2>
      <label>
        <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
        Male
      </label>
      <label>
        <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
        Female
      </label>
      <h4>Selected gender: {gender}</h4>
    </div>


    <div>

      <h1>Select on city</h1>
      <select defaultValue={'Aligarh'} onChange={(e) => setCity(e.target.value)}> 
        <option value="Kasganj">Kasganj</option>
        <option value="Ganjdundwara">Ganjdundwara</option>
        <option value="Aligarh">Aligarh</option>
      </select>

      <h2>Selected city: {city}</h2>
    </div>


    </>
    
  )
}

export default App
