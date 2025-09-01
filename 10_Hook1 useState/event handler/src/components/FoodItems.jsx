import Item from "./Item";
import styles from "./FoodItems.module.css";
import { useState } from "react";



const FoodItems =  ({items}) =>  {


  let [activeItem , setActiveItem] = useState([])


  let onBuyButton = (event ,item)=>{ 
    let newItem = [...activeItem , item]
    setActiveItem(newItem)

  }

 



  return (
    <>
    <ul className={`list-group ${styles.FItems}`}>
        {items.map((item) => {
          return (
            <Item key={item} foodItem={item} bought={activeItem.includes(item)}  handlittem={(event)=>{onBuyButton(event , item)}} />
          );
        })}
      </ul>
    </>
  )
} 

export default FoodItems;