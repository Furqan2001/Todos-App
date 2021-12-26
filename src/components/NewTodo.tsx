import React, { useRef } from 'react';
import './NewTodo.css';

interface NewTodoProps {
  onAddTodo: (todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = props => {
const inputText = useRef<HTMLInputElement>(null);
  
const todoSubmitHandler = (event: React.FormEvent) => {
  event.preventDefault();
  props.onAddTodo(inputText.current!.value);
  inputText.current!.value = "";
}

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" required ref={inputText} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodo;