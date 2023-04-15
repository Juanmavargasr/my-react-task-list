import { useEffect, useState } from "react";
import Task from "./Task";

function Taskslist(props){

    const {list} = props;
    const [priority, setpriority] = useState([]);
    const [Completed, setIsCompleted] = useState(false);



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

    
    const handleSetCompletedCheck = () => {
        setIsCompleted(!Completed);
    }


    useEffect (()=>{
        const localStorageData = localStorage.getItem('priority');
        if (localStorageData=== null || localStorageData === undefined){
        } else {
            const storedpriority = JSON.parse(localStorageData);
            setpriority(storedpriority);
        }
    }, [])

    console.log({priority});

    return (
        <ul>
            {
                list.map((tas) => (
                <Task 
                key = {tas.id}
                id={tas.id}
                taskname ={tas.taskname} 
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