
export const  TaskList = ({tasks,onDelete}) => {
    return (
        <ul>Your tasks:
            {tasks.map(task => (
                <li key={task.id}>{task.text} <button onClick={()=> onDelete(task.id)}>Delete</button></li>
            ))}
        </ul>
    )
}