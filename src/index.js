import { StrictMode } from "react";
import ReactDOM from "react-dom";

import TodoApp from "./App";

const todos = [
  {
    id: 1,
    title: "Watering flowers on the garden",
    dueDate: "15 Mei 2021",
    completed: false
  },
];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TodoApp todos={todos} />
  </StrictMode>,
  rootElement
);