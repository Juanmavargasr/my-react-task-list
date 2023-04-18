import { useEffect, useState } from "react";
import Task from "./Task";

function Taskslist(props){

    const {list} = props;
    const [priority, setpriority] = useState([]);


    function handleSetPriorityTask(taskname){

        let newpriority = [...priority]

         if(!priority.includes(taskname)){
            newpriority= [...newpriority, taskname];
        } else {
            newpriority = newpriority.filter(tas => taskname != tas);
        }
        setpriority(newpriority);
        localStorage.setItem("priority",JSON.stringify(newpriority));
    };


    useEffect (()=>{
        const localStorageData = localStorage.getItem('priority');
        if (localStorageData=== null || localStorageData === undefined){
        } else {
            const storedpriority = JSON.parse(localStorageData);
            setpriority(storedpriority);
        }
    }, [])
    console.log({priority})


    return (
        <ul>
            {
                list.map((task) => (
                <Task 
                key = {task.id}
                id={task.id}
                taskname ={task.taskname}
                input
                onSetPriorityTask = {handleSetPriorityTask}
                isPriority={priority.includes(task.taskname)}

                />
                ))
            }

        </ul>

    );
}

export default Taskslist;