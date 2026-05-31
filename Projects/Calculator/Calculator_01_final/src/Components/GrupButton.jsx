import styles from "./GrupButton.module.css";
const GrupButton=({onButtonClick})=>{
    const ButtonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return(
        <div className={styles["GrupButton"]}>
            {ButtonNames.map(ButtonName=> <button key={ButtonName} className={styles["keypad"]} onClick={()=>onButtonClick(ButtonName)}>{ButtonName}</button>
            )}
       </div>
    );
}
export default GrupButton;