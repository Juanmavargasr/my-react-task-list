function Task(props){

    const {id, taskname, completed, onCompleteTaskClick, onSetPriorityTask, isPriority} = props;

    function handleClickSolved() {
        console.log(`The task ${taskname} has been solved.`);
        onCompleteTaskClick(taskname);   
    }

        function handleClickDiscarded() {
        alert(`The task ${taskname} has been discarded.`)
    }

    function handleClickPriorityTask(){
        onSetPriorityTask(taskname);
    }

    return (
        <li>
            <input type="checkbox" checked={completed} id={`task-${id}`}/> 
            <label htmlFor={`task-${id}`} className={completed ? "completed":""}>{taskname}</label>
            <button onClick={handleClickSolved}>Complete task</button>
            <button onClick={handleClickDiscarded}>Discard task</button>
            <button onClick={handleClickPriorityTask}>{isPriority ? "Is priority" :"Set as Priority"}</button>
        </li>
    );
}

export default Task;