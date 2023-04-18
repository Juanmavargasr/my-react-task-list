// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Header from "./components/Header";
import Taskslist from "./components/Taskslist";

const tasktonlist = [
  {id: 1, taskname: "Example task 1", completed: true},
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
