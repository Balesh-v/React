import style from'./Item.module.css';

const item = ({foodItem}) =>{
    return(
        <>
           <li className={`${style["kg-item"]}`}>
              {foodItem}
            </li>
        </>
    )
}

export default item;