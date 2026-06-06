import { useState } from 'react';
import AppName from './Componets/AppName';
import AddTodo from './Componets/AddTodo';
import ItemsTodo from './Componets/ItemsTodo';
import './App.css';
import { TodoItemsContext } from './Store/Todo-items-store';

function App() {

  // Stores all todo items
  const [AddItem, setAddItem] = useState([]);



  // ======================
  // ADD ITEM HANDLER
  // ======================

  const editListItems = (task, dueDate) => {

    const newItem = {
      task,
      dueDate,
    };

    // prevItems = current state
    // Create a new array and append the new item
    setAddItem((prevItems) => [
      ...prevItems,
      newItem,
    ]);
  };



  // ======================
  // DELETE ITEM HANDLER
  // ======================

  const deleteItem = (indexToDelete) => {

    setAddItem((prevItems) =>
      prevItems.filter(
        (item, index) =>
          index !== indexToDelete
      )
    );
  };



  return (
    <>
      <TodoItemsContext.Provider
        value={{
          AddItem,
          editListItems,
          deleteItem,
        }}
      >
        <center className="workspace">
          <AppName />
          <AddTodo />
          <ItemsTodo />
        </center>
      </TodoItemsContext.Provider>
    </>
  );
}

export default App;