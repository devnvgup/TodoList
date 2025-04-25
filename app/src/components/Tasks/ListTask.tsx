import React, { useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableTodoItem from "./SortableTodoItem";
import FormAddTodo from "../Form/FormAddTodo";

function ListTask() {
  const [tasks, setTasks] = useState([
    { id: "1", title: "hello", description: "xin chao", completed: false },
    { id: "2", title: "hi", description: "how are you", completed: false },
    { id: "3", title: "xin chao", description: "xin chao", completed: false },
    {
      id: "4",
      title: "casanamita",
      description: "how are you",
      completed: false,
    },
    { id: "5", title: "hello", description: "xin chao", completed: false },
    { id: "6", title: "hi", description: "how are you", completed: false },
    { id: "7", title: "hello", description: "", completed: false },
    { id: "8", title: "hi", description: "how", completed: false },
    // { id: "9", title: "hello", description: "xin chao", completed: false },
    // { id: "5", title: "hello", description: "xin chao", completed: false },
    // { id: "6", title: "hi", description: "how are you", completed: false },
    // { id: "7", title: "hello", description: "xin chao", completed: false },
    // { id: "8", title: "hi", description: "how are you", completed: false },
    // { id: "9", title: "hello", description: "xin chao", completed: false },
  ]);

  interface Tasks {
    id: string;
    title: string;
    description: string;
    completed: boolean;
  }

  const sensors = useSensors(useSensor(PointerSensor));

  const [activeTask, setActiveTask] = useState<Tasks>();
  const [editId, setEditId] = useState();

  useEffect(() => {
    if (!editId) return;
    const oldIndex = tasks.findIndex((t) => t.id === editId);
    setTasks(arrayMove(tasks, oldIndex, oldIndex - 1));
  }, [editId]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = tasks.findIndex((t) => t.id === active.id);
      const newIndex = tasks.findIndex((t) => t.id === over?.id);
      setTasks(arrayMove(tasks, oldIndex, newIndex));
    }
  };

  const handleDragStart = (event: DragStartEvent) => {
    const id = event.active.id;
    const dragged = tasks.find((t) => t.id === id);
    setActiveTask(dragged);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleGetId = (id: any) => {
    setEditId(id);
  };

  return (
    <DndContext
      onDragStart={handleDragStart}
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={tasks.map((item) => item.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex flex-col">
          {console.log("tasks:", tasks, "editId:", editId)}
          {tasks.map((item) =>
            editId != item.id ? (
              <SortableTodoItem
                key={item.id}
                task={item}
                handleGetId={handleGetId}
                toggleTask={toggleTask}
              />
            ) : (
              <FormAddTodo
                key={item.id}
                setIsAdding={() => {}}
                setDes={() => {}}
                setTitle={() => {}}
              />
            )
          )}
        </div>
      </SortableContext>

      {/* <DragOverlay>
        {activeTask && (
          <SortableTodoItem task={activeTask} toggleTask={() => {}} isOverlay />
        )}
      </DragOverlay> */}
    </DndContext>
  );
}

export default ListTask;
