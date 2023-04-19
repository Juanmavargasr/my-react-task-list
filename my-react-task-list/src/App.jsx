// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&display=swap" />
import { useEffect } from "react";
import Header from "./components/Header";
import Taskslist from "./components/Taskslist";
import './index.css';


function App() {
  


  return (
    <div className="App">
      <Header />
      <Taskslist/>
    </div>
  );
}

export default App;
