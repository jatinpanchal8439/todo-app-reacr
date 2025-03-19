import { useState } from 'react'; 
import Head from "./components/Head"
import AddTodo from "./components/AddTodo"
import Todoitems from "./components/Todoitems";
import Welco from "./components/Welco";
import "./App.css"

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodo = (taskName, dueDate) => {
    const newTodo = {
      name: taskName,
      dueDate: dueDate,
      id: Math.random().toString(), // Generate a unique ID
    };
    setTodoItems([...todoItems, newTodo]);
  };

  const deleteitem = (id) => {
    const newdel = todoItems.filter((item) => item.id !== id);
    setTodoItems(newdel);
  }

  return (
    <center className="todo-container">
      <Head />
      <AddTodo onAdd={addTodo} />
      {todoItems.length === 0 && <Welco />}
      <Todoitems todoItems={todoItems} deleteitem={deleteitem} />
    </center>
  );
}

export default App;
