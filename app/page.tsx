'use client';

import { useState } from 'react';
import { TodoList } from '@/components/TodoList';

export default function Home() {
  const [title, setTitle] = useState('');

  const handleAddTodo = async () => {
    // Add todo to Supabase
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo} className="bg-blue-500 text-white p-2">Add Todo</button>
      </div>
      <TodoList />
    </div>
  );
}
