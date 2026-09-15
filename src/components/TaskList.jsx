import { useState } from "react";
function TaskList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    function addItems() {
        setTasks([...tasks, task]);
        setTask("");
    }
    return (
        <>
            <input type="text" placeholder="Enter the task" value={task} onChange={(event)=> setTask(event.target.value)}/>
            <button onClick={addItems}>Add task</button>
            <ul>
                {tasks.map(item => (
                    <li>-{item}
                        <button onClick={()=>setTasks(tasks.filter(text=> text!==item))}>Delete</button>    
                    </li>
                ))}
            </ul>
        </>
    )
}
export default TaskList