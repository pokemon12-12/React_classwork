import Display from "./Components/Display";
import styles from "./App.module.css";
import GrupButton from "./Components/GrupButton";
function App() {

  return (
    <div className={styles["Container"]}>
        <div className={styles.Calculator}>
            <Display></Display>
            <GrupButton></GrupButton>
        </div>
    </div>
  
  )
}

export default App
