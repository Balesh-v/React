
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";


function App() {
  let foodItem = ["Dal", "Roti", "Green vegitable", "Milk", "foods"];
  // let foodItem = [];


  return (
    <>
      <h1 className="bg-black text-white text-center pt-10">Healthy food</h1>
      <ErrorMessage  items={foodItem} />
      <FoodItems items={foodItem}/>
    </>
  );
}

export default App;
