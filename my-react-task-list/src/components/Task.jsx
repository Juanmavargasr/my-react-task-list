function Task(props){

    const {e, id, taskname, onSetPriorityTask, isPriority, onSetIsCompleted, isCompleted, completed} = props;


    function handleClickDiscarded() {
        alert(`The task ${taskname} has been discarded.`)
    }

    function handleClickPriorityTask(){
        onSetPriorityTask(taskname);
    }


    const handleClickCheckCompleted = (taskname, e) => {
        // onSetIsCompleted(e.target.checked);
        console.log(e.target.checked)
    }

    return (
        <li>
            <input type="checkbox"
                name={taskname}  
                onChange={(e) => {handleClickCheckCompleted(taskname, e)}}
            />
            <label htmlFor={`task-${id}`} className={completed ? "completed":""}>{taskname}</label>
            <button onClick={handleClickDiscarded}>Discard task</button>
            <button onClick={handleClickPriorityTask}>{isPriority ? "Is priority" :"Set as Priority"}</button>
        </li>
    );
}

export default Task;

