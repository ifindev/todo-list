import { useState, useEffect } from "react";

const useLocalStorageInTodo = (todos) => {
  const json = localStorage.getItem("todoLists");
  const todoLists = JSON.parse(json) || []; 

  const [todoList, setTodoList] = useState(todoLists || todos);
  useEffect(() => {
    localStorage.setItem("todoLists", JSON.stringify(todoList))
  }, [todoList])

  return [todoList, setTodoList];
}

export default useLocalStorageInTodo;