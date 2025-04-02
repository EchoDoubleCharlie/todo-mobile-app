import { useState, useEffect } from 'react';
import { FaPlus, FaEdit } from 'react-icons/fa';

function TodoForm({ addTodo, editTodo }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (editTodo) {
      setValue(editTodo.text);
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    addTodo({
      text: value,
      id: editTodo ? editTodo.id : Date.now(),
      completed: editTodo ? editTodo.completed : false,
    });
    setValue('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="todo-input"
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        enterKeyHint="done"
      />
      <button 
        type="submit" 
        className="todo-button"
        aria-label={editTodo ? "Update todo" : "Add todo"}
      >
        {editTodo ? <FaEdit /> : <FaPlus />}
      </button>
    </form>
  );
}

export default TodoForm;