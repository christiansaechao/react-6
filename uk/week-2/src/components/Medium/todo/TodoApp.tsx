import React, { useState } from "react";
import { TodoList } from "./TodoList";

/**
 * Goal
 * Build a basic todo list with state stored in parent and tasks displayed by child components.
 * Components
 *      - TodoApp (parent)
 *      - TodoList (child)
 *      - TodoItem (child)
 * Requirements
 *      - Parent state: tasks (array of strings)
 *      - Input + button adds tasks
 *      - TodoList receives tasks as prop and maps into TodoItem
 *      - Stretch
 *      - Add ability to delete a task:
 *      - Parent passes onDelete(index) to child
 *      - Add ability to mark task complete:
 *      - tasks become objects { text, completed }
 */

export const TodoApp = () => {
  const [tasks, setTasks] = useState<string[]>([
    { todo: "do letphil hw", isCompleted: false },
  ]);
  const [value, setValue] = useState<string>("");

  return (
    <div>
      <input
        placeholder="task name"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          setTasks((prev) => {
            return [...prev, value];
          });
          setValue("");
        }}
      >
        Add Task
      </button>
      <div>
        <TodoList tasks={tasks} />
      </div>
    </div>
  );
};
