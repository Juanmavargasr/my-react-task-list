// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useEffect } from "react";
import Header from "./components/Header";
import Taskslist from "./components/Taskslist";
import context from "./components/Context";
// import Donetask from "./components/Donetask";

import "./index.css";
import Context from "./components/Context";

function App() {
  return (
    <div className="App">
      <Header />
      <h3>Pending Task</h3>
      <Context />
      <h3>Done Task</h3>
      {/* <Donetask/> */}
    </div>
  );
}

export default App;
