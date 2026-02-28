import { useEffect } from "react";

import { TodoApp } from "./components/Medium/todo/TodoApp";

function App() {


  useEffect(() => {
    console.log();
  }, [])

  return (
    <>
      <TodoApp />
    </>
  );
}

export default App;
