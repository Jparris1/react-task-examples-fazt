import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  const { tasks} = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-2xl font-bold text-white mb-3 text-center">No hay Tareas Asignadas</h1>;
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task}  />
      ))}
    </div>
  );
}

export default TaskList;
