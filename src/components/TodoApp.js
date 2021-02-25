import "../styles.css";
import { useState } from "react";

// Import components
import AddTodo from './AddTodo.js'
import TodoList from './TodoList.js'

const TodoApp = ({ todos }) => {
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

  const deleteHandler = (id) => {
    setTodoList((last) => last.filter((_, idx) => idx!==id));
  }

  return (
    <div className="TodoApp">
      <h1>My Todo List</h1>
      <AddTodo
        newTodo={newTodo}
        onNewTodo={newTodoHandle}
        onButtonClick={handleButtonClick}
      />
      <TodoList list={todoList} onDelete={deleteHandler}/>
    </div>
  );
}

export default TodoApp;
