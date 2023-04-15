function Task(props){

    const {id, taskname, onSetPriorityTask, isPriority, onSetIsCompleted, isCompleted} = props;


    function handleClickDiscarded() {
        alert(`The task ${taskname} has been discarded.`)
    }

    function handleClickPriorityTask(){
        onSetPriorityTask(taskname);
    }

    const handleClickCheckCompleted = () => {
        onSetIsCompleted(!Completed);

    }

    return (
        <li>
            <input type="checkbox" id={`task-${id}`} name={taskname}  value={taskname} onChange={handleClickCheckCompleted}/>
            <label>{taskname}</label>
            <button onClick={handleClickDiscarded}>Discard task</button>
            <button onClick={handleClickPriorityTask}>{isPriority ? "Is priority" :"Set as Priority"}</button>
        </li>
    );
}

export default Task;
//  checked={isCompleted} onChange={handleSetCompleteCheck}>{isCompleted ? "completed" : "un-completed"}
// >{isCompleted ? true : false}