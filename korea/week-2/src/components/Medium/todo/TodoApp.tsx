import { useState } from "react";
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
 *        - Add ability to delete a task:
 *        - Parent passes onDelete(index) to child
 *        - Add ability to mark task complete:
 *        - tasks become objects { text, completed }
 */

/**
 * 1. Click delete button
 * 2. Task should be deleted
 * 3.
 * 4.
 */

// [].filter(() => conditional)

// === > < || && !
// [
//    { id: 1, task: "test 1 ", isComplete: false },
//    { id: 2, task: "test 1 ", isComplete: true },
//    { id: 3, task: "test 1 ", isComplete: true },
// ]

// reduce, map, filter
// .map((item) => task.task == completed.task ? task.isComplete = true : task.isCompleted = false)
// { ...task, isComplete: true }

export const TodoApp = () => {
  const [tasks, setTasks] = useState<string[]>(["test1", "test2", "test3"]);
  const [input, setInput] = useState<string>("");

  function deleteTask(taskToDelete: string) {
    const filteredItems = tasks.filter((task) => task !== taskToDelete);
    setTasks(filteredItems);
  }

  return (
    <div>
      <input
        value={input}
        id="taskInput"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setTasks([...tasks, input])}>Add Task</button>
      <TodoList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};
