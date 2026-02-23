import React, { useState } from "react";

// Requirements
//  *      - Parent state: tasks (array of strings)
//  *      - Input + button adds tasks

export const TodoItem = ({ task }: { task: string }) => {
  const [completed, setCompleted] = useState<boolean>(false);
  
  return (
    <div>
      {task}
      <button onClick={() => setCompleted(!completed)}>
        {" "}
        Task Completed
      </button>
      <button>Delete Task</button>
      <div
        style={{ backgroundColor: completed ? "green" : "red" }}
        className="w-[50px] h-[50px]"
      ></div>
    </div>
  );
};
