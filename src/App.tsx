import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './Todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const newTodoHandler = (todoText: string) => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), description: todoText}]);
  }

  const removeTodosHandler = (id: string) => {
    const newTodos = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <NewTodo  onAddTodo={newTodoHandler} />
      <TodoList items={todos} onRemoveTodo={removeTodosHandler} />
    </div>
  );
}

export default App;
