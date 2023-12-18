
import React, { useState } from 'react';

export default function CreateTask(props) {
    const [task, setTask] = useState("");
    const handleSubmit = (event) => {event.preventDefault();
      
      if (task.trim() ==="") {
        alert("please deposit 5 coins"); 
        return;
      }
if (task.length > 12) {alert ("spam=ban");
return;
}
//console.log(task);
props.addTask(task);
    setTask("");
      }
  return (
    <form onSubmit={handleSubmit}>
<input 
value ={task}
type="text" placeholder="Write HERE..."
onChange={(event) => setTask(event.target.value)}/>
<button className="btn" type="submit">pin</button>
    </form>
  )
}
