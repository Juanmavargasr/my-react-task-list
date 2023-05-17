import Header from "./components/Header";
import "./index.css";
import Context from "./components/Context";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [description, SetDescription] = useState("");
  const [formValidation, setFormValidation] = useState({
    name: undefined,
    description: undefined,
  });

  const createTask = {
    name: name,
    description: description,
  };

  const handleNameChange = (event) => {
    const value = event.target.value;
    setFormValidation({
      ...formValidation,
      name:
        value.length > 2
          ? ""
          : "The taskname is to short, should have at least 3 character",
    });
    setName(value);
  };

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    SetDescription(value);
  };

  // const nameExist = (formValidation) => {
  //   if (formValidation.name !== "") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const isFormValid = formValidation.name === "";

  //   return (
  //     <div>
  //       <Header />
  //       <form>
  //         <div>
  //           <label>Taskname</label>
  //           <input
  //             value={name}
  //             type="text"
  //             placeholder="Taskname"
  //             onChange={handleNameChange}
  //           />
  //           <label> Task Description</label>
  //           <input
  //             value={description}
  //             type="text"
  //             placeholder="Task Description"
  //             onChange={handleDescriptionChange}
  //           />
  //           <button disabled={!isFormValid}>Create</button>
  //           <span className="error" role="alert">
  //             {formValidation.name}
  //           </span>
  //         </div>
  //       </form>
  //       <div className="App">
  //         <Context />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="container">
      <div className="header">
        <h2 className="title">Task List</h2>
        <form className="form">
          <div>
            <label className="form-label">Taskname</label>
            <input
              className="form-input"
              value={name}
              type="text"
              placeholder="Taskname"
              onChange={handleNameChange}
            />
            <label className="form-label"> Description</label>
            <input
              className="form-input"
              value={description}
              type="text"
              placeholder="Task Description"
              onChange={handleDescriptionChange}
            />
            <button className="create-button" disabled={!isFormValid}>
              Create
            </button>
            <span className="error" role="alert">
              {formValidation.name}
            </span>
          </div>
        </form>
      </div>
      <div className="task-list">
        <Context />
      </div>
    </div>
  );
}

export default App;
