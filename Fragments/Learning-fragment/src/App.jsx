import Fooditems from "./Components/Fooditems";
import "bootstrap/dist/css/bootstrap.min.css";
import Errormessage from "./Components/Errorhandle";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import "./App.css";
import { useState } from "react";

function App() {
 
  let [fooditems,setCurrentFooditem]=useState(["Dal","Chawal","Mango","Paneer","Rasogulla"]);
 
  const OnKeyDown=(event)=>{
    if(event.key=="Enter"){
      let newFoodItem=event.target.value;
      let updatedFoodItem=[...fooditems,newFoodItem];  //spread operator is used.
      setCurrentFooditem(updatedFoodItem);
      event.target.value="";
    }
  };


  return (
    <>
    <Container>
        <h1>Healthy Food</h1>

        <FoodInput handleOnChange={OnKeyDown}></FoodInput>
        <Errormessage itemError={fooditems}></Errormessage>
        <Fooditems itemFood={fooditems}></Fooditems>
    </Container>
    <Container><p>Here is the list of healty food items which are good for health</p></Container>
    </>
  );   
}

export default App;