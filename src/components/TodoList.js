import "../styles.css";

import DeleteTodo from './DeleteTodo'

const TodoList = ({ list, onDelete }) => {
  return (
    <div className="todo-list">
      {list.map((todo, id) => {
        return (
          <div key={id} className="todo-item">
            {todo.title}
            <DeleteTodo  onClick={() => onDelete(id)}/>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;