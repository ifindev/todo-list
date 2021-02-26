import "../styles.css";

import DeleteTodo from './DeleteTodo'
import ChecklistTodo from './ChecklistTodo'

const TodoList = ({ list, onDelete, onComplete }) => {
  return (
    <div className="todo-list">
      {list.map((todo, id) => {
        return (
          <div key={id} className="todo-item">
            {todo.completed ? <span style={{textDecoration:"line-through"}}>{todo.title}</span> : <span style={{textDecoration:"none"}}>{todo.title}</span>}
            <div className="todo-btn">
            <ChecklistTodo onClick={() => onComplete(id)}/>
            <DeleteTodo  onClick={() => onDelete(id)}/>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;