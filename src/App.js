// App.jsx
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  setBasePath(
    "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.15.0/cdn/"
  );
  const tasks = useSelector((state) => state.todos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>BASIC TODO APP</h1>
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
