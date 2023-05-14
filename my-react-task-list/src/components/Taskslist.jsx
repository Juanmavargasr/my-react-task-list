import { useEffect, useState } from "react";
import Task from "./Task";
// import context from "./Context";
// import Donetask from "./Donetask";

function Taskslist(props) {
  const list = [
    {
      id: 1,
      taskname: "Example task 1",
      description: "task's 1 very short description ",
      completed: true,
    },
    {
      id: 2,
      taskname: "Name task 2",
      description:
        "task's 2 keeps a long description without change the user interfaz",
      completed: false,
    },
    {
      id: 3,
      taskname: "Task 3",
      description: "task's 3 description",
      completed: false,
    },
    {
      id: 4,
      taskname: "Example task 4",
      description: "task's 4 description",
      completed: false,
    },
    {
      id: 5,
      taskname: "Name task 5",
      description: "task's 5 description",
      completed: true,
    },
  ];

  const cargaAuxiliar = JSON.parse(window.localStorage.getItem("lista"));
  const cargaAuxiliarPendientes = JSON.parse(
    window.localStorage.getItem("listaPendientes")
  );
  const cargaAuxiliarRealizadas = JSON.parse(
    window.localStorage.getItem("listaRealizadas")
  );

  const [miLista, setMiLista] = useState(cargaAuxiliar ? cargaAuxiliar : list);
  const [tareasPendientes, setTareasPendientes] = useState(
    cargaAuxiliarPendientes ? cargaAuxiliarPendientes : cargaAuxiliar
  );
  const [tareasRealizadas, setTareasRealizadas] = useState(
    cargaAuxiliarRealizadas ? cargaAuxiliarRealizadas : cargaAuxiliar
  );

  const handleModificarElemento = (id) => {
    const listaModificada = miLista.map((iteracion) => {
      if (iteracion.id === id) {
        return { ...iteracion, completed: !iteracion.completed };
      } else {
        return iteracion;
      }
    });
    setMiLista(listaModificada);
    localStorage.setItem("lista", JSON.stringify(listaModificada));

    const listaModificadaTareasPendientes = listaModificada.filter(
      (iteracion) => iteracion.completed === false
    );
    setTareasPendientes(listaModificadaTareasPendientes);
    localStorage.setItem(
      "listaPendientes",
      JSON.stringify(listaModificadaTareasPendientes)
    );

    const listaModificadaTareasRealizadas = listaModificada.filter(
      (iteracion) => iteracion.completed === true
    );
    setTareasRealizadas(listaModificadaTareasRealizadas);
    localStorage.setItem(
      "listaRealizadas",
      JSON.stringify(listaModificadaTareasRealizadas)
    );
  };

  return (
    <ul>
      <ul>
        {tareasPendientes.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            taskname={task.taskname}
            description={task.description}
            completed={task.completed}
            onModificarElemento={handleModificarElemento}
          />
        ))}
      </ul>
      <ul>
        {tareasRealizadas.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            taskname={task.taskname}
            description={task.description}
            completed={task.completed}
            onModificarElemento={handleModificarElemento}
          />
        ))}
      </ul>
    </ul>
  );
}

export default Taskslist;
