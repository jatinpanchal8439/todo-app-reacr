
import Todoitem from "./Todoitem";
const TodoItems= ({ todoItems, deleteitem }) => {
    return (
<div className="item-container">

        {todoItems.map((item) => (
          <Todoitem
            style={{ marginBottom: '10px' }} 

            todoDate={item.dueDate} 
            todoName={item.name} 
            deleteitem={() => deleteitem(item.id)}
            key={item.name}
          ></Todoitem>


        ))}
      </div> 
    )
}

export default TodoItems;
