import { useContext } from "react";
import { TodoItemsContext } from "../Store/Todo-items-store";


const ItemsTodo = () => {
const {AddItem,deleteItem}=useContext(TodoItemsContext);

  return (
    <>
      {AddItem.map((item, index) => (
        <div className="ItemsToDo" key={index}>
          <span>{item.task}</span>
          <span>{item.dueDate}</span>
          <button className="delete-btn" onClick={()=>deleteItem(index)}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default ItemsTodo;