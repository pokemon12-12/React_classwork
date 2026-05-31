import Display from "./Components/Display";
import styles from "./App.module.css";
import GrupButton from "./Components/GrupButton";
import { useState } from "react";
function App() {

  let [displayValue, SetDisplayValue]=useState("");

  const inputDisplay=(buttonText)=>{
   console.log(buttonText);
   if(buttonText==="C"){
     SetDisplayValue("");
   }
    else if(buttonText==="="){
    const result=eval(displayValue);
    SetDisplayValue(result);
   } 
   else{
    const newDisplayValue=displayValue+buttonText;
    SetDisplayValue(newDisplayValue);
   }

  };

  return (
    <div className={styles["Container"]}>
        <div className={styles.Calculator}>
            <Display showInput={displayValue}></Display>
            <GrupButton onButtonClick={inputDisplay}></GrupButton>
        </div>
    </div>
  
  )
}

export default App
