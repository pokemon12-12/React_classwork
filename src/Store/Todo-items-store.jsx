import { createContext } from "react"
export const TodoItemsContext= createContext({
      AddItem:[],
      editListItems: ()=>{},
      deleteItem:()=>{},
    });