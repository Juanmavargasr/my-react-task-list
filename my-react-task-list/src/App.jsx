// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
import { useEffect } from "react";
import Header from "./components/Header";
import Taskslist from "./components/Taskslist";
import './index.css';



let tasktonlist = [
  {id: 1, taskname: "Example task 1", completed: false},
  {id: 2, taskname: "Example task 2", completed: false},
  {id: 3, taskname: "Example task 3", completed: false}
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
