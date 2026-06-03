import { useState } from 'react'
import AppName from './Componets/AppName'
import AddTodo from './Componets/AddTodo'
import ItemsTodo from './Componets/ItemsTodo'
import './App.css'

function App() {

const [AddItem, setAddItem] = useState([]); //paints the app 

const editListItems = (task, dueDate) => {         // edit the input and set it updated one
  const newItem = {
    task,
    dueDate,
  };

  setAddItem((prevItems) => {
    const updatedItems = [...prevItems, newItem];
    return updatedItems;
   
  });
};

//Delete handler

const deleteItem = (indexToDelete) => {
  setAddItem((prevItems) =>
    prevItems.filter((item, index) => index !== indexToDelete)
  );
};

  return (
    <>
      <center className="workspace">
        <AppName/>
        <AddTodo editListItems={editListItems}></AddTodo>
        <ItemsTodo AddItem={AddItem} deleteItem={deleteItem}></ItemsTodo>
      </center>
    </>
  )
}

export default App;
