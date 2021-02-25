import "../styles.css";

const TodoList = ({ list }) => {
  return (
    <div className="todo-list">
      {list.map((todo, id) => {
        return (
          <p key={id} className="todo-item">
            {todo.title}
          </p>
        );
      })}
    </div>
  );
};

export default TodoList;