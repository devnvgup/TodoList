import { useState } from "react";
import { useParams } from "react-router-dom";
import FormAddTodo from "../Form/FormAddTodo";
import { Plus } from "lucide-react";
import ListTask from "../Tasks/ListTask";

function ContentDetail() {
  const params = useParams();
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");

  const handleAdding = () => {
    setIsAdding(true);
  };
  return (
    <div className="flex flex-col p-5 h-screen]">
      <div className="text-[white] p-3 text-[12px] opacity-70">
        My Projects /
      </div>
      <h1 className="flex justify-center text-[white] text-[26px]">
        {params?.projectName}
      </h1>
      <div className="mt-[50px] px-10 flex justify-center flex-col space-y-2">
        <ListTask />
        {!isAdding ? (
          <div
            className="flex flex-row space-x-1 group  mt-[16px]"
            onClick={handleAdding}
          >
            <Plus className="text-[#DE4B4A] rounded-full group-hover:bg-[#DE4B4A] group-hover:text-[white]" />
            <div className="text-[#808080] group-hover:text-[#DE4B4A]">
              Add task
            </div>
          </div>
        ) : (
          <FormAddTodo
            setIsAdding={setIsAdding}
            setTitle={setTitle}
            setDes={setDes}
          />
        )}
      </div>
    </div>
  );
}

export default ContentDetail;
