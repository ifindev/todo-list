import { useState } from "react";
import "./styles.css";

export default function TodoApp({ todos }) {
  const [todoList, setTodoList] = useState(todos);
  const [newTodo, setNewTodo] = useState("");

  let warningMessage = "You haven't write anything for your new todo :)";

  const handleButtonClick = () => {
    let todoItem = {
      id: 0,
      title: "",
      dueDate: "15 Mei 2021",
      completed: false
    };
    if (newTodo !== "") {
      todoItem.id = todoList.length + 1;
      todoItem.title = newTodo;

      // Add new todo list
      const newTodoList = [...todoList, todoItem];
      setTodoList(newTodoList);

      // Clear the input
      setNewTodo("");
    } else {
      alert(warningMessage);
    }
  };

  const newTodoHandle = (item) => {
    setNewTodo(item);
    // console.log(newTodo);
  };

  return (
    <div className="TodoApp">
      <h1>My Todo List</h1>
      <AddTodo
        newTodo={newTodo}
        onNewTodo={newTodoHandle}
        onButtonClick={handleButtonClick}
      />
      <TodoList list={todoList} />
    </div>
  );
}

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