import styles from "./Items.module.css";
const Items = ({ itemFood }) => {

    const BuyButtonHandler=(event)=>{
        console.log(event);
        console.log(`${itemFood} is being bought`);
    };
  return (
  <>
        <li className={` ${styles["kg-style"]} list-group-item`}>
            <span className={styles["kg-font"]}>{itemFood}</span>
             <button className={styles["Buy-btn"]}
             onClick={(event)=> BuyButtonHandler(event)}>BUY</button>
        </li>
  </>
    );                
};

export default Items;