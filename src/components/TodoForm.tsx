import { on } from "process";
import React, { useState } from "react";

interface Props {
  onSubmit(value: string): void;
}

const TodoForm: React.FC<Props> = ({ onSubmit }) => {
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(todoText);
    setTodoText("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          onChange={handleChange}
          name="todo"
          placeholder="Add Todo here"
          value={todoText}
        />
      </div>
      <div>
        <button type="submit"> Add </button>
      </div>
    </form>
  );
};

export default TodoForm;
