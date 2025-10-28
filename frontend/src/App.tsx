import React, { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import type { DropResult } from "@hello-pangea/dnd";
import DayColumn from "./components/DayColumn";
import { getTasks, updateTask, createTask } from "./api";
import type { Task } from "./types";

const days = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  const handleDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    const taskId = parseInt(draggableId);

    if (destination.droppableId !== source.droppableId) {
      const updated = await updateTask(taskId, {
        day_of_week: parseInt(destination.droppableId),
      });
      setTasks((prev) =>
        prev.map((t) => (t.id === updated.id ? updated : t))
      );
    }
  };

  const handleAddTask = async (dayIndex: number) => {
    const title = window.prompt("Titolo del task:");
    if (!title) return;

    const newTask = await createTask({
      title,
      day_of_week: dayIndex,
      description: "",
      position: 0,
    });

    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <div className="flex gap-3 p-4 overflow-x-auto">
      <DragDropContext onDragEnd={handleDragEnd}>
        {days.map((day, i) => (
          <DayColumn
            key={i}
            day={day}
            dayIndex={i}
            tasks={tasks.filter((t) => t.day_of_week === i)}
            onAddTask={() => handleAddTask(i)}
          />
        ))}
      </DragDropContext>
    </div>
  );
};

export default App;
