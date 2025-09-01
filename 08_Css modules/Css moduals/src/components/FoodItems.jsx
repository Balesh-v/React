import Item from "./Item"; 
import style from './FoodItem.module.css';


const FoodItems =  ({items}) =>  {



  return (
    <>
    <ul className={`${style["list-group"]}`}>
        {items.map((item) => {
          return (
            <Item key={item} foodItem={item}/>
          );
        })}
      </ul>
    </>
  )
} 

export default FoodItems;