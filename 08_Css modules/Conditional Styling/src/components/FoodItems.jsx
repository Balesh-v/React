import Item from "./Item"; 
import style from './FoodItem.module.css';


const FoodItems =  ({items}) =>  {

  console.log(items)



  return (
    <>
    <ul className={`${style["list-group"]}`}>
        {items.map((item) => {
          return (
            <Item key={item.name} foodItem={item}/>
          );
        })}
      </ul>
    </>
  )
} 

export default FoodItems;