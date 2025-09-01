import style from "./Item.module.css";


const item = ({foodItem , handlittem}) =>{

    // const handlerbtn = (event) => {
    //     console.log(`You have bought ${foodItem}`);
    //     console.log(event.target.outerText);
    // }

    return(
        <>
           <li className={`list-group-item ${style.itemss}`}>
              {foodItem}
            <button className={style.button}
            onClick={handlittem}

            >Buy</button>
            </li>
        </>
    )
}

export default item;