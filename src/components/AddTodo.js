import "../styles.css";

const AddTodo = ({ newTodo, onNewTodo, onButtonClick }) => {
  const newTodoHandle = (event) => {
    onNewTodo(event.target.value);
  };

  return (
    <div className="AddTodo">
      <textarea
        type="text"
        placeholder="Add new todo..."
        rows="2"
        cols="50"
        value={newTodo}
        onChange={newTodoHandle}
        className="todo-input"
      />
      <button onClick={onButtonClick} className="todo-btn">
        Add New Todo
      </button>
    </div>
  );
};

export default AddTodo;