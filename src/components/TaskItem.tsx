import type { Task } from "../App";

type TaskItemProps = {
  task: Task;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export default function TaskItem({ task, onDelete, onToggle }: TaskItemProps) {
  return (
    <li
      key={task.id}
      className={`flex items-center justify-between bg-white/90 dark:bg-slate-800/90 shadow-md hover:shadow-2xl px-5 py-3 rounded-xl transition-all duration-200 border border-indigo-100 dark:border-indigo-700 hover:border-pink-300 dark:hover:border-pink-500 group animate-fade-in`}
    >
    <label className="flex items-center gap-3 cursor-pointer select-none">
        <input 
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        className="w-5 h-5 accent-indigo-500 transition-colors"
         />
         <span className={`text-lg font-semibold transition-colors ${task.completed ? "line-through text-slate-500 dark:text-slate-400" : "text-slate-800 dark:text-slate-100"}`}>
                {task.text}
            </span>
    </label>
      <button
        onClick={() => onDelete(task.id)}
        className="ml-3 px-3 py-2 rounded-lg text-white bg-pink-100 hover:bg-rose-500 focus:ring-2 focus:ring-pink-300 focus:outline-none shadow transition"
        title="Delete"
      >
        ❌
      </button>
    </li>
  );
}
