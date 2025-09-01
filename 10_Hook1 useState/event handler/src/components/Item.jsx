import style from "./Item.module.css";


const item = ({foodItem ,  bought , handlittem}) =>{


    return(
        <>
           <li className={`list-group-item  ${style.itemss}  ${bought && 'active'}`}>
              {foodItem}
            <button  className={style.button}
            onClick={handlittem}
            >Buy</button>
            </li>
        </>
    )
}

export default item;