import "../styles.css";
import { useState, useEffect } from "react";

// Import components
import AddTodo from './AddTodo.js'
import TodoList from './TodoList.js'

// Custom hook to store Todo Items on local storage
const useLocalStorageInTodo = (localStorageKey, todos) => {
  const json = localStorage.getItem(localStorageKey);
  const todoLists = JSON.parse(json) || []; 

  const [todoList, setTodoList] = useState(todoLists || todos);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todoList))
  }, [todoList])

  return [todoList, setTodoList];
}


const TodoApp = ({ todos }) => {
  const [todoList, setTodoList] = useLocalStorageInTodo("todoLists", todos);
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
