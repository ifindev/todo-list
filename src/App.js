import "./styles.css";
import TodoApp from './components/TodoApp';


const todos = [
  {
    id: 1,
    title: "Watering flowers on the garden",
    dueDate: "15 Mei 2021",
    completed: false
  },
];

const App = () => {
	return(
		<TodoApp todos={todos} />
	);
}

export default App;