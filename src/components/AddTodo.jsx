import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
function AddTodo({ onAdd }) {


   
   const [taskName, setTaskName] = useState("");
   const [dueDate, setDueDate] = useState("");

   const handleAddTask = () => {
      onAdd(taskName, dueDate);
      setTaskName('');
      setDueDate('');

      if(setTaskName===''||setDueDate===''){
         alert("Please fill the details");
         
      }
   };

   return (

      <center className="conatainer" >
         <div className="row jtrow">
            <div className="col-6">
               <input 
                  type="text" 
                  placeholder="Enter the Task:-" 
                  value={taskName} 
                  onChange={(e) => setTaskName(e.target.value)} 
               />

            </div>

            <div className="col-4">
               <input 
                  type="date" 
                  value={dueDate} 
                  onChange={(e) => setDueDate(e.target.value)} 
               />

            </div>
            <div className="col-2">
           <button className="btn btn-primary" onClick={handleAddTask}>
           <IoMdAddCircle />
           </button>

            </div>
         </div>
      </center>
   )
}

export default AddTodo;
