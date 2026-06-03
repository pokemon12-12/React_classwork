import { useState } from "react";

const AddToDo = ({editListItems}) => {
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