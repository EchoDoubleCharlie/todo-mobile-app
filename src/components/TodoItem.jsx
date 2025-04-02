import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

function TodoItem({ todo, deleteTodo, toggleComplete, startEdit }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div 
        className="todo-text" 
        onClick={() => toggleComplete(todo.id)}
        role="button"
        tabIndex="0"
        onKeyDown={(e) => e.key === 'Enter' && toggleComplete(todo.id)}
      >
        {todo.text}
        {todo.completed && <FaCheck className="check-icon" />}
      </div>
      <div className="todo-actions">
        <button 
          onClick={() => startEdit(todo)} 
          className="edit-btn"
          aria-label={`Edit ${todo.text}`}
        >
          <FaEdit />
        </button>
        <button 
          onClick={() => deleteTodo(todo.id)} 
          className="delete-btn"
          aria-label={`Delete ${todo.text}`}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;