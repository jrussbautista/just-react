import React from "react";
import { Todo } from "../types/Todo";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  onDelete(id: string): void;
  onMoveDown(todo: Todo): void;
  onMoveUp(todo: Todo): void;
}

const TodoList: React.FC<Props> = ({
  todos,
  onDelete,
  onMoveDown,
  onMoveUp,
}) => {
  return (
    <div>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, index) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              onDelete={onDelete}
              onMoveDown={onMoveDown}
              onMoveUp={onMoveUp}
            />
          ))}
        </ul>
      ) : (
        <p> No todos yet.</p>
      )}
    </div>
  );
};

export default TodoList;
