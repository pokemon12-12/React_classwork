import Fooditems from "./Components/Fooditems";
import "bootstrap/dist/css/bootstrap.min.css";
import Errormessage from "./Components/Errorhandle";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import "./App.css";
import { useState } from "react";

function App() {
 
  let [fooditems,setCurrentState]=useState(["Dal","Chawal","Mango","Paneer","Rasogulla"]);
 

  const handleOnChange=(event)=>{
    if(event.key=="Enter"){
      let newFoodItems = event.target.value;
     let newFoodItems=[...fooditems, newFoodItems];
     setCurrentState(newFoodItems);
    console.log(`New food input clicked ${newFoodItems}`);
    }
  };

  return (
    <>
    <Container>
        <h1>Healthy Food</h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <Errormessage itemError={fooditems}></Errormessage>
        <Fooditems itemFood={fooditems}></Fooditems>
      </Container>

      <Container><p>Here is the list of healty food items which are good for health</p></Container>
    </>
  );   
}

export default App;