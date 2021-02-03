import React, { useState } from "react";
import { Todo } from "../types/Todo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoView = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (value: string) => {
    if (!value) return alert("Todo description is cannot be empty");

    const todo: Todo = {
      id: Math.random().toString(),
      description: value,
      isDone: false,
    };
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (id: string) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };

  const handleMoveDownTodo = (todo: Todo) => {
    const currentIndex = todos.findIndex((t) => t.id === todo.id);
    const lastIndex = todos.length - 1;
    const nextIndex = currentIndex + 1;
    if (lastIndex === currentIndex) return alert("Cannot move down todo");
    const newTodos = todos.filter((t) => t.id !== todo.id);
    newTodos.splice(nextIndex, 0, todo);
    setTodos(newTodos);
  };

  const handleMoveUp = (todo: Todo) => {
    const currentIndex = todos.findIndex((t) => t.id === todo.id);
    const nextIndex = currentIndex - 1;
    if (currentIndex === 0) return alert("Cannot move up todo");
    const newTodos = todos.filter((t) => t.id !== todo.id);
    newTodos.splice(nextIndex, 0, todo);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onMoveDown={handleMoveDownTodo}
        onMoveUp={handleMoveUp}
      />
    </div>
  );
};

export default TodoView;
