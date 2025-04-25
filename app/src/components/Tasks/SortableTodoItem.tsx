import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import { Check, Edit, GripVertical, Trash2 } from "lucide-react";
import clsx from "clsx";
import { useRef } from "react";

function SortableTodoItem({ task, toggleTask, handleGetId }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const pointerDownRef = useRef<{ x: number; y: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerDownRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!pointerDownRef.current) return;

    const dx = Math.abs(e.clientX - pointerDownRef.current.x);
    const dy = Math.abs(e.clientY - pointerDownRef.current.y);

    const isClick = dx < 5 && dy < 5;

    if (isClick) {
      toggleTask(task.id);
    }

    pointerDownRef.current = null;
  };

  const handleEdit = (e: React.PointerEvent, id: string) => {
    if (!pointerDownRef.current) return;

    const dx = Math.abs(e.clientX - pointerDownRef.current.x);
    const dy = Math.abs(e.clientY - pointerDownRef.current.y);

    const isClick = dx < 5 && dy < 5;

    if (isClick) {
      handleGetId(id);
    }

    pointerDownRef.current = null;
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="flex flex-row items-center space-x-3 group">
        <div className="flex flex-row space-x-1">
          <GripVertical className="cursor-grab text-[white] w-4 h-4 opacity-0  group-hover:opacity-100 transition-opacity duration-200" />
          <div
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            className={clsx(
              "w-4 h-4 border rounded-full flex items-center justify-center cursor-pointer",
              task.completed
                ? "bg-[#DE4B4A] border-[#DE4B4A]"
                : "border-gray-400"
            )}
          >
            {task.completed && <Check className="text-white w-3 h-3" />}
          </div>
        </div>
        <div
          className={`flex flex-col mt-[20px] ${
            task.completed ? "line-through text-white" : "text-black"
          }`}
        >
          <div className="flex flex-row w-[70vw] justify-between items-center">
            <div className="text-white font-semibold">{task.title}</div>
            <div className="ml-auto  flex flex-row space-x-2">
              <Edit
                onPointerDown={handlePointerDown}
                onPointerUp={(e) => handleEdit(e, task.id)}
                className="text-[white] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                size={22}
              />
              <Trash2
                className="text-[#D35D52] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                width={22}
              />
            </div>
          </div>
          <div
            className={`text-gray-400 text-sm ${
              !task.description ? "opacity-0" : ""
            }`}
          >
            {task.description || "none"}
          </div>
        </div>
      </div>

      <div className="border-b border-white/20" />
    </div>
  );
}

export default SortableTodoItem;
