type TodoTask = {
  task: string;
  deleteTask: (task: string) => void;
};

export const TodoItem = ({ task, deleteTask }: TodoTask) => {
  return (
    <div>
      <h1>{task}</h1>
      <p>date: 01/01/01</p>
      <button>completed</button>
      <button onClick={() => deleteTask(task)}>delete</button>
    </div>
  );
};
