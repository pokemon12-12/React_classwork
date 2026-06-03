const ItemsTodo = ({AddItem,deleteItem}) => {
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