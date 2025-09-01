function App() {

  let foodItem = ['Dal', 'Roti', 'Green vegitable', 'Milk', 'foods'];

  return (

    <>
      <h1>Healthy food</h1>
      <ul className="list-group">
        {foodItem.map((item) =>{
          return <li className="list-group-item" key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
