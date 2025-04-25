import { Dispatch, SetStateAction } from "react";

interface FormAddTodoProps {
  setIsAdding: Dispatch<SetStateAction<boolean>>;
  setDes: Dispatch<SetStateAction<string>>;
  setTitle: Dispatch<SetStateAction<string>>;
}

function FormAddTodo({ setIsAdding, setDes, setTitle }: FormAddTodoProps) {
  const handleCancel = () => {
    setIsAdding(false);
  };
  return (
    <div className="bg-[#1e1e1e] border border-gray-700 rounded-xl p-4 w-[100%]  text-white transition-all duration-300 ease-in-out animate-fade-in mt-[16px]">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        className="w-full bg-transparent text-lg font-semibold placeholder-gray-400 outline-none"
      />

      <textarea
        onChange={(e) => setDes(e.target.value)}
        placeholder="Description"
        className="w-full bg-transparent mt-1 text-sm placeholder-gray-500 outline-none resize-none"
        rows={1}
      ></textarea>

      <div className="flex gap-2 mt-4">
        <button className="flex items-center gap-1 border border-gray-600 px-3 py-1 rounded hover:border-white">
          <i className="icon">📅</i> Date
        </button>
        <button className="flex items-center gap-1 border border-gray-600 px-3 py-1 rounded hover:border-white">
          🚩 Priority
        </button>
        <button className="flex items-center gap-1 border border-gray-600 px-3 py-1 rounded hover:border-white">
          ⏰ Reminders
        </button>
        <button className="border border-gray-600 px-3 py-1 rounded hover:border-white">
          ⋯
        </button>
      </div>

      <div className="border-t border-gray-700 my-4"></div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-400">
          # <b>DSA</b> ⌄
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCancel}
            className="px-4 py-1 bg-gray-700 rounded text-white hover:bg-gray-600"
          >
            Cancel
          </button>
          <button className="px-4 py-1 bg-red-900 text-red-300 rounded">
            Add task
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormAddTodo;
