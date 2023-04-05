function Task(props){

    const {taskname} = props;
        var checkbox = document.getElementById('test');
        checkbox.addEventListener("change",validacheckbox,false);

        function validacheckbox(){
            var checked = checkbox.checked;
            if(checked){
                alert(`the task ${taskname} is finished`);
            }
        }

    return (
        <li>
            <input id="test" name="test" type="checkbox" /> <label htmlFor="">{taskname}</label>
            <p ></p>
            <button onClick={alert(`The task ${taskname} has been discarded`)} >Discard task</button>
            
        </li>
    );


}

export default Task;