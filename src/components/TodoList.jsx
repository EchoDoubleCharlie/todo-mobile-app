import TodoItem from './TodoItem';

function TodoList({ todos, deleteTodo, toggleComplete, startEdit }) {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="empty-message">No todos found. Add one above!</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
            startEdit={startEdit}
          />
        ))
      )}
    </div>
  );
}

export default TodoList;