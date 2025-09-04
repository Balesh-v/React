import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Container from "./components/Container";
import "./App.css";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItem = ["Dal", "Roti", "Green vegitable", "Milk", "foods"];

   let textshow = "Enter Food Item";

   const HandlerChange = (e) => {
    console.log(e.target.value);
    textshow = e.target.value
  }

  

  // let foodItem = [];


  return (
    <>
    <Container>

      <h1>Healthy food</h1>
      <FoodInput  HandlerChange={HandlerChange}></FoodInput>
      <p className="text-show">{textshow}</p>
      <ErrorMessage  items={foodItem} />
      <FoodItems items={foodItem}/>

    </Container>
    </>
  );
}

export default App;
