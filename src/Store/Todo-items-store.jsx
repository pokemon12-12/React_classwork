import { createContext, useReducer } from "react"
export const TodoItemsContext= createContext({
      AddItem:[],
      editListItems: ()=>{},
      deleteItem:()=>{},
    });

const TodoItemContextProvider=({children})=>{
    // Reducer Function
  // Receives current state and action object
  // Returns the new state
  const todoItemReducer = (currTodoItems, action) => {

    // Default state
    let newTodoItems = currTodoItems;

    // ADD TODO ACTION
    if (action.type === 'NEW_ITEM') {

      // Create a new array containing:
      // 1. Existing todos
      // 2. Newly added todo
      newTodoItems = [
        ...currTodoItems,
        {
          task: action.Payload.task,
          dueDate: action.Payload.dueDate
        }
      ];

    }

    // DELETE TODO ACTION
    else if (action.type === 'DELETE_ITEM') {

      // Filter keeps all items except
      // the one whose index matches indexToDelete
      newTodoItems = currTodoItems.filter(
        (item, index) =>
          index !== action.Payload.indexToDelete
      );
    }

    // Reducer MUST return state
    return newTodoItems;
  };

  // useReducer replaces useState
  // AddItem = current state
  // dispatchReduceItem = function used to send actions to reducer
  const [AddItem, dispachReduceItem] =
    useReducer(todoItemReducer, []);

  // ======================
  // ADD ITEM HANDLER
  // ======================

  const editListItems = (task, dueDate) => {

    // Action object describing what happened
    const newItemAction = {
      type: "NEW_ITEM",

      // Extra data needed by reducer
      Payload: {
        task,
        dueDate
      }
    };

    // Send action to reducer
    dispachReduceItem(newItemAction);
  };

  // ======================
  // DELETE ITEM HANDLER
  // ======================

  const deleteItem = (indexToDelete) => {

    // Action object describing deletion
    const ListItemsToDelete = {
      type: 'DELETE_ITEM',

      Payload: {
        indexToDelete,
      }
    };

    // Send action to reducer
    dispachReduceItem(ListItemsToDelete);
  };
  return(
      <TodoItemsContext.Provider
        value={{
          AddItem,
          editListItems,
          deleteItem
        }}>
            {children}
      </TodoItemsContext.Provider>
  )

}    
export default TodoItemContextProvider;