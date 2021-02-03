import React from "react";
import { Todo } from "../types/Todo";

interface Props {
  todo: Todo;
  onDelete(id: string): void;
  onMoveDown(todo: Todo): void;
  onMoveUp(todo: Todo): void;
}

const TodoItem: React.FC<Props> = ({
  todo,
  onDelete,
  onMoveDown,
  onMoveUp,
}) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleOnMoveDown = () => {
    onMoveDown(todo);
  };

  const handleOnMoveUp = () => {
    onMoveUp(todo);
  };

  return (
    <li key={todo.id}>
      <p> {todo.description}</p>
      <button onClick={handleDelete}> Delete </button>
      <button onClick={handleOnMoveDown}> Move Down </button>
      <button onClick={handleOnMoveUp}> Move Up </button>
    </li>
  );
};

export default TodoItem;
