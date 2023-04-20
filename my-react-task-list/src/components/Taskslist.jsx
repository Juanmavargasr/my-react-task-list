import { useEffect, useState } from "react";
import Task from "./Task";

function Taskslist(props){


    let list = [
        {id: 1, taskname: "Example task 1", description: "task's 1 description",completed: true},
        {id: 2, taskname: "Example task 2", description: "task's 2 description",completed: false},
        {id: 3, taskname: "Example task 3", description: "task's 1 description",completed: false}
    ]


    const cargaAuxiliar = JSON.parse(window.localStorage.getItem("lista"));
    const cargaAuxiliarPendientes = JSON.parse(window.localStorage.getItem("listaPendientes"))

    const [miLista, setMiLista] = useState(cargaAuxiliar ? cargaAuxiliar : list)
    const [tareasPendientes, setTareasPendientes] = useState(cargaAuxiliarPendientes ? cargaAuxiliarPendientes : cargaAuxiliar)


    const handleModificarElemento = (id) => {
        const listaModificada = miLista.map((iteracion)=> {
            if (iteracion.id === id) {
                return {...iteracion,completed: !iteracion.completed}
            } else {
                return iteracion;
            }
        })
        setMiLista(listaModificada);
        localStorage.setItem("lista", JSON.stringify(listaModificada))

        const listaModificadaTareasPendientes = listaModificada.filter(iteracion => iteracion.completed === false)
        setTareasPendientes(listaModificadaTareasPendientes);
        localStorage.setItem("listaPendientes", JSON.stringify(listaModificadaTareasPendientes))
    }


    return (
        <ul>
            {
                tareasPendientes.map((task) => (
                <Task 
                key = {task.id}
                id={task.id}
                taskname ={task.taskname}
                description = {task.description}
                completed = {task.completed}
                onModificarElemento = {handleModificarElemento}
                />
                ))
            }

        </ul>

    );
}

export default Taskslist;