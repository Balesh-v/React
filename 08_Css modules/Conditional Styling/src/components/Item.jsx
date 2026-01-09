import style from'./Item.module.css';

const item = ({foodItem}) =>{
    return(
        <>
          
              
             <li className={`${style["kg-item"]}`}>
                <p>{`Name: ${foodItem.name}`}</p>
                <span className={foodItem.rating > 5 ? style["full-rating"] : foodItem.rating > 3 ? style["half-rating"] : style["no-rating"]}>
                  <p>{`Rating: ${foodItem.rating}`}</p>
                </span>
            </li>
        </>
    )
}

export default item;