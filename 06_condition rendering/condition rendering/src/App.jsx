function App() {
  // let foodItem = ["Dal", "Roti", "Green vegitable", "Milk", "foods"];
  let foodItem = [];

  // if (foodItem.length === 0) {
  //   return <h1>No food items found</h1>;
  // }

  // Conditional rendering using ternary operator

  // const isFoodItemEmpty = foodItem.length === 0 ? <h1>No food items found</h1> : null;


  return (
    <>
      <h1>Healthy food</h1>
      {foodItem.length === 0 && <h1>No food items found</h1>}
      <ul className="list-group">
        {foodItem.map((item) => {
          return (
            <li className="list-group-item" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
