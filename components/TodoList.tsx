'use client';

import { TodoItem } from '@/components/TodoItem';

interface Todo {
  id: number;
  title: string;
}

interface TodoListProps {
  todos: Todo[];
}

export function TodoList({ todos }: TodoListProps) {
  return (
    <ul className="list-disc pl-5">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
