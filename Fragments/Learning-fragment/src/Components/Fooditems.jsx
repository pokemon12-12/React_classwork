import Items from "../Items";
const Fooditems = ({itemFood}) => {
return(
<>
        <ul className="list-group">
          {itemFood.map((item) => (
            <Items key={item} itemFood={item} handleBuyButton={()=>console.log(`${item} Bought`)}></Items>
          ))}
        </ul>
</>
)}

export default Fooditems;
