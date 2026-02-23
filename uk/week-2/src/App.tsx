import { useState } from "react";
import "./App.css";
import { TodoApp } from "./components/Medium/todo/TodoApp";

function App() {
  // what is count? and what is setCount?
  // state variable, setter/updater function = useState[hook](default value 0)

  return (
    <>
      <TodoApp />
    </>
  );
}

export default App;