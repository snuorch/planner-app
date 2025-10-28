import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import type { Task } from "../types";

interface Props {
  day: string;
  dayIndex: number;
  tasks: Task[];
  onAddTask: () => void;
}

const DayColumn: React.FC<Props> = ({ day, dayIndex, tasks, onAddTask }) => {
  return (
    <div className="bg-gray-100 rounded-xl p-3 min-w-[220px]">
      <h3 className="font-bold mb-2 text-center">{day}</h3>
      <Droppable droppableId={String(dayIndex)}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="min-h-[100px]">
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskCard task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <button
        className="mt-2 w-full bg-blue-500 text-white rounded-md py-1 hover:bg-blue-600"
        onClick={onAddTask}
      >
        + Aggiungi
      </button>
    </div>
  );
};

export default DayColumn;
