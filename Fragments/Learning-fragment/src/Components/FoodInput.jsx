import styles from "../FoodInput.module.css";
const FoodInput =({handleOnChange})=>{
 return (
    <input type="text" placeholder="Enter apan dish" className={styles.FoodInput} 
    onKeyDown={handleOnChange}></input>
 );
}
export default FoodInput;
