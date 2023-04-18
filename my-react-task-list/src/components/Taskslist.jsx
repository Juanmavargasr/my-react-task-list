import { useEffect, useState } from "react";
import Task from "./Task";

function Taskslist(props){

    const {list} = props;
    console.log(list)
    const [miLista, setMiLista] = useState(list)

  useEffect(() => {
    const cargaAuxiliar = JSON.parse(window.localStorage.getItem("lista"));
    if (cargaAuxiliar){
        setMiLista(cargaAuxiliar)
        console.log(cargaAuxiliar)
    }
  },[])  


    const modificarElemento = (id) => {
        const listaModificada = miLista.map((iteracion)=> {
            if (iteracion.id === id) {
                return {...iteracion, completed: !iteracion.completed}
            } else {
                return iteracion;
            }
        })
        setMiLista(listaModificada);
    }


    const handleGuardarLocalStorage = () => {
            const cargaAuxiliar = JSON.parse(window.localStorage.getItem("lista"));
            if (cargaAuxiliar) {
                window.localStorage.removeItem("lista")
                console.log(cargaAuxiliar)
            }
            window.localStorage.setItem("lista",JSON.stringify(miLista))

    }


    return (
        <ul>
            {
                miLista.map((task) => (
                <Task 
                key = {task.id}
                id={task.id}
                taskname ={task.taskname}
                completed = {task.completed}
                onModificarElemento = {modificarElemento}
                onGuardarLocalStorage = {handleGuardarLocalStorage}
                />
                ))
            }

        </ul>

    );
}

export default Taskslist;