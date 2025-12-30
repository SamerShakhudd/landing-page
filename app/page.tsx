'use client';

import { useState, useEffect } from 'react';
import { TodoList } from '@/components/TodoList';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const { data, error } = await supabase.from('todos').select('*');
    if (error) console.error('Error fetching todos:', error);
    else setTodos(data);
  };

  const addTodo = async () => {
    if (newTodo.trim() === '') return;
    const { data, error } = await supabase.from('todos').insert([{ title: newTodo }]);
    if (error) console.error('Error adding todo:', error);
    else {
      setTodos([...todos, ...data]);
      setNewTodo('');
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Add a new todo"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white p-2">Add</button>
      </div>
      <TodoList todos={todos} />
    </main>
  );
}
