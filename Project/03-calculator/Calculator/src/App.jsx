import Display from './Components/Display'
import Buttons from './Components/Buttons'
import './App.css'

function App() {
  
  return (
    <>
      <div className="container " id="calculator">
        <h1>Calculator</h1>
        <Display />
        <Buttons />
      </div>
    </>
  )
}

export default App
