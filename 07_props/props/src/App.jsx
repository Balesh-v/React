import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Heading  from "./components/Heading";

function App() {
  let foodItem = ["Dal", "Roti", "Green vegitable", "Milk", "foods"];
  // let foodItem = [];


  return (
    <>
      <Heading />
      <ErrorMessage  items={foodItem} />
      <FoodItems items={foodItem}/>
    </>
  );
}

export default App;
