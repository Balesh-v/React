import Card from "./Components/card"
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
    <div className="cotainer">
      {datas.map((item)=>{
       return   <Card datas={item.Name} Role={item.Role}/>
      })}
    </div>
    </>
  )
}

export default App
