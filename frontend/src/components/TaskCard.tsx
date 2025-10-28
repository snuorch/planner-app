import React from "react";
import type { Task } from "../types";

interface Props {
  task: Task;
}

const TaskCard: React.FC<Props> = ({ task }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 mb-2">
      <div className="font-semibold">{task.title}</div>
      {task.description && <p className="text-sm text-gray-500">{task.description}</p>}
    </div>
  );
};

export default TaskCard;
