import { useReducer } from 'react';
import AppName from './Componets/AppName';
import AddTodo from './Componets/AddTodo';
import ItemsTodo from './Componets/ItemsTodo';
import './App.css';
import TodoItemContextProvider from './Store/Todo-items-store';

function App() {

  return (
    <>
      <TodoItemContextProvider>
        <center className="workspace">
          <AppName />
          <AddTodo />
          <ItemsTodo />
        </center>
      </TodoItemContextProvider>
    </>
  );
}

export default App;