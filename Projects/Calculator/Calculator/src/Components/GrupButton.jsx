import styles from "./GrupButton.module.css";
const GrupButton=()=>{
    const ButtonNames=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];
    return(
        <div className={styles["GrupButton"]}>
            {ButtonNames.map(ButtonName=> <button className={styles["keypad"]}>{ButtonName}</button>
            )}
       </div>
    );
}
export default GrupButton;