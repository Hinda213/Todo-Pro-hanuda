import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
   const [dark, setDark] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(() => {
    try{
      const stored = localStorage.getItem("tasks");
      return stored ? JSON.parse(stored) : [];
    } catch{
      return [];
    }
  });
 

 

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleDark = () => {
    const nextDark = !dark;
    setDark(nextDark);

    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 overflow-hidden">
     
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(8, 9, 86, 0.1)_0,transparent_70%)] dark:bg-[radial-gradient(circle_at_60%_40%,rgba(30,41,59,0.15)_0,transparent_70%)] w-full h-full -z-10"
        aria-hidden="true"
      />
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border-2 border-indigo-200 dark:border-indigo-700/50 transition-all duration-300">
        <Header toggleDark={toggleDark} dark={dark} />
        <div className="p-6">
          <AddTask onAdd={addTask} />
          <TaskList onToggle={toggleTask} tasks={tasks} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
