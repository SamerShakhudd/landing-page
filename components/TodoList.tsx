'use client';

import { useEffect, useState } from 'react';
import { TodoItem } from '@/components/TodoItem';
import { supabase } from '@/lib/supabase';

export function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await supabase.from('todos').select('*');
      setTodos(data || []);
    };
    fetchTodos();
  }, []);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
