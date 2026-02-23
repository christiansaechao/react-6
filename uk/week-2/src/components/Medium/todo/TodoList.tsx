import React, { useState } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ tasks }: { tasks: string[] }) => {
  return (
    <div>
      {tasks.map((t) => (
         <TodoItem task={t}></TodoItem>
      ))}
    </div>
  );
};
