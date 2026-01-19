import Cards from "./Components/Cards"
import Container from "./Components/Container"
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
    <Container>
      <Cards datases = {datas}/>
    </Container>
  )
}

export default App
