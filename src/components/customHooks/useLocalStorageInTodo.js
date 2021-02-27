import { useState, useEffect } from "react";

const useLocalStorageInTodo = (localStorageKey, todos) => {
  const json = localStorage.getItem(localStorageKey);
  const todoLists = JSON.parse(json) || []; 

  const [todoList, setTodoList] = useState(todoLists || todos);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todoList))
  }, [todoList])

  return [todoList, setTodoList];
}

export default useLocalStorageInTodo;