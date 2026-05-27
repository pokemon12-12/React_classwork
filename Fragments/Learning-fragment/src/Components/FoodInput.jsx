import styles from "../FoodInput.module.css";
const FoodInput =()=>{
 return (
    <input type="text" placeholder="Enter apan dish" className={styles.FoodInput} 
    onChange={(event)=>{console.log(event.target.value)}}></input>
 );
}
export default FoodInput;