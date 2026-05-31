import { useState } from "react";
import styles from "./Items.module.css";
const Items = ({ itemFood, handleBuyButton}) => {

    //background color changer on buy click
    let [bgColor,setBgColor]=useState("white");
    const OnBuyClick = () => {
    setBgColor(bgColor === "white" ? "red" : "white");
    };
    
    const BuyButtonHandler=(event)=>{       //regular event handler we have created function to use it direcly use like onclick={(event)=>BuyButtonHandler(event)}. 
        console.log(`${itemFood} is being bought`);
    };
  return (
  <>
        <li className={` ${styles["kg-style"]} list-group-item`} style={{ backgroundColor: bgColor }}>

            <span className={styles["kg-font"]}>
                {itemFood}
            </span>

            <button className={styles["Buy-btn"]} onClick={()=>{
                handleBuyButton();
                OnBuyClick();
                }}>
                BUY
            </button>

        </li>
  </>
    );                
};

export default Items;