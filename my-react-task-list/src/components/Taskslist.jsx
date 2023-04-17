import { useEffect, useState } from "react";
import Task from "./Task";

function Taskslist(props){

    const {list} = props;
    const [priority, setpriority] = useState([]);
    const [completed, setIsCompleted] = useState([{},{},{}]);



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

    
    const handleSetCompletedCheck = (e, taskname) => {

        let newcompleted = [...completed]
        console.log({newcompleted})
    };


    useEffect (()=>{
        const localStorageData = localStorage.getItem('priority');
        if (localStorageData=== null || localStorageData === undefined){
        } else {
            const storedpriority = JSON.parse(localStorageData);
            setpriority(storedpriority);
        }
    }, [])


    return (
        <ul>
            {
                list.map((tas) => (
                <Task 
                key = {tas.id}
                id={tas.id}
                taskname ={tas.taskname}
                input
                onSetIsCompleted = {handleSetCompletedCheck}
                onSetPriorityTask = {handleSetPriorityTask}
                isPriority={priority.includes(tas.taskname)}

                />
                ))
            }

        </ul>

    );
}

export default Taskslist;