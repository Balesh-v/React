import Item from "./Item";
import styles from "./FoodItems.module.css";
import FoodInput from "./FoodInput";


const FoodItems =  ({items}) =>  {

 



  return (
    <>
    <ul className={`list-group ${styles.FItems}`}>
        {items.map((item) => {
          return (
            <Item key={item} foodItem={item}  handlittem={()=>{console.log(`${item} buy`)}} />
          );
        })}
      </ul>
    </>
  )
} 

export default FoodItems;