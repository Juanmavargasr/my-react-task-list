import Task from "./Task";

function Taskslist(props){

    const {list} = props;

    return (
        <ul>
            {
                list.map((tas) => (<Task taskname ={tas.taskname}/>))
            }
        </ul>


    );
}

export default Taskslist;