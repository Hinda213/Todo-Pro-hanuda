import type { Task } from "../App";
import TaskItem from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export default function TaskList({ tasks, onDelete, onToggle }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center mt-7 opacity-55 select-none animate-fade-in">
        <span className="text-5xl mb-2">📝</span>
        <p className="text-center text-slate-500 font-semibold text-lg">No tasks yet.<br/>Add one above!</p>
      </div>
    );
  }

  return (
    <ul className="mt-4 space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
