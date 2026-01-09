
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";


function App() {
  // let foodItem = ["Dal", "Roti", "Green vegitable", "Milk", "Fruits"];
  let foodItem = [
    {
      name : "Dal",
      rating : 4.5,
    },
    {
      name : "Roti",
      rating : 8.0,
    },
    {
      name : "Green vegitable",
      rating : 9.5,
    },
    {
      name : "Milk",
      rating : 3.5,
    },
    {
      name : "Fruits",
      rating : 7.0,
    },
    {
      name : "Tea",
      rating : 2.0
    }
  ]

  // let foodItem = [];


  return (
    <>
      <h1 className="kg-h">Healthy food</h1>
      <ErrorMessage  items={foodItem} />
      <FoodItems items={foodItem}/>
    </>
  );
}

export default App;
