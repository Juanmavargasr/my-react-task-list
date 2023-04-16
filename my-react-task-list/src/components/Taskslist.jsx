import { useEffect, useState } from "react";
import Task from "./Task";

function Taskslist(props){

    const {list} = props;
    const [priority, setpriority] = useState([]);
    const [completed, setIsCompleted] = useState(false);



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

    
    const handleSetCompletedCheck = (taskname) => {

        let newcompleted = [...completed]

        if(!e.target.checked === true){
            newcompleted=[...newcompleted, taskname];
        } else {
            newcompleted = newcompleted.filter(tas => taskname != tas)
        }
        setIsCompleted(newcompleted);
        localStorage.setItem("completed",JSON.stringify(newcompleted));
    };


    useEffect (()=>{
        const localStorageData = localStorage.getItem('priority');
        if (localStorageData=== null || localStorageData === undefined){
        } else {
            const storedpriority = JSON.parse(localStorageData);
            setpriority(storedpriority);
        }
    }, [])


    useEffect (()=>{
        const localStorageData = localStorage.getItem('completed');
        if (localStorageData=== null || localStorageData === undefined){
        } else {
            const storedcompleted = JSON.parse(localStorageData);
            setIsCompleted(storedcompleted);
        }
    }, [])


    console.log({completed})
    // console.log({priority});


    return (
        <ul>
            {
                list.map((tas) => (
                <Task 
                key = {tas.id}
                id={tas.id}
                taskname ={tas.taskname}
                completed = {tas.completed}
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