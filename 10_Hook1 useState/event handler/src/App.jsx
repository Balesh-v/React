import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItem = ["Dal", "Roti", "Green vegitable", "Milk", "foods"];

  // const [textshow , setTextArr] = useState()
  let [foodItem , setfoodItem] = useState(["Dal", "Roti", "Green vegitable"])

  // let textStateArr = useState("hello")
  // let textshow = textStateArr[0]
  // let setTextArr = textStateArr[1]





  

   const onKey = (e) => {
    if(e.key === "Enter"){
      let newFoodItem = e.target.value
      let newFoodItems = [...foodItem , newFoodItem]
      setfoodItem(newFoodItems)
    }
  }

  

  // let foodItem = [];


  return (
    <>
    <Container>

      <h1>Healthy food</h1>
      <FoodInput  Handlerkeydown={onKey}></FoodInput>
      <ErrorMessage  items={foodItem} />
      <FoodItems items={foodItem}/>

    </Container>
    </>
  );
}

export default App;
