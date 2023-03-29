// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./components/Header";
import Taskslist from "./components/Taskslist";

const tasktonlist = [
  {taskname: "Terminar proyecto my-react-task-list"},
  {taskname: "Leer la documentación del próximo sprint"}
]

function App() {
  return (
    <div className="App">
      <Header />
      <Taskslist list={tasktonlist}/>
    </div>
  );
}

export default App;
