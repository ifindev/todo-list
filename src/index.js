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
  {
    id: 2,
    title: "Going out with my girlfriend",
    dueDate: "11 Mei 2021",
    completed: false
  },
  {
    id: 3,
    title: "buying cake for birthday party",
    dueDate: "16 Mei 2021",
    completed: false
  },
  {
    id: 4,
    title: "appointment with Dr. Kyle",
    dueDate: "20 Mei 2021",
    completed: false
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TodoApp todos={todos} />
  </StrictMode>,
  rootElement
);