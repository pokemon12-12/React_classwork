import Fooditems from "./Components/Fooditems";
import "bootstrap/dist/css/bootstrap.min.css";
import Errormessage from "./Components/Errorhandle";
import Container from "./Components/Container";
import "./App.css";
import FoodInput from "./Components/FoodInput";

function App() {
  let fooditems = ["Dal","Chawal","Mango","Paneer","Rasogulla","Meat", "fried Rice", "corn pizza", "volcono pizza"];

  return (
    <>
    <Container>
        <h1>Healthy Food</h1>
        <FoodInput></FoodInput>
        <Errormessage itemError={fooditems}></Errormessage>
        <Fooditems itemFood={fooditems}></Fooditems>
      </Container>

      <Container><p>Here is the list of healty food items which are good for health</p></Container>
    </>
  );   
}

export default App;