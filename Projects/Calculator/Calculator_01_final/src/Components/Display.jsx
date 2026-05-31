import styles from "./Display.module.css";
const Display=({showInput})=>{
    return(
         <input className={styles.display} type="text" placeholder="ABC" value={showInput} readOnly></input>
    );
}
export default Display;