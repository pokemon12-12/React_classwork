import styles from "./Items.module.css";
const Items = ({ itemFood, handleBuyButton}) => {

    const BuyButtonHandler=(event)=>{       //regular event handler we have created function to use it direcly use like onclick={(event)=>BuyButtonHandler(event)}. 
        console.log(event);
        console.log(`${itemFood} is being bought`);
    };
  return (
  <>
        <li className={` ${styles["kg-style"]} list-group-item`}>
            <span className={styles["kg-font"]}>{itemFood}</span>
             <button className={styles["Buy-btn"]}
             onClick={handleBuyButton}>BUY</button>
        </li>
  </>
    );                
};

export default Items;