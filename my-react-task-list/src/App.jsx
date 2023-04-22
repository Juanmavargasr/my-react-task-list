// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useEffect } from "react";
import Header from "./components/Header";
import Taskslist from "./components/Taskslist";
// import Donetask from "./components/Donetask";

import './index.css';



function App() {
  


  return (
    <div className="App">
      <Header />
      <Taskslist/>
      {/* <Donetask/> */}


    </div>
  );
}

export default App;
