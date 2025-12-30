'use client';

import { supabase } from '@/lib/supabase';

interface TodoItemProps {
  todo: {
    id: number;
    title: string;
    completed: boolean;
  };
}

export function TodoItem({ todo }: TodoItemProps) {
  const handleToggleComplete = async () => {
    await supabase
      .from('todos')
      .update({ completed: !todo.completed })
      .eq('id', todo.id);
  };

  const handleDelete = async () => {
    await supabase
      .from('todos')
      .delete()
      .eq('id', todo.id);
  };

  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
      <div>
        <button onClick={handleToggleComplete} className="text-green-500 mr-2">{todo.completed ? 'Undo' : 'Complete'}</button>
        <button onClick={handleDelete} className="text-red-500">Delete</button>
      </div>
    </li>
  );
}
