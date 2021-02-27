import "../styles.css";
import { useState } from "react";

// Import components
import AddTodo from './AddTodo.js'
import TodoList from './TodoList.js'
import useLocalStorageInTodo from './customHooks/useLocalStorageInTodo';

const TodoApp = ({ todos }) => {
  const [todoList, setTodoList] = useLocalStorageInTodo(todos);
  const [newTodo, setNewTodo] = useState("");

  let warningMessage = "You haven't write anything for your new todo :)";

  const handleAddTodo = () => {
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

  const completeHandler = (id) => {
    setTodoList((last) => last.map(({completed, ...item}, idx) => {
    	if(idx === id) {
    		return {...item, completed:!completed};
    	}
    	return {...item, completed};
    }));
  }

  return (
    <div className="TodoApp">
      <h1>My Todo List</h1>
      <AddTodo
        newTodo={newTodo}
        onNewTodo={newTodoHandle}
        onButtonClick={handleAddTodo}
      />
      <TodoList list={todoList} onDelete={deleteHandler} onComplete={completeHandler}/>
    </div>
  );
}

export default TodoApp;
