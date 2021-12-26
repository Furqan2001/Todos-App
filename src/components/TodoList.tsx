import React from 'react';
import "./TodoList.css";

interface TodoListProps {
  items: {id: string, description: string}[],
  onRemoveTodo: (id: string) => void
}

const TodoList: React.FC<TodoListProps> = props => {
  return <ul>
    {props.items.map(todo => (
    <li key={todo.id}>
      <span>{todo.description}</span>
      <button onClick={() => props.onRemoveTodo(todo.id)}>Delete</button>
    </li>
    ))}
  </ul>
}

export default TodoList;