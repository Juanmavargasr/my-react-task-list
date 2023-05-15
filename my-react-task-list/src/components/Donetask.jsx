import { useEffect, useState } from "react";
import Task from "./Task";
import Tasklist from "./Taskslist"

// function Donetask(props){

//     const {cargaAuxiliar, onListaModificada} = props

//     const cargaAuxiliarRealizadas = JSON.parse(window.localStorage.getItem("listaRealizadas"))

//     const [tareasRealizadas, setTareasRealizadas] = useState(cargaAuxiliarRealizadas ? cargaAuxiliarRealizadas : cargaAuxiliar)
    
//     const handleModificarElemento2 = (id) => {

//         const listaModificadaTareasRealizadas = onListaModificada.filter(iteracion => iteracion.completed === true)
//         setTareasRealizadas(listaModificadaTareasRealizadas);
//         localStorage.setItem("listaRealizadas", JSON.stringify(listaModificadaTareasRealizadas))

//     }

    
    

//     return (

//         <ul>
//             {
//                 tareasRealizadas.map((task) => (
//                 <Task 
//                 key = {task.id}
//                 id={task.id}
//                 taskname ={task.taskname}
//                 description = {task.description}
//                 completed = {task.completed}
//                 onModificarElemento2 = {handleModificarElemento2}
//                 />
//                 ))
//                 }
//         </ul>


//     );

// }

// export default Donetask;