import { useContext, useState } from "react";
import { TodoItemsContext } from "../Store/Todo-items-store";

const AddToDo = () => {
const {editListItems}=useContext(TodoItemsContext); // Hooks are always called inside the main function in the component

// Q1) why we have passed this usestate hook here not in the APP itself???
// Ans: A simple rule is put the state in lowest component that needs it 

  const [task, setTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAdd = () => {
    editListItems(task, dueDate);

    // Clear inputs

    setTask("");
    setDueDate("");
  };


  return (
    <div className="AddItems">
      <input
        className="todo-input"
        type="text"
        placeholder="Enter your tasks"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <input
        className="todo-date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button
        className="todo-btn"
        type="button"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddToDo;