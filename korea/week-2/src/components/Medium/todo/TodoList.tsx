import { TodoItem } from "./TodoItem";
/**
 *
 * props: {
 *  tasks: ["chris", "riley", "austin"]
 * }
 *
 */

type TodoTypes = {
  tasks: string[];
  deleteTask: (task: string) => void;
};

export const TodoList = (props: TodoTypes) => {
  return (
    <div>
      {props.tasks.map((task) => {
        return <TodoItem task={task} deleteTask={props.deleteTask} />;
      })}
    </div>
  );
};
