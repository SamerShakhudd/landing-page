'use client';

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
  };
}

export function TodoItem({ todo }: TodoItemProps) {
  return <li className="p-2 border-b">{todo.title}</li>;
}
