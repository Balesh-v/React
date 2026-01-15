import Cards from "./Components/Cards"
import "./App.css"

const App = () => {

   const datas = [
    {
      Name : "GYANESH",
      Role : "Officer",
    } ,
    {
      Name : "Balesh",
      Role : "Entrepinoures",
    },
    {
      Name : "GYANESH",
      Role : "Officer",
    } ,
    {
      Name : "Balesh",
      Role : "Entrepinoures",
    }
   ]
      
  return (
    <>
      <Cards datases = {datas}/>
    </>
  )
}

export default App
