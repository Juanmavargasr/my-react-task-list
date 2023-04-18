function Task(props){

    const {id, completed, taskname, onModificarElemento, onGuardarLocalStorage} = props;


    function handleClickDiscarded() {
        alert(`The task ${taskname} has been discarded.`)
    }



    const handleClickCheckCompleted = (taskname, e) => {      
        console.log(e.target.checked)
    }



    return (
        <li>
            <input type="checkbox"
                name={taskname}  
                onClick={() => {onModificarElemento(id)}}
                onChange={() => {onGuardarLocalStorage()}}
                checked = {completed}
            />
            <label >{taskname}</label>
            <button onClick={handleClickDiscarded}>Discard task</button>
        </li>
    );
}

export default Task;

