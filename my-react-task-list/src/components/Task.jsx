function Task(props){

    const {taskname} = props;

    return (
        <li>
            <input type="checkbox" /> <label htmlFor="">{taskname}</label>
            <button onClick={alert(`The task ${taskname} has been discarded`)} >Discard task</button>
        </li>
    );
}

export default Task;